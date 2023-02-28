import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalHeader from './ModalHeader';

export default {
  title: 'Itinerary/ModalHeader',
  component: ModalHeader,
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = args => <ModalHeader {...args} />;

export const Dark = Template.bind({});

Dark.args = {
  title: '도쿄여행 오사카여행 나고야 오사카여행 나고야',
  subTitle: 'In Feb 27 - 38',
  onClick: () => {},
  uiType: 'dark',
};

export const Light = Template.bind({});

Light.args = {
  title: '도쿄여행 오사카여행 나고야 오사카여행 나고야',
  subTitle: 'In Feb 27 - 38',
  onClick: () => {},
  uiType: 'light',
};
