import React from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MainContent from "../MainContent/MainContent"
import Background from "../../background.jpg"

function App() {


  const style ={
    backgroundColor: "hsl(206, 29%, 66%)"
  }

  return (
    <div id="main-div" style={}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;