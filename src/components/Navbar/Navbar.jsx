import React, { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { MenuItems } from '../Navbar/MenuItems'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink } from './NavbarElements'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        DEVDY
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        { click ? <FaTimes/> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        {MenuItems.map((item, index) => {
                            return (
                                <NavItem  to={item.path} key={index}>
                                    <NavLink>
                                        { item.menu }
                                    </NavLink>
                                </NavItem>
                            )
                        })}

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/">
                                    <Button primary>
                                        LINKED IN
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/">
                                    <Button fontBig primary>
                                        LINKED IN
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
