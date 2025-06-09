import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const handleClick = () => {
    alert("Hello World");
  };

  const updateCount = () => {
    setCount(count + 1);
  };

  const decreasecount = () => {
    setCount(count - 1);
  };

  const handleAddition = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setSum(n1 + n2);
    } else {
      setSum("Invalid input");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
        />
      </p>
      <p>
        <button>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
      <hr />
      <button onClick={handleClick}>Click</button>
      <hr />
      <p>
        <button onClick={decreasecount}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={updateCount}>+</button>
      </p>
      <hr />
      <h3>Add Two Numbers</h3>
      <p>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First Number"
        />
      </p>
      <p>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second Number"
        />
      </p>
      <p>
        <button onClick={handleAddition}>Add</button>
      </p>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}
