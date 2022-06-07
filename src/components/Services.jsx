import React from 'react'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="accordion" id="accordionServices">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <p>Accordion Item #1</p>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionServices">
            <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab tempore nobis impedit dolore non accusantium id quos porro! Qui quis cumque suscipit repellendus facilis rem consectetur illum a nulla?</p>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <p>Accordion Item #2</p>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionServices">
            <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab tempore nobis impedit dolore non accusantium id quos porro! Qui quis cumque suscipit repellendus facilis rem consectetur illum a nulla?</p>.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <p>Accordion Item #3</p>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionServices">
            <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab tempore nobis impedit dolore non accusantium id quos porro! Qui quis cumque suscipit repellendus facilis rem consectetur illum a nulla?</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services