import React, { useState, useEffect } from 'react'
import { View } from './components/View';
import { useNavigate } from 'react-router-dom';

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const Employee = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [id, setID] = useState('');

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      fname,
      lname,
      id
    }
    setbooks([...books, book]);
    setFname('');
    setLname('');
    setID('');
  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

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
      <div style={{textAlign:'center'}}>
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
            onSubmit={handleAddBookSubmit}>
            <label>First Name</label>
            <input type="text" className='form-control' required
              onChange={(e) => setFname(e.target.value)} value={fname}></input>
            <br></br>
            <label>Last Name</label>
            <input type="text" className='form-control' required
              onChange={(e) => setLname(e.target.value)} value={lname}></input>
            <br></br>
           
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>

                  </tr>
                </thead>
                <tbody>
                  <View books={books}/>
                </tbody>
              </table>
            </div>
           
          </>}
          {books.length < 1 && <div>No data are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default Employee
