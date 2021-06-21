import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const [showAddNewExpenseForm, setShowExpenseForm]= useState(false)
    const showExpenseFormHandler = () => {
        setShowExpenseForm((prevShowExpenseForm) => !prevShowExpenseForm)
    }
    return (
        <div className="new-expense">
            {showAddNewExpenseForm ?  <button type="button" onClick={showExpenseFormHandler}>Add new expense</button> :  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showAddNewExpenseForm={showExpenseFormHandler}/>}


        </div>
    )
}

export default NewExpense;
