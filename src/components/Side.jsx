import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { AcUnitOutlined, Close, MenuBook, MenuOpen } from '@mui/icons-material';


const Side = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            //path:"/",
            name: "Dashboard",
            //icon:<FaTh/>
        },
        {
            //path:"/about",
            name: "About",
            //icon:<FaUserAlt/>
        },
        {
            //path:"/analytics",
            name: "Analytics",
            //icon:<FaRegChartBar/>
        },
        {
            //path:"/comment",
            name: "Comment",
            //icon:<FaCommentAlt/>
        },
        {
            //path:"/product",
            name: "Product",
            //icon:<FaShoppingBag/>
        },
        {
            // path:"/productList",
            name: "Product List",
            // icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
            <div className="toggal" style={{ marginLeft: isOpen ? '10px' : '10px' }}>
                <MenuOpen onClick={toggle} />
            </div>
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">

                <Sidebar className='ultra' >

                    <div className="toggal" style={{ marginLeft: isOpen ? '220px' : '10px' }}>
                        <Close onClick={toggle} />
                    </div>
                    <Menu className='sidebar' style={{ display: isOpen ? "block" : "none"  }}>
                        <h1> <span><AutoAwesomeMosaicIcon /> </span> Dashbord</h1>

                        <h3>Dashbord</h3>
                        <SubMenu className='sidemenu' label="Products" >
                            <MenuItem className='sidemenu'> Pie charts </MenuItem>
                            <MenuItem className='sidemenu'> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu className='sidemenu' label="Coustermer" >
                        </SubMenu>

                        <SubMenu className='sidemenu' label="Income" >
                        </SubMenu>

                        <SubMenu className='sidemenu' label="Permote" >
                        </SubMenu>

                        <SubMenu className='sidemenu' label="Help" >
                        </SubMenu>
                        <div className='profile'>
                            <div className='profilediv'>
                                <img src="https://i.pinimg.com/564x/a2/f6/48/a2f648e5117d7aaeabd8a448fe78b2fd.jpg" width={'30px'} alt="image" />
                                <div className='name'>
                                    <h5>Siddhant</h5>
                                    <h6>Project Manager</h6>
                                </div>
                            </div>
                        </div>
                    </Menu>
                </Sidebar>
            </div>
            
        </div>
    )
}

export default Side