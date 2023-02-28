import React from 'react';
import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import DateTIme from '@/components/common/ModalInput/DateTIme';
import TitleInput from '@/components/common/ModalInput/TitleInput';
import SearchMemberInput from '../ModalInput/SearchMemberInput';
import Calendar from '../../../public/assets/common/calendarIcon.png';
import Search from '../../../public/assets/common/searchIcon.png';

const ModalMakeItinerary = () => {
  const ClickDateHandler = () => {};
  const SearchMemberHandler = () => {};
  const calendarIcon = {
    src: Calendar,
    alt: '달력',
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

  return (
    <MakeContainer>
      <TitleInput placeholder="이번 여행의 제목을 입력해주세요." />
      <DateContainer>
        <DateTIme icon={calendarIcon} placeholder="출발일" onClick={ClickDateHandler} />
        <DateTIme icon={calendarIcon} placeholder="도착일" onClick={ClickDateHandler} />
      </DateContainer>
      <SearchMemberInput
        placeholder="함께 여행할 사람의 닉네임을 검색해주세요."
        icon={searchIcon}
        onClick={SearchMemberHandler}
      />
    </MakeContainer>
  );
};

export default ModalMakeItinerary;

const MakeContainer = styled.div`
  padding: 30px;
  width: 500px;
  height: 215px;
  margin: 20px 0 80px;
`;

const DateContainer = styled.div`
  ${flexbox('row', 'space-between')}
`;
