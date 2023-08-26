import { styled } from 'styled-components';

export const StyledItemBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: #00000099;
`;
export const StyledModalImg = styled.img`
  max-width: 100%;
  height: 400px;
`;

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-left: 96%;
  margin-bottom: 5px;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: #3f51b590;
  border: none;
  color: #ffffff;
  font-size: 19px;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3f51b5;

    color: #fff;
  }
`;
export const StyledImageTag = styled.p`
  text-align: center;
  width: 100%;
  height: 100%;

  font-size: 18px;
  font-weight: 600;
`;
