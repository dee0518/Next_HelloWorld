import { MouseEventHandler } from 'react';
import Image from 'next/image';
import cancelIcon from '../../public/assets/icon/cancel.svg';
import cancelBlackIcon from '../../public/assets/icon/cancel-black.svg';

type TProps = {
  onClick: MouseEventHandler;
  uiType?: 'dark' | 'light';
};

const CancelButton = ({ onClick, uiType }: TProps) => {
  return (
    <button type="button" onClick={onClick}>
      <Image src={uiType === 'dark' ? cancelIcon : cancelBlackIcon} alt="cancel icon" width={11} height={11} />
    </button>
  );
};

export default CancelButton;
