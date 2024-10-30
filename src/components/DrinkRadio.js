import React from "react";

export default function DrinkRadio ({formData, handleChange}) {
    const drinkList = [
        {drink:"قهوه", id:"coffe"},
        {drink:"چای", id:"tea"},
        {drink:"نوشابه", id:"soda"},
        {drink:"بنزین", id:"oil"}
    ];

    const createRadio = drinkList.map (item => {
        return (
            <div className="drink-option">
                <input type="radio" name="drinkRadio" id={item.id} value={item.id}
                checked={formData.drinkRadio === item.id ? true : false}
                onChange={handleChange}/>
                
                <label htmlFor={item.id}>{item.drink}</label>
            </div>
        )
    });

    return (
        <div className="drink-radio">
            <p className="drink-question">نوشیدنی مورد علاقه شما</p>
            {createRadio}
        </div>
    );
}