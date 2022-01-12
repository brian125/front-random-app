import React, { Component } from 'react'
import FormNumeros from '../components/FormNumeros'
import Result from '../components/Result'
import From from '../components/From' 
import History from '../components/History'
import '../styles.css';
import Footer from '../components/Footer'

const App = () => {
    return (
      <div className='App'>        
        <h2 className="title" style={{textAlign: "center"}}>Lista Random</h2>
          <p className="sub-title">Sistema Ramdom</p>
        <div className='container-app'>
          <FormNumeros/>
          <From />       
        </div>
        <Result/>
        <History/>
        <Footer/>
      </div>
    )
}

export default App
