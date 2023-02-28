import { StaticImageData } from 'next/image';

export interface Icon {
  image: StaticImageData;
  alt: string;
  width: number;
  height: number;
  color: string;
}
