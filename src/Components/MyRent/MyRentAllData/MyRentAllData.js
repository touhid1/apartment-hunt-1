import React from 'react';

const MyRentAllData = ({allOrder}) => {
    return (
       <div className='table_container'>
            <table className="table table-borderless">
                <thead>
                    <tr>
                  
                        <th className="co-md-2">Name</th>
                        <th className="co-md-2">Price</th>
                        <th className="co-md-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map((allOrder) =>

                            <tr>
                                
                                <td>Md Sajjat Hossain</td>
                                <td>$120</td>
                                <td><button>View Details</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
       </div> 
    );
};

export default MyRentAllData;