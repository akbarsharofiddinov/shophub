import React, { useState } from "react";

interface IProps {
  type: string;
  placeholder: string;
}

function isValidEmail(email: string): boolean {
  const regax = /^.+@.+.$/;

  return regax.test(email);
}

const MyInput: React.FC<IProps> = ({ placeholder, type }: IProps) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target;
    const { value } = element;

    setInputVal(value);
    const isValid = isValidEmail(inputVal);
    console.log(isValid);
    if (isValid) {
      element.classList.add("okay");
      element.classList.remove("error");
    } else {
      element.classList.add("error");
      element.classList.remove("okay");
    }
  };

  return (
    <>
      <input
        className="myInput"
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={inputVal}
      />
    </>
  );
};

export default MyInput;
