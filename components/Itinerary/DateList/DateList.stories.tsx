import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateList from './DateList';

export default {
  title: 'Itinerary/DateList',
  component: DateList,
} as ComponentMeta<typeof DateList>;

const Template: ComponentStory<typeof DateList> = args => <DateList {...args} />;

export const Day7Down = Template.bind({});

Day7Down.args = {
  startDate: new Date(2023, 0, 1),
  endDate: new Date(2023, 0, 3),
};

export const Day7Up = Template.bind({});

Day7Up.args = {
  startDate: new Date(2023, 0, 1),
  endDate: new Date(2023, 0, 10),
};
