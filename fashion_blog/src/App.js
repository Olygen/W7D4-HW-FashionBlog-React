import React from 'react';
import Header from "./components/Header";
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
import "./App.css";

// import Header from './components/header';
// import Nav from './components/nav';
// import Article from './components/article';
// import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
