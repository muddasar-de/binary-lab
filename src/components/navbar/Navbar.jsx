import React, { useState } from 'react';
import './navbar.css';
import { CgMenuRight } from 'react-icons/cg';
import { MdOutlineClose } from 'react-icons/md';
import Logo from '../../assets/logo.svg';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Features</a>
      <a href='#'>Footer</a>
    </>
  );
  return (
    <div className='nav__container '>
      <div className='nav__container__content'>
        <div className='nav__logo'>
          <a href='#'>
            {' '}
            <img src={Logo} />{' '}
          </a>
        </div>
        <div className='nav__container__links nav__links'>
          <Menu />
        </div>
        <div className='nav__container__sign '>
          <a href='#'> Sign In</a>
          <a className='btn' href='#'>
            Sing Up
          </a>
        </div>
        <div className='mobile__nav__menu'>
          {toggleMenu ? (
            <MdOutlineClose
              className='toggleIcons'
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <CgMenuRight
              className='toggleIcons'
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='mobile__nav__container'>
              <div className='mobile__nav__links nav__links'>
                <Menu />
              </div>
              <hr />

              <div className='mobile__nav__container__sign '>
                <a href='#'> Sign In</a>
                <a className='btn' href='#'>
                  Sing Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
