import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import {useState} from "react"

function Expenses(props) {

    const[filteredYear, setFielteredYear] = useState("2022")

    const filterChangeHandler = (selectedYear) => {
        setFielteredYear(selectedYear)
    }

    return (
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChanges={filterChangeHandler}
        />
        {props.items.map((expense) => (
            <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))}
      </div>
    );


}


export default Expenses