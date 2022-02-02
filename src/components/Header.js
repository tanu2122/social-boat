import styled from 'styled-components';
import { useState } from 'react';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

function Header({profileSrc, logoSrc, placeholder, video}) {

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const[searchTerm, setSearchTerm] = useState("")

    return (
        <Nav>
            <Link to="/">
                <Logo src={logoSrc}></Logo>
            </Link>
            <NavMenu>
                <Input
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={placeholder}
                    id="input-with-icon-adornment"
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    }
                />
            </NavMenu>
            <Link to="/">
            <UserImg 
                src={profileSrc} 
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            />
            </Link>
            
            <ProfileMenu 
                showMenu={open} 
                onMouseMove={() => setOpen(true)} 
                onMouseLeave={() => setOpen(false)}>
                    <li><Link to="/users">Profile</Link></li>
                    <li>Logout</li>
            </ProfileMenu>
            
        <SearchMenu showSearch={show} onMouseMove={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {
            video.filter((val, key) => {
                if(searchTerm === "") {
                    return null
                } else if(val.video.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <li><ReactPlayer 
                        width='100%' 
                        height='30%' 
                        url={val.video} 
                        muted></ReactPlayer>
                    </li>
                )
            })
        }
        </SearchMenu>
        </Nav>
        
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    overflow-y: hidden;
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    width: 100%;
    }

`
const SearchMenu = styled.div`
  position:fixed;
  top:53px;
  bottom:0;
  right:890px;
  background-color: gainsboro;
  width: ${props => props.showSearch ? "250px" : "0"};
  height: ${props => props.showSearch ? "300px" : "0"};
  list-style: none;
  text-align: start;
  overflow-y: scroll;  
  li {
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    cursor: pointer;
  }
`

const ProfileMenu = styled.div`
position:fixed;
  top:60px;
  bottom:0;
  right:0;
  background-color: white;
  width: 100px;
  height: 100px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${props => props.showMenu ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s;
  li {
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    cursor: pointer;
  }`

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`