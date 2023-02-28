import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type Icon = {
  src: string;
  alt: string;
  width: number;
  height?: number;
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon?: Icon | undefined;
  background?: string;
  width?: string;
  height?: string;
  radius?: string;
}

const Button = ({ children, onClick, icon, ...attributes }: Props) => {
  return (
    <Wrapper onClick={onClick} icon={icon} {...attributes}>
      {children}
      {icon && (
        <IconWrapper>
          <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
        </IconWrapper>
      )}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ icon }) => (icon ? 'space-between' : 'center')};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '54px'};
  border-radius: ${({ radius }) => radius || '12px'};
  color: ${({ color }) => color || '#000'};
  background: ${({ background }) => background || '#D9D9D9'};
  padding: 12px 24px;
`;

const IconWrapper = styled.div``;
