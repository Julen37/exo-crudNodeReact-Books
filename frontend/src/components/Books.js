import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Books() {

    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081')
        .then(res => setBook(res.data))
        .catch(err => console.log(err));
    }, []);

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-80 bg-danger rounded p-3'>
            <Link to="/create" className='btn btn-dark'>Add a book</Link>
            <table className='table mt-2 table-striped table-dark table-bordere'>
                <thead>
                    <tr >
                        <td>Title</td>
                        <td>Author</td>
                        <td>Date of publication</td>
                        <td>Options</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((data, i) => (
                            <tr key={i}>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.yearReleased}</td>
                                <td>
                                    <button className='btn btn-light'>Edit</button>
                                    <button className='btn btn-secondary ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Books
