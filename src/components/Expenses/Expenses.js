import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, {useState} from 'react'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    const expenseFilterHandler = (selectedFilter) => {
        setFilteredYear(selectedFilter)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onExpenseFilterSelect={expenseFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>

    )
}

export default Expenses
