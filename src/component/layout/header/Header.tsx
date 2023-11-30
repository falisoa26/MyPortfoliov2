// import React from 'react'
import './Header.scss'
// import Logo from '../../icons/iconLogo/Logo'
import NavItem from './NavItem'
import IconHeader from '../../general/icons/IconHeader'
import Menu from '../../general/icons/Menu'
// import { useState } from 'react'

type props = {
    setView: React.Dispatch<React.SetStateAction<boolean>>,
    view: boolean,
    roote: boolean
}

const Header = ({ setView, view }: props) => {

    const show = () => {
        view ? setView(false) : setView(true);
    }
    return (
        <>
            <div className='header'>
                <div className="logo">
                    <IconHeader />
                </div>
                {
                    view && <div className='navbarItems'>
                        <NavItem />
                    </div>
                }

                <div className="iconHeader" onClick={show} >
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Header;
