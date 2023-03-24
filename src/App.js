import './App.css'
import React from "react"
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"
import Form from "./components/Form.jsx"
import {useState, useEffect} from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App () {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const userName = "ddandolo@yahoo.com"
  const password = "password123"

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters([...characters, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id))
    setCharacters(filtered);
  }

  const login = (userData) => {
    if (userData.userName === userName && userData.password === password) { 
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(() => {
    !access && navigate("/")
  },[access])

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" &&
      <div>
        <Nav onSearch = {onSearch}/>
      </div>}
      <Routes>
        <Route path = "/" element = {<Form login = {login}/>}></Route>
      <Route path = "/Home" element = {<Cards
          characters = {characters} onClose = {onClose}
        />}>
      </Route>
      <Route path = "/About" element = {<About/>}></Route>
      <Route path = "/detail/:detailId/" element = {<Detail/>}></Route>
      </Routes>
    </div>
  )
}

export default App
