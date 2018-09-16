import styled from 'styled-components';

export const StyledSwitchButton = styled.div`
  width: 68px;
  border-radius: 20px;
  padding: 5px;
  display: flex;
  transition: all 0.3s ease;
  .switch-button__circle {
    height: 30px;
    width: 30px;
    font-size: 0.5em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  ${props => {
    if (props.checked === true) {
      return `
        background: #ff4f6e;
        justify-content: flex-end;
        .switch-button__circle {
          background: white;
          &:before {
            content: 'ON';
            color: #ff4f6e;
          }
        }
      `;
    }
    return `
      background: #594a4d;
      justify-content: flex-start;
      .switch-button__circle {
        background: #ff4f6e;
        &:before {
          content: 'OFF';
          color: white;
        }
      }
    `;
  }};
`;
