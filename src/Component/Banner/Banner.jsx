import React from "react";

const Banner = () => {
  return (
    <section
      className="h-[400px] bg-cover bg-center  text-white items-start"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/TBbRNd57/Banner-min.jpg')",
      }}
    >
<div className='ml-2'>
  <div className='pl-12 pt-12'>
  <h2 className='text-[#FFFFFF] font-semibold text-[48px] '>
  Bid on Unique Items from <br /> Around the World
  </h2>
  </div>

<div className='pl-12 pt-4'>
<p className='text-[#FFFFFF] font-light text-2xl opacity-80'>
  Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
  </p>
</div>


<div className='pl-12 pt-4'>
  
<button className='w-[235px] h-[55px] bg-[#FFFFFF] items-center rounded-[32px] '><a className='text-[#010000] font-medium text-xl' href="">Explore Auctions</a></button>

</div>

</div>
    </section>
  );
};

export default Banner;
