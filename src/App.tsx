import './App.css';
import { useState } from 'react';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewBook } from './NewBook/NewBook';
import { Stats } from './Stats/Stats';
import { initialBooks } from './data/book'; 
import { TasksDemo } from './TasksDemo/Tasks'; 
import type { Book } from './types/book';
import type { NewBookType } from './types/NewBookType';
import { BookForm } from './BookForm/BookForm';



function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const deleteBook = (id: number) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const demoBook: NewBookType = {
    id: 1,
    title: 'Герой Нашего Времени',
    author: '@Лермонтов',
    rating: 4.8,
    oldPrice: 299.99,
    newPrice: 149.99,
    discount: 50,
    cover: '/covers/geroi.jpg',
  };

  return (
    <>
      <Header />
      <main>
        <h1>Welcome to the BookStore</h1>
        <NewBook book={demoBook} /> 
      </main>
      <Stats books={books} />
      <BookList books={books} deleteBook={deleteBook} />
      <BookForm />
      <TasksDemo />
      <Footer />
    </>
  );
}

export default App;