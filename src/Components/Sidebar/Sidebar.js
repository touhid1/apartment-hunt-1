import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import logo from '../../image/Logo/Logo.png'

const Sidebar = () => {

  

    return (
        <div className="sidebar_Container">
            <div className='navigation'>
                <img src={logo} alt=''/>
                <ul>
                    <li>
                        <Link to='/navbar'>
                            <span className='icon'><i class="fa fa-home" aria-hidden="true"></i></span>
                            <span className='title'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/booking'>
                            <span className='icon'><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>
                            <span className='title'>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/addHows'>
                            <span className='icon'><i class="fa fa-plus" aria-hidden="true"></i></span>
                            <span className='title'>Add House</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/myRent'>
                            <span className='icon'><HomeWorkIcon></HomeWorkIcon></span>
                            <span className='title'>My Rent</span>
                        </Link>
                    </li>

                    <li className='signOut'>
                        <Link to='/'>
                            <span className='icon'><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                            <span className='title'>Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Sidebar;