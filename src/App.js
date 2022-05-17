import './App.css';
import AddMovies from './components/AddMovies/AddMovies';
import Footer from './components/Footer/Footer';
import ListMovies from './components/List/ListMovies';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [listMovies, setListMovies] = useState([]);
  
  return (
    <div className="layout">
        <header className="header">
            <Header/>
        </header>
        <nav className="nav">
            <Navbar />
        </nav>
        <section className=" content">
          <ListMovies listMovies={listMovies} setListMovies={setListMovies}/>
        </section>
        <aside className="lateral">
            <Search listMovies={listMovies} setListMovies={setListMovies}/>
            <AddMovies setListMovies={setListMovies}/>
        </aside>
        <Footer/>
      </div>
  );
}

export default App;
