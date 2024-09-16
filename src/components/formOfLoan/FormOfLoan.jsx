import { useState } from "react";
import "./formOfLoan.css";
import LoanPopup from "../loanPopup/LoanPopup";
export default function FormOfLoan() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    Age: "",
    isEmployee: false,
    isfull: false,
  });
  const [msgOfPopup, setMsgOfPopup] = useState({
    msg: "",
    colorOfMsg: "",
    display: "none",
  });
  return (
    <>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="name-input">
          <label htmlFor="1">Name :</label>
          <input
            type="text"
            id="1"
            value={formInputs.name}
            onChange={(event) => {
              setFormInputs({ ...formInputs, name: event.target.value });
            }}
          />
        </div>
        <br />
        <div className="phone-number-input">
          <label htmlFor="2">Phone Number :</label>
          <input
            type="text"
            id="2"
            value={formInputs.phoneNumber}
            onChange={(event) => {
              setFormInputs({ ...formInputs, phoneNumber: event.target.value });
            }}
          />
        </div>
        <br />
        <div className="age-input">
          <label htmlFor="3">Age :</label>
          <input
            type="text"
            id="3"
            value={formInputs.Age}
            onChange={(event) => {
              setFormInputs({ ...formInputs, Age: event.target.value });
            }}
          />
        </div>
        <br />
        <br />
        <div className="isEmployee">
          <label>Are you an employee?</label>
          <input
            type="checkbox"
            checked={formInputs.isEmployee}
            onChange={(event) => {
              setFormInputs({
                ...formInputs,
                isEmployee: event.target.checked,
              });
            }}
          />
        </div>
        <br />
        <div className="salary-input">
          <label>Salary</label>
          <select
            name=""
            id=""
            value={formInputs.salary}
            onChange={(event) => {
              setFormInputs({ ...formInputs, salary: event.target.value });
            }}
          >
            <option value="less than 500$" key="1">
              less than 500$
            </option>
            <option value="between 500$ and 2000$" key="2">
              between 500$ and 2000$
            </option>
            <option value="bove 2000$" key="3">
              above 2000$
            </option>
          </select>
        </div>
        <br />
        <div className="submit-input">
          <input
            type="submit"
            className="submit-button"
            value="Submit"
            disabled={
              formInputs.name !== "" &&
              formInputs.phoneNumber !== "" &&
              formInputs.Age !== ""
                ? false
                : true
            }
            style={
              formInputs.name !== "" &&
              formInputs.phoneNumber !== "" &&
              formInputs.Age !== ""
                ? { backgroundColor: "#CF0074" }
                : { backgroundColor: "#737577" }
            }
            onClick={() => {
              if (
                formInputs.phoneNumber.length <= 11 ||
                formInputs.phoneNumber.length > 13
              ) {
                setMsgOfPopup({
                  msg: "Phone Number Format is Incorrect",
                  colorOfMsg: "red",
                  display: "flex",
                });
              } else if (
                isNaN(parseInt(formInputs.Age)) ||
                formInputs.Age < 18 ||
                formInputs.Age >= 100
              ) {
                setMsgOfPopup({
                  msg: "Age is not allowed",
                  colorOfMsg: "red ",
                  display: "flex",
                });
              } else {
                setMsgOfPopup({
                  msg: "The Form Has Been Submitted Successfully",
                  colorOfMsg: "green",
                  display: "flex",
                });
              }
            }}
          />
        </div>
        <br />
      </form>
      <LoanPopup
        msg={msgOfPopup.msg}
        colorOfMsg={msgOfPopup.colorOfMsg}
        display={msgOfPopup.display}
        setMsgOfPopup={setMsgOfPopup}
      />
    </>
  );
}
