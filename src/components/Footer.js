import React from 'react'

const Footer = () => {
  return (
    <>
  {/* Footer */}
  <footer className="text-center text-white bg-dark text-muted">
    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              About Us
            </h6>
            <p>
            Investigat nvestigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.
             Monday to Saturday: 9.00 am to 9.00 pm
             Sunday: 10.00 am to 6.00 pm 
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <p>
              <a href="/" className="text-reset">
               Need help
              </a>
            </p>
            <p>
              <a href="/" className="text-reset">
                Our Latest news
              </a>
            </p>
            <p>
              <a href="/" className="text-reset">
                Table booking
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Fast delivery
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Recepies</h6>
            <p>
              <a href="#!" className="text-reset">
              Pizza Biscuit Bake
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              Pizza Margeritta
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              Pizza Prosciutto
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              Pizza Low Carb
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact us</h6>
            <p>
              <i className="fas fa-home me-3" /> New Delhi, NY 10012, BHARAT
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              infobharat@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
     Copyright by ModelTheme. All Rights Reserved.
      
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )
}
export default Footer