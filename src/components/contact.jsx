import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div>
            <div className='mt-5'>
                <p className="m-0 text-blue-100 lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] text-start">Do You Have Any Ideas?</p>
                <p className="m-0 text-gray-50 lg:text-[20px] md:text-[19px] sm:text-[18px] text-[17px]">Connect With Me</p>
                <p className="m-0 text-[#9f9fa9] mt-2">Feel Free to contact me @ <Link className='underline' to={"mailto:nwekefavour1315@gmail.com"}>nwekefavour1315@gmail.com</Link></p>
            </div>
        </div>
    );
}

export default Contact;