import React from 'react';
import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import DateTIme from '@/components/common/ModalInput/DateTIme';
import DestinationInfo from '@/components/common/ModalComponents/DestinationInfo';
import AddedMember from '@/components/common/ModalComponents/AddedMember';
import SearchMemberInput from '../ModalInput/SearchMemberInput';
import Calendar from '../../../public/assets/common/calendarIcon.png';
import Clock from '../../../public/assets/common/clockIcon.png';
import Search from '../../../public/assets/common/searchIcon.png';
import Profile from '../../../public/assets/common/profile.png';

const ModalEditItinerary = () => {
  const ClickDateHandler = () => {};
  const ClickTimeHandler = () => {};
  const SearchMemberHandler = () => {};
  const calendarIcon = {
    src: Calendar,
    alt: '달력',
    width: 20,
    heigth: 20,
    color: 'gray',
  };
  const clockIcon = {
    src: Clock,
    alt: '시계',
    width: 20,
    heigth: 20,
    color: 'gray',
  };
  const searchIcon = {
    src: Search,
    alt: '검색',
    width: 20,
    heigth: 20,
    color: 'gray',
  };

  const profileinfo = {
    src: Profile,
    user: 'Dan',
    alt: 'user',
    width: 20,
    heigth: 20,
  };

  return (
    <MakeContainer>
      <DestinationInfo />
      <DateContainer>
        <DateTIme icon={calendarIcon} placeholder="출발일" onClick={ClickDateHandler} />
        <DateTIme icon={clockIcon} placeholder="시간" onClick={ClickTimeHandler} />
      </DateContainer>
      <SearchMemberInput
        placeholder="함께 여행할 사람의 닉네임을 검색해주세요."
        icon={searchIcon}
        onClick={SearchMemberHandler}
      />
      {/* <AddedMember profileinfo={profileinfo} /> */}
      <MemoContainer>
        <MemoInput placeholder="메모" />
      </MemoContainer>
    </MakeContainer>
  );
};

export default ModalEditItinerary;

const MakeContainer = styled.div`
  padding: 20px;
  width: 500px;
  margin: 20px 0 80px;
`;

const DateContainer = styled.div`
  ${flexbox('row', 'space-between')}
`;
const MemoContainer = styled.div`
  padding: 10px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
`;
const MemoInput = styled.input`
  height: 45px;
  width: 100%;
  padding: 5px 0 0 10px;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.gray200};
  }
`;
