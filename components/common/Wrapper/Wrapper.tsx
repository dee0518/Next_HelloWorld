import styled from 'styled-components';

interface WrapperProps {
  uiType: 'card' | 'container' | 'circle';
  hasBoxShadow: boolean;
  width: string;
  height: string;
  background: string;
  onClick?: React.MouseEventHandler;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width || 'inherit'};
  height: ${({ height }) => height || 'inherit'};
  background: ${({ background, theme }) => background || theme.white};
  box-shadow: ${({ hasBoxShadow, theme }) => (hasBoxShadow ? theme.shadow : '')};
  ${({ uiType, theme }) => {
    if (uiType === 'card')
      return `
        border: 1px solid ${theme.gray300};
        border-radius: 8px;
      `;
    if (uiType === 'container')
      return `
        border: 1px solid ${theme.gray900};
        border-radius: 16px;
      `;
    if (uiType === 'circle')
      return `
      border: 1px solid ${theme.gray900};
      border-radius: 50%;
      `;

    return '';
  }}
`;

export default Wrapper;
