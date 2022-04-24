import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.meals))
    }, [])

    const handleBack = () => {
        navigate(`/products`);
    }
    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.strMealThumb} />
                    <Card.Body>
                        <Card.Title>{product.strMeal}</Card.Title>
                        <Card.Text>
                            Detail
                        </Card.Text>
                        <Button onClick={handleBack} variant="primary">All Products</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ProductDetail;