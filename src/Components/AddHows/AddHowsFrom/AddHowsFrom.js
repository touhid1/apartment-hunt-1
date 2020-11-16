import React from 'react';

const AddHowsFrom = () => {
    return (
        <div className='addHows_from_wrap'>
            <div className="col-md-12 pr-5 addHows_container">
                <form>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="name" placeholder="Enter Title" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="service" placeholder="Price" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="name" placeholder="Location" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="service" placeholder="No Bedroom" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" name="name" placeholder="No bathroom" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                    </div>

                    <button type="submit" className="btn button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddHowsFrom;