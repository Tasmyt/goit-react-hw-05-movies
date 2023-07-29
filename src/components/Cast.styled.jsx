import styled from 'styled-components';

export const CastStyles = styled.li`
display: grid;
grid-template-columns: repeat(5, 1fr);  
margin-bottom: 16px;

`;

export const CastItem = styled.li` 
margin-left: auto;
margin-right: auto;
padding-bottom: 32px;
text-align: center;
list-style-type: none; 
word-wrap: break-word;
font-weight: 500;
line-height: 0.5;
`;

export const NoPhoto = styled.img`
width: 200px;
height: 300px;
object-fit: contain; 
`;