import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    // setName(name);
    console.log(name);
    setName("");
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
          className="px-5 py-4 "
        />{" "}
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

export default Form;
