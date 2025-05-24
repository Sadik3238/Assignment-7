import React from "react";
import { CiHeart } from "react-icons/ci";

const Blog = ({blog,handleBookmarked}) => {

    // console.log(blog)
    return (
        <div className="m-2">
            <div className="card bg-base-100 w-80 shadow-sm ">
  <figure className="w-full h-48">
    <img
      src={blog.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#0E2954] font-regular text-[18px]">{blog.title}</h2>
    <h3 className="text-[#000000]">{blog.description}</h3>
    <div className="flex justify-between">
<div>
  <h5 className="text-sm text-[#000000]">Current Bid</h5>
  <p>$2,850</p>
</div>

<div>
  <h5 className="text-sm text-[#000000]">Time Left</h5>
  <p>2 Days left</p>
</div>

<div>
  <h5 className="text-sm text-[#000000]">Bid Now</h5>
<button className="text-2xl"><CiHeart onClick={()=>handleBookmarked(blog)}/></button>

</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;