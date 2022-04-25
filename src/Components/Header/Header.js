import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import SearchProduct from '../SearchProduct/SearchProduct';

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


    const handleSearchField = e => {
        const searchText = e.target.value;
        setSearchText(searchText);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >MealDB Restaurant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/products" >All Products</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onChange={handleSearchField}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                {
                    meals.map(meal => <SearchProduct key={meal.idMeal} meal={meal}></SearchProduct>)
                }
            </div>
        </div>

    );
};

export default Header;