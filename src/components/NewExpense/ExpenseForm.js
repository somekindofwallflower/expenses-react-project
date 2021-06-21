import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: userInput.enteredDate
        }
        props.onSaveExpenseData(expenseData)
    }


    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')
    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })
        // setEnteredTitle(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: new Date(event.target.value)
            }
        })
        // setEnteredDate(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
        // setEnteredAmount(event.target.value)
    }
    const cancelNewExpenseHandler = () => {
        props.showAddNewExpenseForm()
    }
 return (
         <form onSubmit={submitHandler}>
             <div className="new-expense__controls">
                 <div className="new-expense__control">
                     <label>Title</label>
                     <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                     <label>Amount</label>
                     <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                     <label>Date</label>
                     <input type="date" min="2021-6-20" max="2024-06-20" value={userInput.date} onChange={dateChangeHandler}/>
                 </div>
             </div>
             <div className="new-expense__actions">
                 <button type="button" onClick={cancelNewExpenseHandler}>Cancel</button>
                 <button type="submit">Add expense</button>
             </div>
         </form>

 )
}

export default ExpenseForm;
