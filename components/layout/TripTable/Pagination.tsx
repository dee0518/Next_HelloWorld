import { flexbox } from '@/styles/mixin';
import styled from 'styled-components';
import arrow from '@/assets/common/arrow_navy.svg';
import Image from 'next/image';

type TProps = {
  total: number;
  currentPage: number;
  onClick: (page: number) => void;
  onControl: (type: string) => void;
};

const Pagination = ({ total, currentPage, onClick, onControl }: TProps) => {
  const val = Math.floor(currentPage / 10);
  const lastPage = Math.ceil(total / 10);
  const pageList = new Array(10)
    .fill(1)
    .map((_, i) => val * 10 + i + 1)
    .filter(page => page <= lastPage);

  return (
    <List>
      <Button type="button" aria-label="이전" onClick={onControl.bind(null, 'prev')}>
        <Image src={arrow} width={12} height={12} alt="" />
      </Button>
      {pageList.map(page => (
        <li key={page}>
          <Button
            type="button"
            className={page === currentPage ? 'current' : ''}
            disabled={page === currentPage}
            onClick={onClick.bind(null, page)}
          >
            {page}
          </Button>
        </li>
      ))}
      <NextBtn type="button" aria-label="다음" onClick={onControl.bind(null, 'next')}>
        <Image src={arrow} width={12} height={12} alt="" />
      </NextBtn>
    </List>
  );
};

export default Pagination;

const List = styled.ul`
  ${flexbox('row', 'center', 'center')}
  gap: 20px;
`;

const Button = styled.button`
  ${flexbox('row', 'center', 'center')}
  border: 0;
  padding: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray700};

  &.current {
    font-weight: bold;
    color: ${({ theme }) => theme.navy500};
  }
`;

const NextBtn = styled(Button)`
  transform: rotate(180deg);
`;
