import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from './components/Books';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}></Route>
          <Route path='/create' element={<CreateBook/>}></Route>
          <Route path='/update/:id' element={<UpdateBook/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
