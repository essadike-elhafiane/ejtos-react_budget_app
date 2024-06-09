import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "../index.css";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><CiCirclePlus onClick={event=> increaseAllocation(props.name)} className='Increase'/></td>
        <td><CiCircleMinus onClick={event=> decreaseAllocation(props.name)} className='Decrease'/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense} style={{
            width: '30px',
            height: '30px',
        }}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;

