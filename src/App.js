import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import Footer from './components/Footer'

import {
  Route, Routes
} from "react-router-dom";



export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY

  render() {
    return (

      < div >

        <Navbar /> {/* Navbar is not a route component, so it should be placed here, outside of Routes. */}

        <Routes>

          <Route exact path='/' element={<News apikey={this.apikey} key="general" pagesize={8} country='in' category='general' />} />
          <Route exact path='/business' element={<News apikey={this.apikey} key="business" pagesize={8} country='in' category='business' />} />
          <Route exact path='/entertainment' element={<News apikey={this.apikey} key="entertainment" pagesize={8} country='in' category='entertainment' />} />
          <Route exact path='/health' element={<News apikey={this.apikey} key="health" pagesize={8} country='in' category='health' />} />
          <Route exact path='/science' element={<News apikey={this.apikey} key="science" pagesize={8} country='in' category='science' />} />
          <Route exact path='/sports' element={<News apikey={this.apikey} key="sports" pagesize={8} country='in' category='sports' />} />
          <Route exact path='/technology' element={<News apikey={this.apikey} key="technology" pagesize={8} country='in' category='technology' />} />
          <Route exact path='/about' element={<div className="container"><About /></div>} />


        </Routes>
        <Footer />

      </ div>
    )
  }
}
