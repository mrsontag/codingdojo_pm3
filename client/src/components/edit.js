import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from '@reach/router';

const Edit = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        Axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));

    }, [])
    
    const Navigate = useNavigate();

    const submitUpdate = (e) => {
        e.preventDefault();
        Axios.put("http://localhost:8000/api/products/update/" + props.id, {
            title: title,
            price: price,
            description: description
        })
            .then((res) => {
                console.log(res);
                Navigate("/detail/" + props.id);
            })
            .catch(err => console.log(err));
            
    }
    return(
        <div>

            <form onSubmit={ submitUpdate }>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Save updates!" />
            </form>
        </div>
    )
}

export default Edit;