import React, { useState, useRef, useEffect } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const inputRef = useRef();

  //  useEffect(() => {
  //    setData(JSON.parse(localStorage.getItem("todos")));
  //  }, []);

  const onClickHandler = () => {
    if (inputRef.current.value === "" || !inputRef.current) {
      alert("please insert todo title");
    } else {
      localStorage.setItem(
        "todos",
        JSON.stringify([...data, { name: inputRef.current.value }])
      );
      setData([...data, { name: inputRef.current.value }]);
      inputRef.current.value = "";
    }
  };

  const onDeleteHandler = () => {};

  return (
    <>
      <div>
        <h3>Insert your todo </h3>
        <input
          ref={inputRef}
          text=""
          placeholder="insert keyword"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={onClickHandler}>create your todo </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {data &&
          data.map((item, k) => (
            <>
              <div key={k}>
                {item.name} <input type="checkbox" name="xxx" value="yyy" />
                <button type="text" onClick={onDeleteHandler}>
                  delete
                </button>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Home;
