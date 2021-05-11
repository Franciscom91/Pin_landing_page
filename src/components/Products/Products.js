import Carousel from 'react-bootstrap/Carousel'

const Products = () => {
    return(
        <section id="products" className="products">
            <div className="products-content">
                <div className="products-card">
                    
                    <Carousel>
                        <Carousel.Item>
                            <h3>Send ut perspiciatis 1</h3>
                            <h2>Nemo Enim 1</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. 1</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Send ut perspiciatis 2</h3>
                            <h2>Nemo Enim 2</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. 2</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Send ut perspiciatis 3</h3>
                            <h2>Nemo Enim 3</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. 3</p>
                        </Carousel.Item>
                    </Carousel>
                    
                </div>
            </div>
        </section>
    )
    
}

export default Products





// import React, { useState } from 'react'
// import arrowLeft from '../../assets/img/arrow-left.svg'
// import arrowRight from '../../assets/img/arrow-right.svg'

// const Products = () => {
//     const [slider, setSlider] = React.useState("slider1")

//     const changeSlider1 = () => {
//         setSlider("slider2")
//     }

//     const changeSlider2 = () => {
//         setSlider("slider1")
//     }

//     return ( 
//         <section id="products" className="products">
//             <div className="products-content">
//                 <div className="products-card">
//                     <div>
//                         { slider }
//                     </div>
//                     <div className="products-card-nav">
//                         <a className="nav-left" onClick={changeSlider1}><img src={arrowLeft} alt="arrow-left" /></a>
//                         <a className="nav-right" onClick={changeSlider2}><img src={arrowRight} alt="arrow-right" /></a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//      )
// }
 
// export default Products;






