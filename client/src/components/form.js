import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from '@reach/router';

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const Navigate = useNavigate();

    const addProduct = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/products/new/", {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res);
                Navigate("/detail/" + res.data._id) 
            })
            .catch(err => console.log(err));
    }
    return(
        <div>

            <form onSubmit={addProduct} >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Go!" />
            </form>
        </div>
    )
}

export default Form;