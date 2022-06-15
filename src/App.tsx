import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className='min-h-[80vh]'>
        <h1>Conteúdo</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
