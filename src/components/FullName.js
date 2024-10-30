import React from "react";

export default function FullName(props){
    return (
        <div className="full-name">
            <input className="name-input" placeholder="نام" name="fName"
            type="text" value={props.formData.fName}
            onChange={props.handleChange}/>

            <input className="name-input" placeholder="نام خانوادگی" name="lName"
            type="text" value={props.formData.lName}
            onChange={props.handleChange}/>
        </div>
    )
}