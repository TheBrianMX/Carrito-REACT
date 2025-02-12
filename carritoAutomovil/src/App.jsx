import { useEffect, useState } from "react"
import { Automovil } from "./components/Automovil"
import { Header } from "./components/Header"
import { db } from "./data/db"

function App() {

  const initialCart = () => {
    const loclaeStorageCart = localStorage.getItem('cart')
    return loclaeStorageCart ? JSON.parse(loclaeStorageCart) : []
  }

  const data = db

  const [cart, setCart] = useState(initialCart)

  const MIN_ITEMS = 1
  const MAX_ITEMS = 10

  useEffect( () => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(item) {
    const itemExist = cart.findIndex(automovil => automovil.id === item.id )

    if (itemExist >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExist].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  function removeFromCart(ideEliminar) {
    setCart(preCart => preCart.filter( automovil => automovil.id !== ideEliminar ))
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map( item => {
      if (item.id === id && item.quantity > MIN_ITEMS ) {
        return{
          ...item,
          quantity: item.quantity -1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map ( item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return{
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <>
      <Header
        cart = {cart}
        removeFromCart = {removeFromCart}
        decreaseQuantity = {decreaseQuantity}
        increaseQuantity = {increaseQuantity}
        clearCart = {clearCart}
      />

    <main className="container-xl mt-5">
      <h2 className="text-center">Automóviles disponibles</h2>
      <div className="row mt-5">

       {data.map((automovil) => (

       
       <Automovil
        key={automovil.id}
        setCart= {setCart}
        automovil = {automovil}

        addToCart ={addToCart}
       />
      ) )} 

      </div>
      
      
      
    </main>

    <footer className="mt-5 py-5">
      <div className="container-xl">
        <p className="text-center fs-6 mt-4 m-md-0 text-muted">© 2024 Super Carros, Inc</p>
      </div>

    </footer>
    </>
  )
}

export default App
