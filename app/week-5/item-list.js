"use client"

import { useState } from "react";
import itemsList from "./items.json";
import Item from "./item";

export default function ItemList()
{
    const [sortBy, setSortBy] = useState("name");

    const sortByName = (a, b) => 
    {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    };

    const sortByCategory = (a, b) => 
    {
        if (a.category > b.category) return 1;
        if (a.category < b.category) return -1;
        return 0;
    };

    const handleNameClick = (event) => {
        setSortBy("name");
    }
    
    const handleCategoryClick = (event) => {
        setSortBy("category");
    }


    return (
        <div>
            <div>
                <label htmlFor="sort" className="text-white">Sort by:</label>
                <button className= {sortBy === "name" ? "bg-orange-500 p-1 m-2 w-28" : "bg-orange-700 p-1 m-2 w-28"} onClick={handleNameClick}>Name</button>
                <button className={sortBy === "category" ? "bg-orange-500 p-1 m-2 w-28" : "bg-orange-700 p-1 m-2 w-28"} onClick={handleCategoryClick}>Category</button>            
            </div>
            <ul>
                { 
                    itemsList.sort(sortBy === "name" ? sortByName : sortByCategory).map((item) => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />)
                }
            </ul>
        </div>
    );
}