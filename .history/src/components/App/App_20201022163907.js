import React from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"

function App() {
  return (
    <div style={{display: "flex"}}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
