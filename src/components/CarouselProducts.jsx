import React from 'react'

const CarouselProducts = () => {


  return (
        <div id="myCarouselPoducts" className="carousel slide carousel-products" data-bs-ride="carousel">
            <div className="carousel-inner inner-products">
                <div className="carousel-item active firstProduct">
                    <div className='productsContainer'>
                        <div className='products-info'>
                            <p className='info-top'>sed ut perspiciatis unde</p>
                            <h3>Nemo enim</h3>
                            <p className='info-down'>sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item secondProduct">
                    <div className='productsContainer'>
                        <div className='products-info'>
                            <p className='info-top'>sed ut perspiciatis unde</p>
                            <h3>Nemo enim</h3>
                            <p className='info-down'>sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item thirdProduct">
                    <div className='productsContainer'>
                        <div className='products-info'>
                            <p className='info-top'>sed ut perspiciatis unde</p>
                            <h3>Nemo enim</h3>
                            <p className='info-down'>sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="arrow">
                <img className="carousel-control-prev" type="button" data-bs-target="#myCarouselPoducts" data-bs-slide="prev" src="./src/assets/img/Icon feather-arrow-left-circle.svg"/>
                <img className="carousel-control-next" type="button" data-bs-target="#myCarouselPoducts" data-bs-slide="next" src="./src/assets/img/Icon feather-arrow-right-circle.svg"/>
            </div>
        </div>

  )
}

export default CarouselProducts