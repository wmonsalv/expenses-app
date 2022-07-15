import "./ExpenseForm.css"
import {useState} from "react"


function ExpenseForm() {

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

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseDate) //test 

        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")

    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange ={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange ={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange ={setEnteredDateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}


export default ExpenseForm