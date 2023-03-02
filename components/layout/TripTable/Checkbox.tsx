import Image from 'next/image';
import checkboxOff from '@/assets/common/checkbox_off.svg';
import checkboxOn from '@/assets/common/checkbox_on.svg';
import checkboxAll from '@/assets/common/checkbox_on_all.svg';
import styled from 'styled-components';

type TProps = {
  id: string;
  checked: boolean;
  onChange: (id: string) => void;
};

const Checkbox = ({ id, checked, onChange }: TProps) => {
  const setCheckImg = () => {
    let image = null;

    if (checked) {
      image = id === 'all' ? checkboxAll : checkboxOn;
    } else {
      image = checkboxOff;
    }

    return image;
  };
  const checkImg = setCheckImg();

  return (
    <>
      <label htmlFor={id}>
        <Image src={checkImg} width={20} height={20} alt="" />
      </label>
      <Input type="checkbox" checked={checked} id={id} onChange={onChange.bind(null, id)} />
    </>
  );
};

export default Checkbox;

const Input = styled.input`
  display: none;
`;
