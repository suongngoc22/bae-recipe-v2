import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import MealDetail from './pages/meal/Meal'
import Favorite from './pages/favorite/Favorite'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/meal/:id' element={<MealDetail />} />
      <Route path='/profile/favorites' element={<Favorite />} />
    </Routes>
  )
}

export default App
