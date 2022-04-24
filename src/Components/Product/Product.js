import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.product;

    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/product/${idMeal}`)
    }
    return (
        <div className="p-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button onClick={handleDetailClick} variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Product;