
const CarouselHeader = () => {
  return (
    <div className='headerBlock'>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators myContainer">
                <button type="button" data-bs-target='#myCarousel' data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target='#myCarousel' data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target='#myCarousel' data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className='carousel-item active firstHeader'>
                    <div className='myContainer'>
                        <div className='header-info'>
                            <h1>Set us perspiciatis<br/>unde omni iste natus</h1>
                            <p>sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                                    
                            <a className='button'>Read more</a>
                        </div>
                    </div>
                </div>
                <div className='carousel-item secondHeader'>
                    <div className='myContainer'>
                        <div className='header-info'>
                            <h1>Set us perspiciatis<br/>unde omni iste natus</h1>
                            <p>sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                                    
                            <a className='button'>Read more</a>
                        </div>
                    </div>
                </div>
                <div className='carousel-item thirdHeader'>
                    <div className='myContainer'>
                        <div className='header-info'>
                            <h1>Set us perspiciatis<br/>unde omni iste natus</h1>
                            <p>sed ut perspiciatis unde omnis iste natus error<br/>sit voluptatem accusantium doloremque.</p>
                                    
                            <a className='button'>Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default CarouselHeader