import { flexbox } from '@/styles/mixin';
import styled from 'styled-components';
import { MouseEventHandler } from 'react';
import CancelButton from './CancelButton';

type TProps = {
  title: string;
  subTitle?: string;
  onClick: MouseEventHandler;
  uiType?: 'dark' | 'light';
};

const ModalHeader = ({ title, subTitle, onClick, uiType }: TProps) => {
  return (
    <Wrapper uiType={uiType}>
      <TitleWrapper>
        <h3>{title}</h3>
        <span>{subTitle}</span>
      </TitleWrapper>
      <CancelButton uiType={uiType} onClick={onClick} />
    </Wrapper>
  );
};

export default ModalHeader;

const Wrapper = styled.div<Pick<TProps, 'uiType'>>`
  ${flexbox('row', 'space-between', 'center')};
  width: 100%;
  background: ${({ uiType }) => (uiType === 'dark' ? '#3a3f57' : '#fff')};
  color: ${({ uiType }) => (uiType === 'dark' ? '#fff' : '#000')};
  padding: 24px;
  border-radius: 12px 12px 0 0;
`;

const TitleWrapper = styled.div`
  width: 80%;

  & h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & span {
    font-size: 14px;
    color: #eeeeee;
  }
`;
