import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MyRentAllData from '../MyRentAllData/MyRentAllData';

const MyRentData = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-inlet-29316.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", padding: '100px' }}>
                <div className='d-flex justify-content-between booking_header'>
                    <h3>My Rent</h3>
                    <h4>sajjat hossain</h4>
                </div>
                <MyRentAllData allOrder={allOrders} />
            </div>
        </div>
    );
};

export default MyRentData;