import type { NewBookType } from '../types/NewBookType';
import './NewBook.css';

interface NewBookProps {
  book: NewBookType;
}

export const NewBook = ({ book }: NewBookProps) => {
  return (
    <div className="new-book">
      <div className="new-book__header">
        <h2 className="new-book__title">У нас появилась новая книга</h2>
        <p className="new-book__subtitle">Скидка {book.discount}%</p>
      </div>

      <div className="new-book__body">
        <div className="new-book__text">
          <p className="new-book__name">{book.title}</p>
          <p className="new-book__author">{book.author}</p>
          <p className="new-book__rating">⭐ {book.rating}</p>

          <div className="new-book__price">
            <span className="new-book__price-old">{book.oldPrice} ₽</span>
            <span className="new-book__price-new">{book.newPrice} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};
