import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const selectedFilterHandler = (event) => {
        props.onExpenseFilterSelect(event.target.value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control ">
                <label>Filter by year:</label>

                <select name="years" id="years" value={props.selected}  onChange={selectedFilterHandler}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter
