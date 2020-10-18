import React from 'react';
import './App.css';
import Header from "./src/components/header/Header"
import Footer from "./src/components/footer/Footer"
import MainContent from "./src/components/mainContent/MainContent"

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
