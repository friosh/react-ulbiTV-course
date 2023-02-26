import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }

    return <div>
        <div>{ count }</div>
        <button className={classes.button} onClick={handleCount}>Count!</button>
    </div>;
}