import './App.scss'
import { Provider } from 'react-redux'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
import React from 'react'
import store from '../../redux/store'

function App() {
  return (
    <Provider store={store}>
      <div id="main-div">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
