import "./loanPopup.css";
export default function LoanPopup({ msg, colorOfMsg, display, setMsgOfPopup }) {
  return (
    <div
      className="loan-popup"
      style={{ display: display }}
      onClick={() => {
        setMsgOfPopup({ msg: msg, colorOfMsg: colorOfMsg, display: "none" });
      }}
    >
      <div className="for-display">
        <h1 style={{ color: colorOfMsg }} className="loan-popup-h1">
          {msg}
        </h1>
      </div>
    </div>
  );
}
