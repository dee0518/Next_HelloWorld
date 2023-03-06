import styled from 'styled-components';

type TProps = {
  startDate: string;
  endDate: string;
};

type TStatus = {
  [key: string]: string;
};

const statusType: TStatus = {
  planning: '계획중',
  traveling: '여행중',
  end: '종료',
};

const Status = ({ startDate, endDate }: TProps) => {
  const setType = () => {
    const today = new Date();
    let type = '';

    if (today < new Date(startDate)) type = 'planning';
    else if (today <= new Date(endDate)) type = 'traveling';
    else type = 'end';

    return type;
  };

  const type = setType();

  return <Type className={type}>{statusType[type]}</Type>;
};

export default Status;

const Type = styled.div`
  display: inline-block;
  padding: 6px 15px;
  border-radius: 30px;
  font-size: 16px;

  &.planning {
    color: ${({ theme }) => theme.orange};
    background: ${({ theme }) => theme.pastelYellow};
  }

  &.traveling {
    color: ${({ theme }) => theme.blue};
    background: ${({ theme }) => theme.skyblue};
  }

  &.end {
    color: ${({ theme }) => theme.gray800};
    background: ${({ theme }) => theme.gray100};
  }
`;
