import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Cards = ({handleBookmarked}) => {


const [cards, setCards] = useState ([])

useEffect (() =>{
fetch("cards.json")
.then ( res => res.json())
.then (data => setCards(data))

},[])

// console.log(cards)

    return (
            <div>
<div className="all-cards grid grid-cols-2 pl-12 p-4 gap-2 border-gray-800">
{
    cards.map((blog)=><Blog key={blog.id} blog={blog} handleBookmarked={handleBookmarked}></Blog>)
}
</div>
            </div>
    );
};

export default Cards;