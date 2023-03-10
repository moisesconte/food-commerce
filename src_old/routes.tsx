import { Routes, Route } from 'react-router-dom'
import { BurgersPage } from './pages/Burgers'
import { DrinksPage } from './pages/drinks'
import { IceCreamsPage } from './pages/IceCreams'

import MainPage from './pages/Main'
import { PizzasPage } from './pages/Pizzas'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='ice-creams' element={<IceCreamsPage />} />
      </Route>
    </Routes>
  )
}
