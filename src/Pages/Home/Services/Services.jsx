import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
const [services, setServices] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
},[])

    return (
        <div className="mt-4">
            <div className="space-y-3">
                <h3 className="text-3xl font-bold text-orange-600 text-center">SERVICES</h3>
                <h3 className="text-3xl font-bold  text-center">Our Services Area</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid in unde aut molestias et <br /> inventore id error soluta numquam consequatur repellat ipsa modi.</p>
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