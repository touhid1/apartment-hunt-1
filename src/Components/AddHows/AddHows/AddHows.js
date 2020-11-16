import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AddHowsFrom from '../AddHowsFrom/AddHowsFrom';
import './AddHows.css'

const AddHows = () => {
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5 addHows_wrap">
                <div className='d-flex justify-content-between hows_header'>
                    <h3>Add Rent Hows</h3>
                    <h4>sajjat hossain</h4>
                </div>
                <div className='addHows_from'> 
                    <AddHowsFrom />
                </div>
            </div>
        </div>
    );
};

export default AddHows;