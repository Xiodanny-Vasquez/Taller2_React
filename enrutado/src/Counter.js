import { useState } from "react";
import styles from "./Counter.module.css";
 
function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div className={styles.counter}>
      <h1>Counter: {count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
 
export default Counter;