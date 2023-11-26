import React from "react";

interface IProps {
  title: string;
}

const MyButton: React.FC<IProps> = ({ title }: IProps) => {
  return (
    <>
      <button className="myButton">{title}</button>
    </>
  );
};

export default MyButton;
