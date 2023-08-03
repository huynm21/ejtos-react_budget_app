import React, { useContext, useState  } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const expense = {
        name: name,
        cost: 10,
    };
    return (
        <div className='form-inline alert alert-secondary'>
            <label for='bud'>Budget: £</label>
            <input
                type='number'
                id='cost'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setCost(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;