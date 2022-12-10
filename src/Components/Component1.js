import React, { useEffect, useState } from "react";
import Component2 from "./Component2";
const Component1 = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [userDataArr, setUserDataArr] = useState([]);
  let arr = JSON.parse(localStorage.getItem("userDataArr"));
  if (!arr) {
    localStorage.setItem("userDataArr", JSON.stringify([]));
  }
  useEffect(() => {
    if (
      enteredName.trim() === "" &&
      enteredEmail.trim() === "" &&
      enteredDesc.trim() === ""
    ) {
      return;
    } else {
      const userData = {
        id: (Math.random() * 10).toFixed(4),
        name: enteredName,
        email: enteredEmail,
        desc: enteredDesc,
      };
      setUserDataArr([userData, ...arr]);
    }
  }, [enteredName, enteredEmail, enteredDesc]);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredName(event.target[0].value);
    setEnteredEmail(event.target[1].value);
    setEnteredDesc(event.target[2].value);
  };
  const deleteHandler = (employeId) => {
    if (arr.length > 1) {
      const updatedArr = arr.filter((employe) => employe.id !== employeId);
      setUserDataArr(updatedArr);
    } else {
      localStorage.setItem("userDataArr", JSON.stringify([]));
      setUserDataArr([]);
    }
  };
  if (!(userDataArr.length === 0)) {
    localStorage.setItem("userDataArr", JSON.stringify(userDataArr));
  }
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label style={{ color: "white" }}>Your Name</label>
        <input type="text" />
        <label style={{ color: "white" }}>Your emeil</label>
        <input type="email" />
        <label style={{ color: "white" }}>description</label>
        <input maxLength="74" />
        <button>Submit</button>
        <Component2 data={arr} onDelete={deleteHandler} />
      </form>
    </>
  );
};

export default Component1;
