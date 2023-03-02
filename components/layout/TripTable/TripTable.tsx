import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/common/Button/Button';
import Pagination from '@/components/layout/TripTable/Pagination';
import Status from '@/components/layout/TripTable/Status';
import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import trashImg from '@/assets/icon/delete_trash.svg';
import sortImg from '@/assets/icon/sort.svg';
import { Icon } from '@/types/common/icon';
import { ITrip } from '@/types/trip';
import Checkbox from './Checkbox';
import { formatDate } from '@/utils/formatDate';

const tripList = [
  {
    id: 'trip_1',
    creatorId: 'user_1',
    title: '도쿄여행',
    startDate: '2023.03.21',
    endDate: '2023.04.31',
    members: [
      {
        id: 'user_2',
        email: 'test1@email.com',
        nickname: 'tester12',
        profile: null,
        isSocial: false,
      },
      {
        id: 'user_3',
        email: 'test2@email.com',
        nickname: 'tester134',
        profile: null,
        isSocial: true,
      },
      {
        id: 'user_6',
        email: 'test1@email.com',
        nickname: 'tester12',
        profile: null,
        isSocial: false,
      },
      {
        id: 'user_7',
        email: 'test2@email.com',
        nickname: 'tester134',
        profile: null,
        isSocial: true,
      },
      {
        id: 'user_4',
        email: 'test1@email.com',
        nickname: 'sdjfster12',
        profile: null,
        isSocial: false,
      },
      {
        id: 'user_5',
        email: 'test2@email.com',
        nickname: 'sdfter134',
        profile: null,
        isSocial: true,
      },
    ],
    readyMembers: [],
    itinerayId: 'itineray_1',
    chatId: 'chat_1',
  },
  {
    id: 'trip_2',
    creatorId: 'user_2',
    title: '취준 성공 여행',
    startDate: '2023.01.21',
    endDate: '2023.02.28',
    members: [
      {
        id: 'user_1',
        email: 'test@email.com',
        nickname: 'tester1',
        profile: null,
        isSocial: false,
      },
    ],
    readyMembers: [],
    itinerayId: 'itineray_1',
    chatId: 'chat_1',
  },
];

type TProps = {
  total: number;
  tripList: ITrip[];
};

const TripTable = ({ total, tripList }: TProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [checkedTrip, setCheckedTrip] = useState<string[]>([]);

  const onClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const onChange = (id: string) => {
    if (id === 'all') {
      setCheckedTrip(prev => {
        if (prev.length === tripList.length) return [];
        return tripList.map(trip => trip.id);
      });
      return;
    }

    setCheckedTrip(prev => (prev.includes(id) ? prev.filter(val => val !== id) : [...prev, id]));
  };

  const onControlPage = (type: string) => {
    if (currentPage <= 1 || currentPage >= Math.ceil(total / 10)) return;
    const delta = type === 'prev' ? -1 : 1;
    setCurrentPage(prev => prev + delta);
    setCheckedTrip([]);
  };

  const deleteIcon: Icon = { image: trashImg, width: 16, height: 20, alt: '', color: '' };

  const onDelete = () => {};
  const onSort = () => {};

  return (
    <Wrapper>
      <TopButtonGroup>
        <Button width="120px" height="50px" radius="25px" onClick={onDelete} icon={deleteIcon}>
          Delete
        </Button>
      </TopButtonGroup>
      <Table>
        <colgroup>
          <Col />
          <Col />
          <Col />
          <Col />
          <Col />
          <Col />
        </colgroup>
        <thead>
          <tr>
            <Th scope="col">
              <Checkbox id="all" checked={checkedTrip.length === tripList.length} onChange={onChange} />
            </Th>
            <Th scope="col">Title</Th>
            <Th scope="col">
              Period{' '}
              <button type="button" aria-label="정렬" onClick={onSort}>
                <Image src={sortImg} width={20} height={20} alt="" />
              </button>
            </Th>
            <Th scope="col">Country</Th>
            <Th scope="col">Members</Th>
            <Th scope="col">Status</Th>
          </tr>
        </thead>
        <tbody>
          {tripList.length > 0 &&
            tripList.map(({ id, title, startDate, endDate, members }) => (
              <Tr key={id}>
                <Td>
                  <Checkbox id={id as string} checked={checkedTrip.includes(id as string)} onChange={onChange} />
                </Td>
                <Td>
                  <TripItemLink href={`/trip/${id}`}>{title}</TripItemLink>
                </Td>
                <Td>
                  {formatDate(startDate)} - {formatDate(endDate)}
                </Td>
                <Td>일본, 러시아, 베트남, 한국, 스페인, 프랑스, 독일</Td>
                <Td>
                  {members.length > 0 &&
                    members
                      .filter((_, i) => i < 5)
                      .map(({ id: memberId, nickname, profile }) => {
                        if (profile === null) return <Member key={memberId}>{nickname[0]}</Member>;
                        return (
                          <Profile key={memberId} src={profile} width={30} height={30} alt={`${nickname} profile`} />
                        );
                      })}
                  {members.length > 5 && <NumOfMember>+{members.length - 5}</NumOfMember>}
                </Td>
                <Td>
                  <Status startDate={startDate} endDate={endDate} />
                </Td>
              </Tr>
            ))}
        </tbody>
      </Table>
      <Pagination total={total} currentPage={currentPage} onClick={onClickPage} onControl={onControlPage} />
    </Wrapper>
  );
};

export default TripTable;

const Wrapper = styled.section`
  ${flexbox('column')}
  gap: 15px;
`;

const TopButtonGroup = styled.div`
  ${flexbox('row-reverse', 'space-between', 'center')}
  margin-bottom: 15px;
`;

const Table = styled.table`
  overflow: hidden;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border-radius: 10px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.gray200};
`;

const Col = styled.col`
  &:first-child {
    width: 60px;
  }

  &:nth-child(2) {
    width: 70%;
  }

  &:nth-child(3) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 30%;
  }

  &:nth-child(5) {
    width: 180px;
  }

  &:last-child {
    width: 100px;
  }
`;

const Th = styled.th`
  height: 60px;
  padding: 0 10px;
  font-size: 18px;
  background: ${({ theme }) => theme.navy100};
  text-align: left;

  &:first-child {
    ${flexbox('row', 'center', 'center')}
  }
`;

const Tr = styled.tr`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 25px;
    bottom: 0;
    width: calc(100% - 50px);
    height: 1px;
    background: ${({ theme }) => theme.gray100};
  }

  &:last-child::after {
    content: none;
  }
`;

const Td = styled.td`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 66px;
  padding: 10px 5px;
  font-size: 16px;

  &:first-child {
    ${flexbox('row', 'center', 'center')}
  }
`;

const TripItemLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
`;

const Member = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: -8px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  color: ${({ theme }) => theme.white};
  line-height: 30px;
  text-transform: uppercase;

  &:first-child {
    margin-left: 0;
    background: ${({ theme }) => theme.gray800};
  }

  &:nth-child(2) {
    background: ${({ theme }) => theme.gray200};
  }

  &:nth-child(3) {
    background: ${({ theme }) => theme.yellow};
  }

  &:nth-child(4) {
    background: ${({ theme }) => theme.navy200};
  }

  &:nth-child(5) {
    background: ${({ theme }) => theme.navy300};
  }
`;

const Profile = styled(Image)`
  margin-left: -8px;
  border-radius: 50%;

  &:first-child {
    margin-left: 0;
  }
`;

const NumOfMember = styled.span`
  margin-left: 5px;
  font-size: 16px;
`;
