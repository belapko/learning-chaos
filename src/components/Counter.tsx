import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={increment}>Inc 1</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Dec 1</button>
        </div>
    );
};
