import styled from 'styled-components';

export const Form = styled.form`
display: flex;
margin: 16px 24px;
padding: 0 20px;   
`;

export const Input = styled.input`
/* display: inline-block; */
box-sizing: border-box;
font-size: 24px;
outline: 0;
border: 2px ridge #30a5e1; 

&:focus {
    border: 2px ridge #e69c24 !important;    
}
`;

export const Search = styled.button`
margin: 0 0 0 8px;
font-size: 16px; 
font-weight: bold;
  color: #ffffff !important;
  padding: 15px 25px;
  box-shadow: 2px 2px 2px #4f4f4f;
  border-radius: 5px;
  border: 2px ridge #30a5e1;  
  background: linear-gradient(to top, #0b4767, #30a5e1);

  &:hover {
  color: #e69c24 !important; 
  border: 2px ridge #f3c846; 
  /* background: white; */
  background: linear-gradient(to top, #e4d8b4, white);
  }
`;