import { CiHeart } from "react-icons/ci";
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Heading from './Component/Cardheading/Heading'
import Cards from './Component/Cards/Cards'
import Footer from "./Component/Footer/Footer";
import { useState } from "react";




function App() {

const [bookmarked, setBookmarked] = useState([]);

const handleBookmarked = (blog) => {
    const alreadyBookmarked = bookmarked.find(item => item.id === blog.id);
    if (!alreadyBookmarked) {
        setBookmarked([...bookmarked, blog]);
    }
};

const totalBids = bookmarked.reduce((acc, item) => acc + item.bidsCount, 0);
// console.log(bookmarked)
  return (
      <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Heading></Heading>
                    <div className='main-card-container flex text-center'>
                    <div className='card-left-container w-[70%]'>

                    <Cards handleBookmarked = {handleBookmarked}></Cards>
                    </div>
                    <div className='card-right-container w-[30%]'>
                        <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body items-center text-center">
    <div className="flex">
        <button className="text-3xl"><CiHeart/></button>
        <h2 className="card-title text-3xl text-[#0E2954]">Favorite Items</h2>
    </div>
    

    {
        bookmarked.map((marked)=> <p>{marked.currentBidPrice}</p>)
    }
    <div className="flex justify-between items-center gap-2">
     <h2 className="text-[20px] text-[#000000]">Total bids Amount</h2>
     <h3 className="text-[20px] text-[#000000]">{totalBids}</h3>
    </div>
  </div>
</div>
                    </div>

                    
                </div>

                {/* footer */}
                <div className="text-center bg-amber-50">
<Footer></Footer>
                </div>
     
    

      </>
  )
}

export default App
