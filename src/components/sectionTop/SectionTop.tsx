import React from "react";
import { MyButton } from "..";

interface IAdditionalButton {
  title: string;
  exist: boolean;
}

interface IProps {
  title: string;
  desc?: string;
  psElement?: boolean;
  additionalButton?: IAdditionalButton;
}

const SectionTop: React.FC<IProps> = (props: IProps) => {
  const { title, additionalButton, desc, psElement } = props;
  return (
    <div
      className={psElement ? "section-top_box pseudo" : "section-top_box"}
    >
      <span>{desc}</span>
      <h1>{title}</h1>
      {
        additionalButton?.exist ? (
          <MyButton title={additionalButton.title} />
        ) : ""
      }
    </div>
  );
};

export default SectionTop;
