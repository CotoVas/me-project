import styled from '@emotion/styled';
import type { Book, BookStatus } from '../types/book';

interface BookCardProps {
  book: Book;
  deleteBook: (id: number) => void;
}

const statusGradients: Record<BookStatus, string> = {
  done: 'linear-gradient(135deg, #310404 0%, #8b1a1a 100%)',
  reading: 'linear-gradient(135deg, #271902 0%, #e0c04e 100%)',
  want: 'linear-gradient(135deg, #120326 0%, #6a4a9a 100%)',
};

const statusColors: Record<BookStatus, string> = {
  done: '#8b1a1a',
  reading: '#b89b6a',
  want: '#6a4a9a',
};

const Author = styled.p`
  margin: 0 0 8px;
  font-size: 0.85rem;
  color: #999;
  font-style: italic;
`;

const Badge = styled.span<{ status: BookStatus }>`
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;

  color: #fff;
  background: ${({ status }) => statusGradients[status]};

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ status }) => statusColors[status]};
    margin-right: 6px;
    vertical-align: middle;
  }
`;

const Stars = styled.span`
  color: #c9a961;
  letter-spacing: 1px;
  font-size: 0.9rem;
`;

const Card = styled.article`
  width: 200px;
  text-align: center;
  font-family: Georgia, 'Times New Roman', serif;
  color: #e8e8e8;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 12px;
`;

const Cover = styled.div<{ status: BookStatus }>`
  position: relative;
  width: 100%;
  height: 260px;
  border-radius: 4px;
  margin-bottom: 12px;
  background: ${({ status }) => statusGradients[status]};
  padding: 8px;
  box-sizing: border-box;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 2px;
`;

const CoverTitle = styled.span<{ length: number }>`
  position: absolute;
  inset: auto 8px 8px 8px;
  color: #fffefead;
  font-family: Arial, sans-serif;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  pointer-events: none;

  font-size: ${({ length }) => {
    if (length > 40) return '8px';
    if (length > 28) return '10px';
    if (length > 16) return '12px';
    return '16px';
  }};
`;

const RatingValue = styled.span`
  margin-left: 6px;
  color: #888;
  font-size: 0.8rem;
`;

const Hint = styled.p`
  margin: 6px 0 0;
  font-size: 0.75rem;
  color: #666;
`;

const Note = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #aaa;
  font-style: italic;
  line-height: 1.4;
`;

const DeleteButton = styled.button`
  width: 38px;
  height: 38px;
  padding: 0;
  font-size: 18px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { background: #3a3a3a; }
  &:active { background: #1a1a1a; }
  &:focus-visible { outline: 2px solid #8b735f; outline-offset: 2px; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const statusText = {
  want: 'Хочу прочитать',
  reading: 'Читаю',
  done: 'Прочитано',
} satisfies Record<Book['status'], string>;

export function BookCard({ book, deleteBook }: BookCardProps) {
  const rating = book.rating ?? 0;
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <Card>
      <Cover status={book.status}>
        {book.coverUrl && <CoverImage src={book.coverUrl} alt={book.title} />}
        <CoverTitle length={book.title.length}>{book.title}</CoverTitle>
      </Cover>
      <Author>{book.author}</Author>
      <Badge status={book.status}>{statusText[book.status]}</Badge>

      {book.status === 'done' ? (
        <>
          <p>
            <Stars>{stars}</Stars>
            <RatingValue>{rating}/5</RatingValue>
          </p>
          {book.note && <Note>{book.note}</Note>}
        </>
      ) : (
        <Hint>Оценка появится после прочтения</Hint>
      )}
      
      <DeleteButton 
        onClick={() => deleteBook(book.id)}
      >
        🗑️
      </DeleteButton>
    </Card>
  );
}