
function App() {


  return (
    <>
     <header className="py-3 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="./public/img/Mustang-LOGO.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito-container">
              <div className="carrito">
                <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />
                <div id="carrito-content" className="carrito-content"><p className="text-center">El carrito está vacío</p>                  
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>                      
                      <tr>
                        <td className="align-middle">
                          <img className="img-fluid" src="./public/img/aspark owl.jpg" alt="imagen automóvil" />
                        </td>
                        <td className="align-middle">Nombre</td>
                        <td className="fw-bold align-middle">$1.000.000</td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center gap-4">
                            <button 
                              type="button" 
                              className="btn btn-dark"
                              >
                                -
                              </button>
                            1
                            <button 
                              type="button" 
                              className="btn btn-dark"
                              >
                                +
                              </button>
                          </div>
                        </td>
                        <td className="align-middle border-top-0">
                          <button 
                            type="button" 
                            className="btn-close" 
                            aria-label="Close"
                            ></button>
                        </td>
                      </tr>
                    </tbody>

                  </table>
                  <p className="text-end">Total a pagar: <span className="fw-bold">$ 1.000.000</span></p>
                  <button 
                    className="btn btn-dark w-100 mt-3 p-2"
                    >Vaciar Carrito</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main className="container-xl mt-5">
      <h2 className="text-center">Automóviles disponibles</h2>
      <div className="row mt-5"></div>
      
      <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">        
        <div className="col-10 row align-items-center mx-auto">
          <img className="img-fluid" src="./public/img/aspark owl.jpg" alt="imagen automóvil" />  
          <h3 className="text-black fs-4 fw-bold text-uppercase">Bugatti Chiron</h3>
          <p>Bugatti</p>
          <p>420 km/h</p>
          <p>2016</p>
          <p className="fw-black text-primary fs-3">U$S - 3.300.000</p> 
          <button
            type="button"
            className="btn btn-dark w-100"
            >Agregar al Carrito</button>
        </div>
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
