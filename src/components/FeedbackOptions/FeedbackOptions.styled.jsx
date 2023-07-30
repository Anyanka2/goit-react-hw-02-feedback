import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FeedbackButton = styled.button`
  width: 90px;
  color: #e88606;
  background-color: #fff;
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  border: none;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #e88606;
    cursor: pointer;
  }
`;
