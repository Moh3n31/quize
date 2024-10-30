import React from "react";

export default function HateCheck ({formData, handleChange}) {
    const hateList = [
        {hate:"خرید نون", id:"bakery"},
        {hate:"بیدار شدن", id:"waking-up"},
        {hate:"حرف زدن با غریبه ها", id:"talking"},
        {hate:"رفتن به دانشگاه", id:"university"}
    ];

    function isInArray (wanted) {
        if (!wanted)
            alert("boo!")
        formData.hateCheck.map (item => {
            if (item === wanted)
                return true
            return false;
            }
        );
    }

    const createHateList = hateList.map (item => {
        return(
            <div className="hate-option">
                <input type="checkbox" className="checkbox" name="hateCheck"
                id={item.id} value={item.id}
                checked={isInArray(item.id)}
                onChange={handleChange}/>

                <label htmlFor={item.id}>{item.hate}</label>
            </div>
        )
    })
    return (
        <div className="hate-check">
            <p className="hate-question">از چه کارهایی متنفر هستید؟</p>
            {createHateList}
        </div>
    )
}