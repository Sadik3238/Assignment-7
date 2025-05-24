import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl text-[#003EA4]'>Action <span className='text-[#FFD337] 2xl'>Gallery</span></h1>
                <div className='flex justify-center gap-2'>
                    <p className='text-[#000000] text-xl'>Bid.</p>
                    <p className='text-[#000000] text-xl'>Win.</p>
                    <p className='text-[#000000] text-xl'>Own.</p>
                </div>
                <div className='mt-2'>
                    <ul className='flex items-center justify-center space-x-5'>
                        <li className='text-[18px] text-[#000000]'>Home</li>
                        <li className='text-[18px] text-[#000000]' >Auctions</li>
                        <li className='text-[18px] text-[#000000]'>Categories</li>
                        <li className='text-[18px] text-[#000000]'>How to works</li>
                    </ul>
                </div>

                <div className='text-center mt-2'>
                    <p className='text-[18px] text-[#000000]'>© 2025 AuctionHub. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;