import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
const [services, setServices] = useState([])
const [asc, setAsc] = useState(true)
const searchRef = useRef(null)
const [search, setSearch] = useState('')

useEffect(()=>{
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc? 'asc' : 'dsc'}`)
    .then(res => res.json())
    .then(data => setServices(data))
},[asc, search])

const handleSearch = () =>{
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value)
}

    return (
        <div className="mt-4">
            <div className="space-y-3">
                <h3 className="text-3xl font-bold text-orange-600 text-center">SERVICES</h3>
                <h3 className="text-3xl font-bold  text-center">Our Services Area</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid in unde aut molestias et <br /> inventore id error soluta numquam consequatur repellat ipsa modi.</p>
                <div className="form-control">
  <div className="input-group">
    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
            <button onClick={()=>setAsc(!asc)} className="btn btn-primary">{asc? 'price high to low': 'price low to high'}</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;