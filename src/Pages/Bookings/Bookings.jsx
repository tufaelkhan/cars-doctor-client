import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                setBookings(data)
            }else{
                //logout and then navigate
                navigate('/')
            }
        })
    },[url, navigate])

    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE',
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const reamining = bookings.filter( booking => booking._id !== id)
                    setBookings(reamining)
                }
            })
        }
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                //update state
                const reamining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...reamining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h3>your Bookings: {bookings.length}</h3>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Services</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map(booking => <BookingRow
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
            ></BookingRow>)
        }
    </tbody>    
  </table>
</div>
        </div>
    );
};

export default Bookings;