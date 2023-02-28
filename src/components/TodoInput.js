//import React, { useState, useRef } from "react";

//const TodoInput = () => {
//  const [search, setSearch] = useState("");
//  const inputRef = useRef();

//  const onClickHandler = ({ data, setData }) => {
//    // console.log("123", data);
//    //const data = JSON.parse(localStorage.getItem("todos"));
//    if (inputRef.current.value === "" || !inputRef.current) {
//      alert("please insert todo title");
//    } else {
//      localStorage.setItem(
//        "todos",
//        JSON.stringify([...data, { name: inputRef.current.value }])
//      );
//      setData([...data, { name: inputRef.current.value }]);
//      inputRef.current.value = "";
//    }
//  };
//  return (
//    <>
//      <input
//        ref={inputRef}
//        text=""
//        placeholder="insert keyword"
//        onChange={(e) => setSearch(e.target.value)}
//      />
//      <button onClick={onClickHandler}>create your todo </button>
//    </>
//  );
//};

//export default TodoInput;
