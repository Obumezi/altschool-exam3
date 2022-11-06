
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
/* import About from './components/About' */
import { FeaturedProducts } from './components/FeaturedProducts'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { NewProduct } from './components/NewProducts'
import { NotFound } from './components/NotFound'
import OrderSummary from './components/OrderSummary'
import Products from './components/Products'
import { Profile } from './components/Profile'
import { AuthProvider } from './components/Auth'
import Login from './components/Login'
import { RequireAuth } from './components/RequireAuth'
import 'bootstrap/dist/css/bootstrap.min.css';





const LazyAbout = React.lazy(() => import('./components/About'))




function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback='Loading....'>
            <LazyAbout />
          </React.Suspense>} />
        <Route path='OrderSummary' element={<OrderSummary />} />


        <Route path='products' element={<Products />} >



          {/* Index route */}
          <Route index element={<FeaturedProducts />} />
          <Route path='FeaturedProducts' element={<FeaturedProducts />} />
          <Route path='NewProduct' element={<NewProduct />} />
        </Route>

        <Route path='profile' element={<RequireAuth>
          <Profile />
        </RequireAuth>} />

        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>

  )
}

export default App
