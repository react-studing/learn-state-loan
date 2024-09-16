import FormOfLoan from "../formOfLoan/FormOfLoan";
import LoanHeader from "../LoanHeader/LoanHeader";
import "./loan.css";
export default function Loan() {
  return (
    <div className="loan">
      <LoanHeader />
      <hr />
      <FormOfLoan />
    </div>
  );
}
