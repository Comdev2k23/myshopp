
import './App.css'
import { FlexContainer } from './components/FlexContainer'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import products from './components/ProductList'
import {FaShoppingCart} from 'react-icons/fa'

function App() {
 

  return (
    <>
      <div>
          <div>
            <NavBar />
          </div>
            <div className='header'><h1>MyShopp <FaShoppingCart /></h1></div>
            <FlexContainer products={products} />
          <>
            <Footer />
          </>
      </div>
    </>
  )
}

export default App
