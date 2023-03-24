import React from "react"
import SearchBar from './SearchBar.jsx'
import styles from "./Nav.module.css"
import {Link} from "react-router-dom"


export default function Nav(props) {
return (
    <div>
        <div className = {styles.navContainer}>
        <div className = {styles.links}><Link to = {"/About"}>ABOUT</Link></div>
        <div className = {styles.links}><Link to = {"/Home"}>HOME</Link></div>
        <SearchBar
          onSearch={(characterID) => props.onSearch(characterID)}
        />
      </div>
    </div>
)
}