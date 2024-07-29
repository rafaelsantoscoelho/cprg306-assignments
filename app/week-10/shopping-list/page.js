"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { dbGetItems, dbAddItem } from "../_services/shopping-list-service";
import { useEffect } from "react";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!user) return;

        dbGetItems(user.uid, setItems);
  
    }, [user]);

    function handleAddItem(item) {
        const id = dbAddItem(user.uid, item);
        item.id = id;
        setItems((currentItems) => { return [item, ...currentItems]})
    }

    function handleItemSelect(event) {
        const liContent = event.currentTarget.textContent;
        // console.log(liContent);
        const removeEmojis = liContent.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, '').trim();
        // console.log(removeEmojis);
        // console.log(removeEmojis.split(' ').indexOf('Buy'));
        // console.log(removeEmojis.split(' ').slice(0, removeEmojis.split(' ').indexOf('Buy')));
        const commaSplit = removeEmojis.indexOf(",") !== -1 ? removeEmojis.split(',')[0].trim() : removeEmojis.split(' ').slice(0, removeEmojis.split(' ').indexOf('Buy')).join(' ').trim();
        // console.log(commaSplit);
        setSelectedItemName((prev) => { return commaSplit});
    }

    //  console.log(user.uid);

    return (
        <main className="bg-slate-950 p-2 m-2 h-full">
            <h2 className="text-3xl font-bold mb-4 text-white">Shopping List</h2>
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );

}