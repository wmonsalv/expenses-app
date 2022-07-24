import {useState} from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: Math.random(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: Math.random(),
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: Math.random(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const[expenses,setExpenses] = useState([])

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div className="App">
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
