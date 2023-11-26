import { useState } from "react";
import { useAddUserMutation } from "@/RTKQueries/bookRTKQ";

import { toast } from "react-toastify";

const USERNAME_REGEX = /^[a-zA-Z0-9]{4,20}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,24}/;

const MyForm = () => {
  const [user, setUser] = useState("");
  const [userValidate, setUserValidate] = useState(true);

  const [password, setPassword] = useState("");
  const [pwdValidate, setPwdValidate] = useState(true);

  const onChangeInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    if (element.name === "user") {
      setUser(element.value);
      setUserValidate(USERNAME_REGEX.test(element.value));
    } else if (element.name === "password") {
      setPassword(element.value);
      setPwdValidate(PWD_REGEX.test(element.value));
    }
  };

  const [addUser, status] = useAddUserMutation();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (user.length > 0 && password.length > 0) {
      if (userValidate && pwdValidate) {
        addUser({ user, password });
      }
      if (status.isSuccess) {
        toast.success("User added Successfully");
      } else {
        toast.error("Can not add the User");
      }
    } else {
      alert("Fill the blanks");
    }
  };

  return (
    <>
      <form className="form">
        <h1 className="title">Registration</h1>
        <div className="form-inner">
          <div className={userValidate ? "user-name_box" : "error"}>
            <input
              type="text"
              name="user"
              value={user}
              onChange={(e) => onChangeInputValues(e)}
              onClick={() => setUserValidate(USERNAME_REGEX.test(user))}
            />
            <p className={user.length > 0 ? "focus" : ""}>Username:</p>
          </div>
          <div className={pwdValidate ? "password_box" : "error"}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChangeInputValues(e)}
              onClick={() => setPwdValidate(PWD_REGEX.test(password))}
            />
            <p className={password.length > 0 ? "focus" : ""}>Password:</p>
          </div>
          <button className="submitBtn" onClick={(e) => handleSubmit(e)}>
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default MyForm;
