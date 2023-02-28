import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import { useState } from 'react';
import DateItem from './DateItem';

type TProps = {
  startDate: Date;
  endDate: Date;
};

const DateList = ({ startDate, endDate }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(startDate);
  const diffDay = Math.floor((+endDate - +startDate) / (1000 * 60 * 60 * 24));
  const dateArr = [];

  for (let i = 0; i <= diffDay; i += 1) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    dateArr.push(date);
  }

  return (
    <Wrapper>
      {dateArr.map((date, idx) =>
        idx < 7 ? (
          <DateItem
            key={date.toString()}
            date={date}
            totalDay={diffDay}
            idx={idx}
            isSelected={date.getTime() === selectedDate.getTime()}
            setSelectedDate={setSelectedDate}
          />
        ) : null
      )}
    </Wrapper>
  );
};

export default DateList;

const Wrapper = styled.ul`
  ${flexbox('row', 'center', 'center')};
  padding: 10px 12px;
  gap: 4px;

  & li {
    ${flexbox('column', 'center', 'center')};
    /* border: 1px solid #ccc; */
    padding: 8px;
    border-radius: 8px;
  }
`;
