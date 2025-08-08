import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    const currentYear = new Date().getFullYear();

    return (
        <div className='border-t-1 border-gray-300 px-6 py-5'>
            <div className="sm:flex items-center justify-between text-gray-50">
                <small className='md:text-[17px] text-[16px] name'>© Nweke Favour {currentYear}. All rights reserved.</small>
                <ul className='flex items-center justify-end sm:justify-between gap-4 uppercase footerli'>
                    <li>
                        <Link to={"https://x.com/uncleNf"} target="_blanket" rel="noopener">x
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://github.com/NwekeFavour"} target="_blanket" rel="noopener">gh</Link>
                    </li>
                    <li>
                        <Link to={"https://www.linkedin.com/in/nweke-favour-42209425a/"} target="_blanket" rel="noopener">ln</Link>
                    </li>
                    <li>
                        <Link to={"https://instagram.com/unclenf_"} target="_blanket" rel="noopener">ig</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;