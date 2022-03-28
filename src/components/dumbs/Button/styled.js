import styled, {css} from 'styled-components';

const primaryStyle = css`
  background-color: #0095f6;
  color: #ffff;
`

const secundaryStyle = css`
 background-color: transparent;
 color: #0095f6 ;
`

export const Button = styled.button`
  height: 30px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;  
  padding: 0 9px;
  border-radius: 4px;
  border: none;   
`;