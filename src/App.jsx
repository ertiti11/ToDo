import './App.css'
import { Route } from 'wouter'
import Home from './pages/Home/Home'
import Categories from './pages/categories/Categories'



function App() {

  return (
    <>
      <Route 
      component={Home}
      path='/'
      />
      <Route 
      component={Categories}
      path='/categories/:keyword'
      />
      
    </>
  )
}

export default App
