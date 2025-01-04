import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
class App extends React.Component {
  render() {
    return <div>
      <h1> App-Class Component </h1>
      <Header/>
      <Product/>
    </div>
  }
}
export default App;