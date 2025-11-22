import { useState } from "react";

// function HelloWorld(props) {
function HelloWorld({ text, name }) {

    //const text = props.text;
    //const name = props.name;

    //const {text, name} = props;

    console.log("Text: " + text + ", Name: " + name);

    const [meno, setMeno] = useState("Používatel");

    function handleMenoChange(event) {
        setMeno(event.target.value);
    }

    return (
        <div>
            <h1>{text} světe! {meno}</h1>
            <input type="text" value={meno} onChange={handleMenoChange} />
        </div>
    )

    //return <h1>{text} světe! {name}</h1>
}

export default HelloWorld;