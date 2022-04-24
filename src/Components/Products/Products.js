import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    return (
        <div className="d-flex justify-content-center m-5">

            {
                products.map(product =><Product key={product.idMeal} product={product}></Product>)
            }

        </div>
    );
};

export default Products;