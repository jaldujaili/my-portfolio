import React, {useState} from 'react';
import styles from './Navbar.module.css'
import { BiMenu } from 'react-icons/bi';
import {FaTimes} from 'react-icons/fa'
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className={ styles.navbar }>
        <Link className={ styles.title } to="/my-portfolio/">Home</Link>
        <div className={ styles.menu }>
          {menuOpen 
            ? <FaTimes className={ styles.menuBtn } alt="menu-button" onClick={handleClick}/>
            : <BiMenu className={ styles.menuBtn } alt="menu-button" onClick={handleClick} />
          }
          <ul className={`${ styles.menuItems } ${ menuOpen && styles.menuOpen }` }>
            <li className={styles.items}>
              <Link to="/my-portfolio/about">About</Link>
            </li>
            <li className={styles.items}>
              <Link to="/my-portfolio/experience">Experience</Link>
            </li>
            <li className={styles.items}>
              <Link to="/my-portfolio/projects">Projects</Link>
            </li>
            <li className={styles.items}>
              <Link to="/my-portfolio/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}