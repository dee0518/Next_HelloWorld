import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import ModalHeader from './ModalHeader';
import DateList from './DateList/DateList';
import VisitingCityAndCountry from './VisitingCityAndCountry';
import Button from '../common/Button/Button';
import ItineraryCard from './ItineraryCard';
import CompanionList from './CompanionList/CompanionList';

const Itinerary = () => {
  const MockData = {
    id: '12312awsfasfa',
    creatorId: 'choi',
    title: '도쿄여행 오사카여행 나고야 오사카여행 나고야',
    startDate: new Date(2023, 2, 26),
    endDate: new Date(2023, 2, 29),
    members: [],
    readyMembers: [],
    itineraryId: 'asasaw12312',
    chatId: '123sfasfasfzx',
  };
  return (
    <Wrapper>
      <ModalHeader title={MockData.title} subTitle="In Feb 27 - 38" uiType="dark" onClick={() => {}} />
      <DateList startDate={MockData.startDate} endDate={MockData.endDate} />
      <VisitingCityAndCountry />
      <ItineraryCard />
      <ItineraryCard />
      <FooterWrapper>
        <TotalStay>
          <span>Total stay</span>
          <span>4 nights</span>
        </TotalStay>
        <Button background="#464B68" color="#ffffff" onClick={() => {}}>
          저장
        </Button>
      </FooterWrapper>
      <CompanionWrapper>
        <CompanionList />
      </CompanionWrapper>
    </Wrapper>
  );
};

export default Itinerary;

const Wrapper = styled.div`
  width: 360px;
  height: 600px;
  position: relative;
  /* margin-left: 100px; */
  /* top: 100px;
  left: 200px; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  /* overflow: hidden; */
`;

const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.gray400};
`;

const TotalStay = styled.div`
  ${flexbox('row', 'space-between', 'center')}
  font-size: 14px;
  color: ${({ theme }) => theme.gray800};
  margin-bottom: 24px;
`;

const CompanionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -60px;
`;
