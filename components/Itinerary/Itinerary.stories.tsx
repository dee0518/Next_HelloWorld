import { ComponentStory, ComponentMeta } from '@storybook/react';
import Itinerary from './Itinerary';

export default {
  title: 'Itinerary/Itinerary',
  component: Itinerary,
} as ComponentMeta<typeof Itinerary>;

const Template: ComponentStory<typeof Itinerary> = () => <Itinerary />;

export const ItineraryComponent = Template.bind({});
