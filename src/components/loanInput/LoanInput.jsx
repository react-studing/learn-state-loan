import "./loanInput.css";
export default function LoanInput({ title, value, handleInputChange }) {
  return (
    <>
      <label>{title} :</label>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          handleInputChange(event);
        }}
      />
    </>
  );
}
