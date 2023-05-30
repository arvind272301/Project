import React from "react";

const Prices = () => {
  return (
    <>
    <div className="heading">
     <h3>Pizza Menu</h3>
     <h1>WELLCOME TO </h1>
     <h1>MAESTRO PIZZAINI</h1>
    </div>
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4 my-6">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="pizza" />
              </div>
                 <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">₹99.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Quick Tomato Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">₹149.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Cheesy Vegetable Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">₹199.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Chocolate Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">₹249.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Four Cheese Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">₹299.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Tandoori Paneer Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">₹399.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
};
export default Prices;
