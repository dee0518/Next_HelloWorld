import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateTime from './DateTime';
import Calendar from '../../../public/assets/common/calendarIcon.png';
import Search from '../../../public/assets/common/searchIcon.png';

export default {
  title: 'Common/DateTime',
  component: DateTime,
} as ComponentMeta<typeof DateTime>;

const Template: ComponentStory<typeof DateTime> = args => <DateTime {...args} />;

export const DepartureInput = Template.bind({});
DepartureInput.args = {
  icon: {
    image: Calendar,
    alt: 'I',
    width: 24,
    height: 24,
    color: 'transparent',
  },
  placeholder: '출발일',
};

export const ArrivalInput = Template.bind({});
ArrivalInput.args = {
  icon: {
    image: Calendar,
    alt: 'I',
    width: 24,
    height: 24,
    color: 'transparent',
  },
  placeholder: '도착일',
};

export const TimeInput = Template.bind({});
TimeInput.args = {
  icon: {
    image: Search,
    alt: 'I',
    width: 24,
    height: 24,
    color: 'transparent',
  },
  placeholder: '시간',
};

// export const TitleInput = Template.bind({});
// TitleInput.args = {
//   icon: {
//     src: '/assets/common/calendarIcon',
//     alt: 'I',
//     width: 24,
//     height: 24,
//     color: 'transparent',
//   },
//   placeholder: '이번 여행의 제목을 입력해 주세요.',
//   wholeWidth: '440px',
//   inputWidth: '100%',
// };
