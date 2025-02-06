import { useState } from "react"
import { Automovil } from "./components/Automovil"
import { Header } from "./components/Header"
import { db } from "./data/db"

function App() {

  const data = db

  const [cart,setCart] = useState([])


  function addToCart(item) {
    console.log('agregando al carrito...', item)
  }

  return (
    <>
      <Header/>

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
