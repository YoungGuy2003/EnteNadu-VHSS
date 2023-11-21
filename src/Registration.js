import React, { useState } from "react";
import "./style.css";

function Registration() {
    const [profileImage, setProfileImage] = useState("/profile.jpg");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const openFileInput = () => {
        document.getElementById("imageUpload").click();
    };

    return (
        <div className="container">
            <div className="en-page-header">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <img
                            src="/logo.png"
                            alt=""
                            className="en-page-header-logo"
                        />
                    </div>
                    <div className="form-group col-md-0">
                        <div
                            id="profile-container"
                            onClick={openFileInput}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                id="profileImage"
                                src={profileImage}
                                className="en-profile-image"
                                alt="Profile"
                            />
                        </div>
                        <input
                            id="imageUpload"
                            type="file"
                            name="profile_photo"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputZip">Pincode</label>
                        <input type="text" className="form-control" id="po" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="text" className="form-control" id="dob" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" className="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="aadhaar_no">Aadhaar No</label>
                    <input type="text" className="form-control" id="aadhaar_no" placeholder="Aadhaar No" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEQ">Education Qualification</label>
                        <select id="inputEQ" className="form-control">
                            <option selected>Choose...</option>
                            <option selected>Choose...</option>
                            <option>Below 10</option>
                            <option>10</option>
                            <option>+2</option>
                            <option>ITI/ITC</option>
                            <option>Deploma</option>
                            <option>Engineering</option>
                            <option>Degree</option>
                            <option>PG</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSS">Skill Sector</label>
                        <select id="inputSS" className="form-control">
                            <option selected>Choose...</option>
                            <option selected>Choose...</option>
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Construction</option>
                        <option>Electrical Appliances Service</option>
                        <option>Two-Wheeler</option>
                        <option>Three-Wheeler</option>
                        <option>Car</option>
                        <option>Other Auto Mobiles</option>
                        <option>Ac / Fridge</option>
                        <option>Tv And Electronics</option>
                        <option>Well</option>
                        <option>Wood Work</option>
                        <option>Kooli Pani</option>
                        <option>Coconut Climbing</option>
                        <option>CCTV</option>
                        <option>Computer</option>
                        <option>Mobile</option>
                        <option>Aluminium</option>
                        <option>Tile</option>
                        <option>Welding</option>
                        <option>Others</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="experience">Experience</label>
                    <input type="text" className="form-control" id="experience" placeholder="Experience" />
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="mycheckbox" value="0" />
                        <label className="form-check-label" htmlFor="mycheckbox">
                            Run a Firm
                        </label>
                    </div>
                </div>

                <div id="mycheckboxdiv" style={{ display: 'none' }}>
                    <div className="form-group">
                        <label htmlFor="name_firm">Name of Firm</label>
                        <input type="text" className="form-control" id="name_firm" placeholder="Name of Firm" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" className="form-control" id="phone" placeholder="Phone" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="place">Place</label>
                            <input type="number" className="form-control" id="place" placeholder="Place" />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="municipality_panchayath">Municipality/Panchayath</label>
                        <input type="text" className="form-control" id="municipality_panchayath" placeholder="Municipality/Panchayath" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ward_no">Ward No</label>
                        <input type="number" className="form-control" id="ward_no" placeholder="Ward No" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="place">Place</label>
                        <input type="number" className="form-control" id="place" placeholder="Place" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="land_mark">Land Mark</label>
                        <input type="email" className="form-control" id="land_mark" placeholder="Land Mark" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group en-upload-file">
                        <label htmlFor="upload_aadhaar">Upload Aadhaar</label>
                        <input type="file" id="myFile" name="filename" />
                    </div>
                </div>

                <div className="en-page-action">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>

            <div className="en-page-footer">
                <span>Powered by <b>Sarvodayam VHSS</b></span>
            </div>
        </div>
    );
}

export default Registration;
