import React, {useState} from "react";
import FullName from "./FullName";
import DrinkRadio from "./DrinkRadio";
import HateCheck from "./HateCheck";
import HeightDrop from "./HeightDrop";
import Buttons from "./Buttons";
import Result from "./Result";

export default function UserInfo () {
    const [submited, setSubmited] = useState (false);
    const [formData, setFormData] = useState (
        {
            fName: "",
            lName: "",
            drinkRadio: "",
            hateCheck: [],
            heightDrop: ""
        });

        function handleChange (event) {
            const {name, value, type} = event.target;
            
            setFormData (prev => (
                {   ...prev,
                    [name] : ((type === "checkbox") ? [...prev.hateCheck, value] : value)
                    //putting the varible's name in brakets lets us define it dynamically
                }
                ));// while using useState, we don't put the codes in {} after using =>. instead we use ()
        }

        function submitData (event) {
            setSubmited(prev => !prev);
            event.preventDefault();
        }

        function resetAll (event) {
            setFormData(prev => ({
                ...prev,
                fName: "",
                lName: ""
            }));
        }

    return (
        <form onSubmit={submitData} onReset={resetAll}>
            {submited? <Result formData={formData} closePop={submitData} /> : null}
            <FullName formData={formData} handleChange={handleChange}/>
            <div className="check-radio-etc">
                <DrinkRadio formData={formData} handleChange={handleChange}/>
                <HateCheck formData={formData} handleChange={handleChange} />
                <HeightDrop formData={formData} handleChange={handleChange} />
            </div>
                <Buttons />
        </form>
    )
}