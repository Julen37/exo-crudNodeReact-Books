import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from './components/Books';
import CreateBook from './components/CreateBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}></Route>
          <Route path='/create' element={<CreateBook/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
