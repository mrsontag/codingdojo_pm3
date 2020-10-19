import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from '@reach/router';

const Detail = props => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));

    }, [])

    const Navigate = useNavigate();

    const deleteItem = () => {
        Axios.delete("http://localhost:8000/api/products/delete/" + props.id)
            .then(res => Navigate("/"))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description} </p>
            <Link className="widemargin" to={"/edit/" + props.id}>Edit entry!</Link>
            <span className="widemargin linklike" onClick={ deleteItem }>Delete entry!</span>
            <Link className="widemargin" to="/">Go home!</Link>
        </div>
    )
}

export default Detail;