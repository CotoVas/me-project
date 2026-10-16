import './App.css';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewBook } from './NewBook/NewBook';
import { Stats } from './Stats/Stats';
import { books } from './components/BookList';
import type { NewBookType } from './types/NewBookType';


function App() {


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
      <BookList />
      <Footer />
    </>
  );
}

export default App;