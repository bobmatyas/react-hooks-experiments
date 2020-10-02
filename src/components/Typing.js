import React, { useState, useEffect } from "react";

export default function Typing() {
    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("example phrase");

    const createPhrase = () => {
        setPhrase(val);
        set("");
    }

    useEffect(() => {
        console.log(`typing "${val}"`);
    }, [val]);

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
    }, [phrase]);

    useEffect(() => {
        console.log(`either val or phrase has changed`);
    }, [val, phrase]);

    return (
        <>
            <h2>Dependency Array Example</h2>
            <label>Favorite Phrase:</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )
}

