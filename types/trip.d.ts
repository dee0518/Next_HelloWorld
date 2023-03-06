import { IUser } from '@/types/user';

export interface ITrip {
  id: string;
  creatorId: string;
  title: string;
  startDate: string;
  endDate: string;
  members: IUser[];
  readyMembers: {
    user: IUser;
    isAccepted: false;
  }[];
  itinerayId: string;
  chatId: string;
}
