import React, { useContext, useState  } from 'react';
//import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,remaining } = useContext(AppContext);
    const [cost, setCost] = useState('');

//    const handleDeleteExpense = () => {
//        dispatch({
//            type: 'DELETE_EXPENSE',
//            payload: props.id,
//        });
//    };

    const increaseAllocation = (name) => {
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            setCost("");
            return;
        }
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
        <td>£{props.cost}</td>
        <td><button class="btn inc" onClick={event=> increaseAllocation(props.name)}></button></td>
        <td><button class="btn dec" onClick={event=> decreaseAllocation(props.name)}></button></td>
        </tr>
    );
};

export default ExpenseItem;

