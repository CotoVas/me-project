import type { Book } from '../BookCard/Book';
import styled from '@emotion/styled';

interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  margin: 24px 0;
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const StatCard = styled.div`
  flex: 1;
`;

const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #969696;
`;

const Value = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 750;
  color: #deb557;
`;

export const Stats = ({ books }: StatsProps) => {
  const total = books.length;
    const done = books.filter((b) => b.status === 'done').length;
    const reading = books.filter((b) => b.status === 'reading').length;
    const want = books.filter((b) => b.status === 'want').length;

  return (
    <StatsSection>
      <StatsWrapper>
        <StatCard>
          <Label>Всего</Label>
          <Value>{total}</Value>
        </StatCard>
        <StatCard>
          <Label>Прочитано</Label>
          <Value>{done}</Value>
        </StatCard>
                <StatCard>
          <Label>Читаю</Label>
          <Value>{reading}</Value>
        </StatCard>
        <StatCard>
          <Label>Хочу прочитать</Label>
          <Value>{want}</Value>
        </StatCard>
      </StatsWrapper>
    </StatsSection>
  );

};


