import { flexbox } from '@/styles/mixin';
import React from 'react';
import styled from 'styled-components';
// import Profile from './CompanionList/Profile';

const ItineraryCard = () => {
  return (
    <Wrapper>
      <TimeWrapper>
        <Circle>1</Circle>
        <span>AM 11:00</span>
      </TimeWrapper>
      <Destination>
        <p>도쿄역</p>
        <span>신주쿠, 도쿄</span>
        <Members>
          <span>2 Members</span>
          <ul>
            {/* <li>
              <Profile />
            </li>
            <li>
              <Profile />
            </li> */}
          </ul>
        </Members>
      </Destination>
    </Wrapper>
  );
};

export default ItineraryCard;

const Wrapper = styled.li`
  ${flexbox('row', 'flex-start', 'flex-start')};
  padding: 12px 24px;
`;

const TimeWrapper = styled.div`
  ${flexbox('column', 'center', 'center')};
  margin-right: 16px;

  & span {
    font-weight: 500;
    font-size: 8px;
    color: #ff5e5e;
  }
`;

const Circle = styled.div`
  ${flexbox('row', 'center', 'center')};
  width: 34px;
  height: 34px;
  border: 2px solid #2b2e42;
  border-radius: 50%;
  margin-bottom: 4px;
  font-weight: 700;
  color: #464b68;
`;

const Destination = styled.div`
  ${flexbox('column', 'center', 'flex-start')};

  & p {
    font-weight: 600;
  }

  & > span {
    font-weight: 400;
    font-size: 12px;
    color: #ababab;
  }
`;

const Members = styled.div`
  ${flexbox('row', 'flex-start', 'center')};
  margin-top: 12px;
  font-weight: 400;
  font-size: 12px;
  color: #878787;

  & span {
    margin-right: 8px;
  }

  & ul {
    ${flexbox('row', 'flex-start', 'center')};

    & li {
      width: 18px;
      height: 18px;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
