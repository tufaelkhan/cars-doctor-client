import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h3 className='text-4xl text-orange-600 font-bold'>About Us</h3>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat qui exercitationem repudiandae, ea voluptas a repellat iste quisquam explicabo fugiat earum facere minima nobis!</p>
                    <p className="py-2">There are many variations of passages of  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quia alias perspiciatis voluptatum quibusdam quo! Voluptates, labore?</p>
                    <button className="btn btn-warning mt-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;