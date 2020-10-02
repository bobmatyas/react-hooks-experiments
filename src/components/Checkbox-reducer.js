import React, { useEffect, useReducer } from "react";

export default function CheckboxReducer() {
    const [checked, toggle] = useReducer(checked => !checked, false);


    useEffect(() => {
        console.log(checked ? "Yes, checked" : "No, not checked");
        localStorage.setItem("checkbox-value", checked);
        console.log(`value in local storage: ${localStorage.getItem("checkbox-value")}`);
    });

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
};