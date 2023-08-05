import React, { useContext, useState   } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const {currency, setCurrency} = useState('');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const budgetChange = (event) => {
        if(budget > 20000) {
            alert("The value cannot exceed 20000  £");
            dispatch({
                type: 'SET_BUDGET',
                payload: budget,
            });
            return;
        }else if ( budget<totalExpenses){
            alert("The value cannot exceed ower than spending");
            dispatch({
                type: 'SET_BUDGET',
                payload: budget,
            });
            return;
        }
        let sign = (event.target.value-budget);
        dispatch({
            type: sign>0 ? 'INC_BUDGET': 'DEC_BUDGET',
            payload: budget,
        });
    };

    return (
        <div className='form-inline alert alert-secondary'>
            <label for='bud'>Budget: £</label>
            {currency} 
            <input
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10, width: '128px'}}
                onChange={budgetChange}>
            </input>
        </div>
    );
};

export default Budget;
