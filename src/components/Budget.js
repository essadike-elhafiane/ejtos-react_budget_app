
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value); // Parse the value to integer
        setNewBudget(updatedBudget);

        // Dispatch the action to change the budget
       if (expenses.length > 0) {
            let totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            if (updatedBudget < totalExpenses) {
                setNewBudget(budget)
                alert("You cannot reduce the budget value lower than the spending");
                return;
            }
        }
        dispatch({
            type: 'SET_BUDGET', // Use the SET_BUDGET action type
            payload: updatedBudget // Pass the updated budget as payload
        });
    }

   

    return (
        <div className='alert alert-secondary'>
        <span>Budget: £</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;