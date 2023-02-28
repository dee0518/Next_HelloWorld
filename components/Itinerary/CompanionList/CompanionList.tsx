import Image from 'next/image';
import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import companionIcon from '../../../public/assets/icon/companion.svg';
import profilePic from '../../../public/assets/mockProfile.png';
import all from '../../../public/assets/icon/all.svg';
import Profile from './Profile';

const CompanionList = () => {
  return (
    <div>
      <CompanionButton type="button">
        <Image src={companionIcon} alt="companion icon" width={70} height={70} />
      </CompanionButton>
      <List>
        <Companion isSelected>
          <button type="button">
            <Profile src={all} alt="All icon" />
          </button>
        </Companion>
        <Companion isSelected={false}>
          <button type="button">
            <Profile src={profilePic} alt="person" />
          </button>
        </Companion>
      </List>
    </div>
  );
};

export default CompanionList;

const CompanionButton = styled.button`
  ${flexbox('row', 'center', 'center')}
  width: 36px;
  height: 36px;
  background: #3a3f57;
  border-radius: 4px;

  img {
    width: 80%;
  }
`;

const List = styled.ul`
  margin-top: 10px;
  ${flexbox('column', 'center', 'center')}
  gap: 8px;
`;

const Companion = styled.li<{ isSelected: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid ${({ isSelected, theme }) => (isSelected ? theme.mainGreen : theme.white)};
  overflow: hidden;

  & button {
    width: 100%;
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
