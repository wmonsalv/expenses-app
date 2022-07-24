import "./ExpenseForm.css"
import React, { useState } from "react"


function ExpenseForm(props) {

    const [showForm, setShowForm] = useState(false)

    const cancelClick = (event) => {
        event.preventDefault()
        setShowForm(false)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    const [enteredTitle, setEnteredTitle] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState("");

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        console.log(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState("");

    const setEnteredDateHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
        setShowForm(false)
    }



    return (
        <React.Fragment>
            {showForm ? 
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={setEnteredDateHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={cancelClick}>Cancel</button>
                </div>
            </form>: <button onClick={() => setShowForm(true)}>Add New Expense</button>}
        </React.Fragment>
    )

}


export default ExpenseForm