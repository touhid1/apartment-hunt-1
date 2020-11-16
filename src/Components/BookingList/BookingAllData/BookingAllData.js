import React from 'react';
import '../BookingData/BookingData.css'

const BookingAllData = ({allOrder}) => {
    return (
       <div className='table_container'>
            <table className="table table-borderless">
                <thead>
                    <tr>
                  
                        <th className="co-md-2">Name</th>
                        <th className="co-md-2">Email</th>
                        <th className="co-md-2">Number</th>
                        <th className="co-md-2" >Massage</th>
                        <th className="co-md-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map((allOrder) =>

                            <tr>
                                
                                <td>{allOrder.name}</td>
                                <td>{allOrder.email}</td>
                                <td>{allOrder.service}</td>
                                <td>{allOrder.project}</td>
                                <td><button>Done</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
       </div> 
    );
};

export default BookingAllData;