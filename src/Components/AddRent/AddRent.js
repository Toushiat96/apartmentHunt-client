import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AddRent.css";

const AddRent = () => {
    const [info , setInfo] = useState({});
    console.log(info);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    
const handleHome = () => {
    const formData = new FormData()
    formData.append('serviceTitle', info.serviceTitle);
    formData.append('location', info.location);
    formData.append('price', info.price);
    formData.append('bathroom', info.bathroom);
    formData.append('bedroom', info.bedroom);

    fetch('http://localhost:5000/addHome', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      alert("submitted")
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}
    return (
        <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-12">
                <div className="d-flex justify-content-between">
                    <h4 className="mt-4 py-3 ml-4">Add Rent House</h4>
                    <h6 className="mt-5  mx-5 py-3">Sufi Ahmed</h6>
                </div>
                <div
                    className="bg-light py-2 rounded "
                    style={{ height: "80vh" }}
                >
                    <form  onSubmit={handleHome}>
                        <div
                            className="row    p-4 mx-5 mt-5 bg-white "
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="col-xl-6 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Service Title
                                    </label>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        name="serviceTitle"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        name="location"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        No of Bathroom
                                    </label>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        name="bathroom"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-5 col-sm-12 offset-md-1 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        name="price"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        No of Bedroom
                                    </label>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        name="bedroom"
                                        className="form-control "
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="form-group">
                                    <p className="font-weight-bold mb-2">
                                        Thumbnail
                                    </p>
                                    <label className="upload-btn">
                                        <input
                                            type="file"
                                            className="form-control-file"
                                        />
                                        <FontAwesomeIcon
                                            icon={faCloudUploadAlt}
                                            className="mr-2"
                                        />
                                        Upload Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-success submit-btn offset-md-10  my-3"
                           
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRent;