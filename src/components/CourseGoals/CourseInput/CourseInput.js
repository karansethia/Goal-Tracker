import React, { useState } from 'react';
import styles from './CourseInput.module.css'

// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

//? Styled Components
// const FormControl = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     color: ${props => props.invalid ? 'red' : 'rgb(126, 126, 126)'};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : 'rgb(126, 126, 126)'};
//     background-color: ${props => props.invalid ? 'rgb(255, 199, 199)' : 'white'};
//     border-radius: 5px;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #d7d6d6;
//     border-color: #4e4e4ec1;
//   }
// `;

// React Methods
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* One way of adding dynamic classes => <FormControl className={!isValid && 'invalid'}> */}
      <div className={`${styles['form-control']} ${!isValid ? styles.invalid : ''}`}>
        <label >Today's Goal</label>
        <input type="text" style={{borderColor: !isValid ? 'red' : 'grey'}} onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
