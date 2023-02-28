import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import PlaceBadge from '../Badge/PlaceBadge';

const DestinationInfo = () => {
  return (
    <DestinationContainer>
      <PlaceContainer>
        <Place>도쿄역</Place>
        <PlaceBadge />
      </PlaceContainer>
      <Address>1 Chome Marunouchi, Chiyoda City, Tokyo 100-0005 일본</Address>
    </DestinationContainer>
  );
};

export default DestinationInfo;

const DestinationContainer = styled.div``;
const PlaceContainer = styled.div`
  width: 106px;
  ${flexbox('row', 'space-between', 'center')}
`;
const Place = styled.div`
  font-size: 20px;
  font-weight: 900;
  padding: 1px 0 0;
`;
const Address = styled.p`
  margin: 11px 0 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.gray700};
`;
