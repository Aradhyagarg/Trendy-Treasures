import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {lazy, Suspense} from "react"
import Loader from './components/Loader';

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customer" element={<Customers />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App