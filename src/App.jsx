import { Suspense } from 'react'
import './App.css'
import Heading from './components/Heading/Heading'
import OrderContainer from './components/Heading/OrderContainer'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
const loadOrders = () => fetch("/orders.json").then(res=> res.json())
function App() {
  const orderPromise = loadOrders()
  
  return (
    <>
      <div>
        <header className='w-11/12 mx-auto py-3'>
            <Navbar></Navbar>
        </header>
        <section>
            <Heading>Kitchen Room</Heading>
        </section>
        <Suspense fallback="Loading 🔃">
          <OrderContainer orderPromise={orderPromise}></OrderContainer>
        </Suspense>


        <ToastContainer></ToastContainer>
      </div>
      
    </>
  )
}

export default App
