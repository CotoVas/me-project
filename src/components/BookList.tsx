import styled from '@emotion/styled';
import { BookCard } from '../BookCard/Book';
import type { Book } from '../types/book';

const Section = styled.section`
  padding: 0 24px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
  margin: 24px 0;
`;

interface BookListProps {
  books: Book[];
  deleteBook: (id: number) => void;
}

export function BookList({ books, deleteBook }: BookListProps) {
  return (
    <Section>
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <EmptyMessage>Error 204: Книг нет!</EmptyMessage>
      ) : (
        <List>
          {books.map((book) => (
            <BookCard key={book.id} book={book} deleteBook={deleteBook} />
          ))}
        </List>
      )}
    </Section>
  );
}