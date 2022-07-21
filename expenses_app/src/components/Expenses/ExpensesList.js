import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 ClassName="expenses-list__fallback">Found no Expenses.</h2>
  }

  return <ul ClassName="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpenseList;
