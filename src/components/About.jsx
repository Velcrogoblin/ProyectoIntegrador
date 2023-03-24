import React from "react";
import styles from "./About.module.css"

export default function About() {
    return (
        <div className = {styles.contenedor}>
                <div className = {styles.foto}></div>
                <div className = {styles.sobreMi}>
                    <h1>RICK & MORTY APP</h1>
                    <h3>Por Nicolás Dandolo</h3>
                    <br></br>
                    <span>Realicé esta app con los conocimientos que adquirimos durante el M2.</span>
                </div>
            </div>
    )
}