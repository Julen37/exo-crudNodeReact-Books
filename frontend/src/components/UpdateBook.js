import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const updatedBook = {title, author, date};
        axios.put(`http://localhost:8081/update/${id}`, updatedBook)
        .then(res => {
            console.log(res);
            navigate(-1);
        })        
        .catch(err => console.log(err));
    };

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-danger rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h1>Update the book</h1>
                <div className='mb-2'>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Title' className='form-control'  onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Author</label>
                    <input type="text" placeholder='Author' className='form-control' onChange={e => setAuthor(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Date of publication</label>
                    <input type="number" placeholder='Date of publication' className='form-control' onChange={e => setDate(e.target.value)}/>
                </div>
                <button className='btn btn-dark'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateBook
