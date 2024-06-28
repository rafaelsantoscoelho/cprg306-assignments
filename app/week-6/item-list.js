"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({items})
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
        <div className="mt-8">
            <div>
                <label htmlFor="sort" className="text-white">Sort by:</label>
                <button className= {sortBy === "name" ? "bg-orange-500 p-1 m-2 w-28 font-bold" : "bg-orange-700 p-1 m-2 w-28"} onClick={handleNameClick}>Name</button>
                <button className={sortBy === "category" ? "bg-orange-500 p-1 m-2 w-28 font-bold" : "bg-orange-700 p-1 m-2 w-28"} onClick={handleCategoryClick}>Category</button>            
            </div>
            <ul>
                { 
                    [...items].sort(sortBy === "name" ? sortByName : sortByCategory).map((item) => <Item key={item.id} item={item} />)
                }
            </ul>
        </div>
    );
}

