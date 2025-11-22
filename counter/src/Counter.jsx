import { useState } from "react";

function Counter(props) {


    const start = props.start;

    const [count, setCount] = useState(start);

    function handleClick() {
        
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Zvysit o jedna</button>
        </div>
    )


}

export default Counter;