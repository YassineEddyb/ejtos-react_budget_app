import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [cost, setCost] = useState(200);

    alert("you connot reduce the budget lower than the spending");

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={cost}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setCost(event.target.value)}
                />
            </span>
        </div>
    );
};
export default Budget;