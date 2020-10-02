import React, { useEffect, useState } from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);

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
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
};