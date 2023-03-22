import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Assignment2 = () => {

    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [result, setResult] = useState(0);

    const blankPage = () => {
        setNumber1('')
        setNumber2('')
        setResult('')
    }
    /**
     * Operation on two Number
     */
    const addition = () => {
        setResult(number1 + number2);
    }

    const substract = () => {
        setResult(number1 - number2);
    }

    const multiply = () => {
        setResult(number1 * number2);
    }

    const division = () => {
        setResult(number1 / number2);
    }

    useEffect(() => {

    }, [number1, number2]);


    /**Navigation */
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/');
    };
    const assignmnet = () => {
        navigate('/assignment2');
    };
    return (
        <div className='wrapper'>
            <br></br>
            <div style={{ textAlign: 'center' }}>
                <button className='btn btn-warning btn-md' onClick={changePage}>
                    Assignmnet 1
                </button>
                &nbsp;
                <button className='btn btn-warning btn-md' onClick={assignmnet}>
                    Assignmnet 2
                </button>

            </div>
            <div className='main'>

                <div className='form-container'>
                    <form autoComplete="off" className='form-group'
                    >
                        <div style={{ textAlign: 'end' }} >
                            <button type="button" className='btn-danger' onClick={blankPage}>Reset</button>
                        </div>
                        <label>Input 1</label>
                        <input type="number" className='form-control' required
                            value={number1} onChange={(e) => setNumber1(+e.target.value)}></input>
                        <br></br>
                        <label>Input 2</label>
                        <input type="number" className='form-control' required
                            value={number2} onChange={(e) => setNumber2(+e.target.value)}></input>
                        <br></br>

                        <p>Result: {result}</p>
                        <br></br>
                        <div style={{ textAlign: 'center' }}>
                            <button type="button" className='btn btn-success' onClick={addition}>
                                ADD
                            </button>&nbsp;
                            <button type="button" className='btn btn-success' onClick={substract}>
                                Substract
                            </button>&nbsp;
                            <button type="button" className='btn btn-success' onClick={multiply}>
                                Multiply
                            </button>&nbsp;
                            <button type="button" className='btn btn-success' onClick={division}>
                                Division
                            </button>
                        </div>
                        <br></br>
                        {/* <label>Output</label>
                        <input
                            className='form-control'
                            required placeholder='Output of Two Inputs'
                            value={result}
                        ></input> */}
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Assignment2
