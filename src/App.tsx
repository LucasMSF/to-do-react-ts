import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className='min-h-[80vh] flex flex col justify-center items-center'>
        <TaskForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
