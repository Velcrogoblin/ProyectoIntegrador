import React from "react";
import {useState} from "react";
import {validate} from "./validate"
import styles from "./Form.module.css"

export default function Form (props) {

    
    const [userData, setUserData] = useState ({
        userName: "",
        password: ""
    });

    const [errors, setErrors] = useState ({
        userName: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserData ({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors (validate({
            ...userData,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }

    return (
        <div className = {styles.contenedor}>
        <div className = {styles.fondo}>
        <form onSubmit = {handleSubmit}>
            <label>USUARIO</label>
            <br></br>
            <input type = "text" value = {userData.userName} name = "userName" onChange = {handleChange}></input><br></br>
            {errors.userName ? <p>{errors.userName}</p> : null}<br></br>
            <label>CONTRASEÑA</label><br></br>
            <input type = "password" value = {userData.password} name = "password" onChange = {handleChange}></input><br></br>
            {errors.password ? <p>{errors.password}</p> : null}<br></br>
            <button className = {styles.boton} type = "submit">LOGIN</button>
        </form>
        </div>
        </div>
    )
}