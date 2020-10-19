import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

const List = () => {
    const [products, setProducts] = useState([]);

    const runUpdate = () => {
        Axios.get("http://localhost:8000/api/products/")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        runUpdate();

    }, [])

    
    const deleteItem = (id) => {
        Axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => runUpdate())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ul>
                {products.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={"/detail/"+item._id}>{item.title} - {item.description}</Link>
                            <span className="widemargin linklike" onClick={() => deleteItem(item._id) }>Delete entry!</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;

/**/