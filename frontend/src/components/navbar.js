import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/index.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  return (
    <header className="header">
      <div className="brand">
        <button className="product-menu" onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">
          Yo-shop <span>🔥</span>
        </Link>
      </div>
      <div className="brand-links">
        <a href="#" className="">
          cart
        </a>

        {userInfo ? (
          <Link>{userInfo.name}</Link>
        ) : (
          <Link to="/signin">Signin</Link>
        )}
      </div>
    </header>
  );
}
