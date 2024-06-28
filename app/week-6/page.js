"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page()
{
    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        setItems((currentItems) => { return [item, ...currentItems]})
    }

    return (
        <main className="bg-slate-950">
            <div className="m-4">
                <h2 className="text-3xl font-bold m-2 text-white">Shopping List</h2>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}/>
            </div>
        </main>
    );
}