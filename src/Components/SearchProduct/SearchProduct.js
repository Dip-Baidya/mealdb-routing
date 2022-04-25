import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SearchProduct = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meals;

    return (
        <div>
            <div className="p-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 100)}
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div >
        </div>
    );
};

export default SearchProduct;