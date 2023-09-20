import React from 'react';

const Products = ({products}) => {
    return (
        <>
            {
                products.map(product => {
                    return(
                        <div>
                            <img src={product.category.image}/>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Products;