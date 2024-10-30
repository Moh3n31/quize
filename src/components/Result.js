import React from "react";

export default function Result ({formData, closePop}) {
    return (
        <div className="pop-up">
            <button className="close" onClick={closePop}>برو گمشو</button>
            <div className="pop-text">
                <p>
                    {`اسم شما ${formData.fName} ${formData.lName} است.`}
                </p>
                <p>
                    {`شما عاشق نوشیدن ${formData.drinkRadio} هستید.`}
                </p>
                <p>
                    {`از همان کودکی از ${formData.hateCheck} منتفر بودید.`}
                </p>
                <p>
                    {`به امید خدا در آینده از ارتفاع ${formData.heightDrop} سقوط خواهید کرد.`}
                </p>
            </div>
        </div>
    )
}