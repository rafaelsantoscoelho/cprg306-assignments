"use client";

import { useState } from "react";

export default function NewItem({onAddItem})
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();


        let item = {
            id: Array(20).fill().map(() => String.fromCharCode(Math.floor(Math.random() * 26) + (Math.random() < 0.5 ? 65 : 97))).join(''),
            name: name,
            quantity: quantity,
            category: category
        };

        // console.log({item});

        // alert(`Added item: ${item.nam}, quantity: ${item.qty}, category: ${item.cat}`);

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const handleName = (event) => {
        // console.dir(event);
        setName(event.target.value);
    }

    const handlePlusButton = (event) => {
        // console.dir(event);
        setQuantity((prev) => prev + 1);
    }

    const handleMinusButton = (event) => {
        // console.dir(event);
        setQuantity((prev) => prev <= 1 ? 1 : prev - 1);
    }

    // const handleQuantity = (event) => {
    //     // console.dir(event);
    //     setQuantity(event.target.value);
    // }

    const handleCategory = (event) => {
        // console.dir(event);
        setCategory(event.target.value);
    }

    return (
        <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit} >
            <div className="mb-2">
                <input type="text" placeholder="Item name" required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={name} onChange={handleName} />
            </div>
            <div className="flex justify-between">
                <div className="p-2 mt-1 mb-1 rounded-md  bg-white text-white w-36">
                    <div className="flex justify-between">
                        <span className="text-black">{quantity}</span>
                        <div className="flex">
                            <button type="button" className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleMinusButton}>-</button>
                            <button type="button" className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1" onClick={handlePlusButton}>+</button>
                        </div>
                    </div>
                </div>              
                <select name="categoryselector" className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={category} onChange={handleCategory}>
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