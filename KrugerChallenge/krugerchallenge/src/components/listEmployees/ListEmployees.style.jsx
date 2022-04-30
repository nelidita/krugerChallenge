import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: solid 3px #FF8E00;
  border-radius: 10px;
  padding: 30px 0;
  font-size: 12px;
`;

export const Table = styled.table`
  text-align: center;
`;

export const Tr = styled.tr`
  td:last-child {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin: 8px;
  cursor: pointer;
`;