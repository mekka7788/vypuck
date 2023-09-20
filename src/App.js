import React, { useEffect, useState } from 'react';
import img from './components/assets/rectangle.png'
import Header from "./components/Header/header";
import colon from './components/assets/81Z-7PzoB9L 1.png'
import axios from "axios";
import Products from "./components/products";
import { Promotion } from './components/Promotion';

const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios(`https://api.escuelajs.co/api/v1/products?offset=0&limit=4`)
            .then(({ data }) => setProducts(data))
    }, [])

    console.log(products)
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="box">
                                    <label>FAVORIT BRANDS</label>
                                    <h3 className={'blue'}>
                                        An exciting place
                                    </h3>
                                    <h3 className={'black'}>
                                        for the whole family to chop.
                                    </h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                    <div className='for-button'>
                                        <button className={'shop'}>
                                            SHOP NOW
                                        </button>
                                        <p className={'price'}> $ 249.99</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="box">
                                    <img src={colon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Promotion />

                <section>
                    <Products products={products} />
                </section>

            </main>
        </>
    );
}

export default App;