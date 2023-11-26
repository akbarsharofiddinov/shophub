import { useMyAppContext } from "@/hooks/useMyAppContext";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Modal: React.FC<IProps> = ({ children }: IProps) => {
  const { modal, setModal } = useMyAppContext()!;

  return (
    <>
      <div
        className={modal ? "modal active" : "modal"}
        onClick={() => setModal(false)}
      >
        <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
