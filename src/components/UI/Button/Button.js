// import styled from 'styled-components';

import styles from './Button.module.css'

//? styled.button`` => this is called a tagged template literal
// const Button = styled.button`
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #4422dc;
//     border-radius: 5px;
//     color: white;
//     background: #4422dc;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #26199c;
//     border-color: #26199c;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

// `;  



const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
