import React from 'react';
import ServiceComp from '../components/ServiceComp';
import img1 from '../assets/service/4-768x575.webp';

const Services = () => {
    return (
        <div className=''>
            {/* Banner */}
            <div className="bg-[url('https://cdn.pixabay.com/photo/2017/03/20/04/57/truck-2158284_640.png')] h-72 flex justify-center items-center text-white bg-fixed bg-cover">
                <h3 className='text-4xl font-bold'>Our Services</h3>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <h1 className='text-3xl font-bold'>Car Luxury Interior Builder</h1>
                <p className='opacity-70 mt-5'>
                    Scuderia Motor Design, a leading car luxury interior builder, specializing in Mercedes, excels at transforming the standard interior of a vehicle into a personalized and luxurious space. With SMD expertise as a car luxury interior builder, Scuderia Motor Design creates bespoke automotive interiors that exude opulence and reflect the unique preferences of our clients, particularly in Mercedes vehicles. Using premium materials, advanced technologies, and meticulous craftsmanship as a luxury car interior builder, We ensure that every aspect of the Mercedes interior is tailored to perfection, offering a truly elevated driving experience that surpasses expectations.
                </p>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <ServiceComp text={'Modifying the seats to provide more comfort or support, or to fit the customer’s specific body shape or size.'} title={"Seat modifications"} img={img1} />
                    <ServiceComp text={'Modifying the seats to provide more comfort or support, or to fit the customer’s specific body shape or size.'} title={"Seat modifications"} img={img1} />
                    <ServiceComp text={'Modifying the seats to provide more comfort or support, or to fit the customer’s specific body shape or size.'} title={"Seat modifications"} img={img1} />
                    <ServiceComp text={'Modifying the seats to provide more comfort or support, or to fit the customer’s specific body shape or size.'} title={"Seat modifications"} img={img1} />
                </div>
            </div>
        </div>
    );
};

export default Services;