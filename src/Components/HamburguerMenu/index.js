import React from 'react';
import styles from './hamburguer.module.css';
import { NavLink } from 'react-router-dom';
import LogOut from 'Components/Auth/LogOut';

const HambMenu = (props) => {
  const isHovered = true;
  const token = sessionStorage.getItem('token');

  return (
    <nav className={`${styles.navbar} ${styles.animationShow}`}>
      <ul className={styles.rutes}>
        {props.routes.map((route) => (
          <li
            key={route.name}
            onClick={() => {
              props.setClickHamburguer(false);
            }}
          >
            <NavLink
              to={route.path}
              className={styles.navbarLink}
              activeClassName={styles.active}
              data-testid="home-btn"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${route.icon}`}
                alt={`icon ${route.name} `}
                className={styles.navIcon}
              />
              <span>{route.name}</span>
            </NavLink>
          </li>
        ))}
        <div className={token ? `styles.logoutButton` : `styles.noToken`}>
          {!!token && <LogOut isHovered={isHovered} />}
        </div>
      </ul>
    </nav>
  );
};

export default HambMenu;
