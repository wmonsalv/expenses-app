import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2022")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

   
    return (
        <div className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChanges={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
           <ExpensesList items={filteredExpenses}/>
        </div>
    );

    }



export default Expenses