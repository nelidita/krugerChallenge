import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  border: solid 3px #FF8E00;
  border-radius: 10px;
  padding: 30px 0;
`;

export const Input = styled.input`
	background: none;
  border: none;
	border-bottom: solid 2px #25e320;
	color: #474544;
	font-size: 16px;
  letter-spacing: 1px;
  padding-bottom: 3px;
  margin: 10px 0;
	width: 100%;
  opacity: 0.6;
  :focus{
    outline: none;
  }
  :invalid {
    border-color: #DD2C00;
}
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Button= styled.button` {
  background: none;
  border: solid 2px #25e320;
  color: #25e320;
  cursor: pointer;
  display: inline-block;
  font-size:  15px;
  font-weight: bold;
  outline: none;
  padding: 10px 35px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
  :hover {
    background: #25e320;
    color: #F2F3EB;
  }
`;
