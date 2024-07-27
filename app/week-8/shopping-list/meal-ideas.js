"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    try {
        if (ingredient === "") return;

        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient);
        const data = await response.json();
        // console.log(data);
        return data.meals;            
    } catch (error) {
        console.error(error);
    }
};


export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async (ingredient) => {
        try {
            const meals = await fetchMealIdeas(ingredient);
            // console.log(meals);
            setMeals(meals);    
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadMealIdeas(ingredient);

    }, [ingredient]);

    const pString = ingredient === "" ? "Select an item to see meal ideas" : (meals ? "Here are some meal ideas using " + ingredient : "No meal ideas found for " + ingredient);
    const ulContent = meals ? meals.map((meal) => <li key={meal.idMeal} className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer text-white">{meal.strMeal}</li>) : "";

    return (
        <div className="flex-1 max-w-sm m-2">
            <div>
                <h3 className="text-xl font-bold text-white">Meal Ideas</h3>
                <div>
                    <p className="text-white">{pString}</p>
                    <ul>{ulContent}</ul>
                </div>
            </div>
        </div>
    )




}