import React from "react";

export default function HeightDrop ({formData, handleChange}) {
    const heightList = ["12m", "23m", "50m", "100m", "200m"];

    const createOptions = heightList.map (item => {
        return (
            <option value={item}>
                {item}
            </option>
        )
    });

    return (
        <div className="height-drop">
            <p className="height-question">ترجیح میدهید از چه ارتفاعی بیافتید؟</p>
            <select className="height-select" value={formData.name}
            name="heightDrop" id="heightDrop" onChange={handleChange}>
                <option>ارتفاع ها</option>
                {createOptions}
            </select>
        </div>
    )
}