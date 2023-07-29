import styled from 'styled-components';

export const SectionMovie = styled.section`
  margin-bottom: 8px;
  padding: 0 42px 0 20px;
  border-bottom: 4px dotted #5196f5;
  text-align: justify;
`;
export const Conteiner = styled.div`
display: flex;
margin: 8px;
padding: 0 20px;  
`;
export const ConteinerDetails = styled.div`

  margin: 0 16px;
  padding: 0 36px 0 20px;  
`;
export const AddInform = styled.li`
font-size: 24px; 
`;
export const Button = styled.button`
margin: 24px 0 16px 48px;;
font-size: 20px; 
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