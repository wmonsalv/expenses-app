import "./ExpenseItems.css"

function ExpenseItem(){
    return (
       <div className = "expense-item">
           <div className= "date">July 7th, 2022</div>
           <div className = "expense-item__description">
               <h2>car insurance</h2>
               <div className = "expense-item__price">$294.67</div>
           </div>
       </div>
    );
}

export default ExpenseItem