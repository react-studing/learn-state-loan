import "./loanPopup.css";
export default function LoanPopup({
  msg,
  colorOfMsg,
  display,
  handleRemovePopup,
}) {
  return (
    <div
      className="loan-popup"
      style={{ display: display }}
      onClick={handleRemovePopup}
    >
      <div className="for-display">
        <h1 style={{ color: colorOfMsg }} className="loan-popup-h1">
          {msg}
        </h1>
      </div>
    </div>
  );
}
