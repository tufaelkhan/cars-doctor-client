import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service
    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value
        const date = form.date.value
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title, 
            service_id: _id,
            price: price,
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('service book succfully')
            }
        })
    }
    return (
        <div>
            <h3 className="text-center text-4xl">checkout book service: {title}</h3>
            <form onSubmit={handleBookService}>
                <div className="card-body">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$ '+price} className="input input-bordered" />
                    </div>
                   </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary btn-block" value="Order Confirm"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;