import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Books() {

    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081')
        .then(res => setBook(res.data))
        .catch(err => console.log(err));
    }, []);

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-danger rounded p-3'>
            <button className='btn btn-dark'>Add a book</button>
            <table className='table mt-2 table-striped table-dark'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Date of publication</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((data, i) => (
                            <tr key={i}>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.yearReleased}</td>
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
