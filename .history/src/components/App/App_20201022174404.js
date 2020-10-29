import React from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"
import Background from "../../background.jpg"

function App() {

  const style = {
    backgroundColor: "red",
    opacity: 0.5
  }

  return (
    <div id="main-div" style={style}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;