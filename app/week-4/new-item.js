"use client";

import { useState } from "react";

export default function NewItem()
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            nam: name,
            qty: quantity,
            cat: category
        };

        console.log({item});

        alert(`Added item: ${item.nam}, quantity: ${item.qty}, category: ${item.cat}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const handleName = (event) => {
        // console.dir(event);
        setName(event.target.value);
    }

    const handleQuantity = (event) => {
        // console.dir(event);
        setQuantity(event.target.value);
    }

    const handleCategory = (event) => {
        // console.dir(event);
        setCategory(event.target.value);
    }

    return (
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit} >
            <div className="mb-2">
                <input type="text" placeholder="Item name" required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={name} onChange={handleName}/>
            </div>
            <div className="flex justify-between">
                <input type="number" min="1" max="99" required className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={quantity} onChange={handleQuantity}/>
                
                <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={category} onChange={handleCategory}>
                    <option value disabled>Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
        </form>
    );

}