import { BookCard, type Book } from '../BookCard/Book';
import styled from '@emotion/styled';

export const books: Book[] = [
  { id: 1, title: 'Мы', author: 'Е. Замятин', status: 'reading', coverUrl: 'https://imo10.labirint.ru/books/657643/cover.jpg/2000-0' },
  { id: 2, title: '1984', author: 'Д. Оруэлл', status: 'want', coverUrl: 'https://imo10.labirint.ru/books/882183/cover.jpg/2000-0'},
  { id: 3, title: '451° по Фаренгейту', author: 'Р. Брэдбери', status: 'done', rating: 5, note: 'Классика антиутопии.', coverUrl: 'https://content.img-gorod.ru/pim/products/images/9b/a3/018f5f36-30fd-7b06-9ed6-d3504a339ba3.jpg?width=2560&height=1920'},
];

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

export function BookList() {
  return (
    <Section>
      <h2>Список книг</h2>
      {books.length === 0 && <p>Eror 204: Книг нет!</p>}
      <List>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </List>
    </Section>
  );
}