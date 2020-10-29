import React from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"

function App() {

  const style = {
  backgroundImage: "../../background.jpg",
  opacity: 0.5
  }

  return (
    <div id="main-div" style={backgroundImage}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;