import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type TProps = {
  date: Date;
  totalDay: number;
  idx: number;
  isSelected: boolean;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
};

const DateItem = ({ date, totalDay, idx, isSelected, setSelectedDate }: TProps) => {
  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dDate = date.getDate();
  const dDay = DAYS[date.getDay()];

  return (
    <>
      {idx === 0 && totalDay > 6 && (
        <ArrowItem>
          <p>&lt;</p>
        </ArrowItem>
      )}
      <Wrapper
        isSelected={isSelected}
        onClick={() => {
          setSelectedDate(date);
        }}
      >
        <Day isSelected={isSelected}>{dDay}</Day>
        <Date>{dDate}</Date>
      </Wrapper>
      {idx === 6 && totalDay > 6 && (
        <ArrowItem>
          <p>&gt;</p>
        </ArrowItem>
      )}
    </>
  );
};

export default DateItem;

const Wrapper = styled.li<Pick<TProps, 'isSelected'>>`
  flex-grow: 1;
  background: ${({ isSelected }) => (isSelected ? '#3A3F57' : 'inherit')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : 'inherit')};
`;

const Day = styled.p<Pick<TProps, 'isSelected'>>`
  font-size: 12px;
  margin-bottom: 2px;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#878787')};
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const ArrowItem = styled.li`
  font-weight: bold;
`;
