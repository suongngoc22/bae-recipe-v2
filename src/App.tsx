import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import MealDetail from './pages/meal/Meal'
import Favorite from './pages/favorite/Favorite'
import Landing from './pages/landing/Landing'
import Profile from './pages/profile/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/meal/:id' element={<MealDetail />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/favorites' element={<Favorite />} />
    </Routes>
  )
}

export default App
