import React from 'react'

function Nvbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top px-5">
          <div className="container-fluid">
            <a className="navbar-brand text-light ps-5 ms-3" href="#">AR SHIKAR</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Templates
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex ">
              <button type="button" className="btn text-light me-5">Sign In</button>
              <button type="button" style={{backgroundColor:"#FF7F5C"}} className="btn text-light">Start Free</button>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Nvbar