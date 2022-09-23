import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/`).then((res) => {
      const getUser = window.sessionStorage.getItem("id") || "Sis0";
      const filterUser = res.data.filter((user) => user.username === getUser);

      setActiveUser(filterUser);
    });
  }, []);

  return (
    <ul>
      {activeUser.map((user) => (
        <div key={user.id}>
          <form className="profile-form">
            <h1 className="h1-profile">Profile</h1>

            <div className="group-profile">
              <label className="label-profile">Full Name</label>
              <input value={user.fullName} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Date Of Birth</label>
              <input
                value={new Date(user.dateOfBirth).toLocaleDateString()}
              ></input>
            </div>

            <div className="group-profile">
              <label className="label-profile">Email Address</label>
              <input value={user.email} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Username</label>
              <input value={user.username} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Phone Number</label>
              <input value={user.phoneNumber} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Role</label>
              <input value={user.role} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Building Name Or Number</label>
              <input value={user.address.buildingNameOrNumber} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Street Name</label>
              <input value={user.address.streetName} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Address Line 2</label>
              <input value={user.address.addressLine2} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Post Code</label>
              <input value={user.address.postcode} />
            </div>

            <div className="group-profile">
              <label className="label-profile">City</label>
              <input value={user.address.city} />
            </div>

            <div className="group-profile">
              <label className="label-profile">Bookings</label>
              <input value={user.bookings} />
            </div>

            {/* <button>Update</button> */}
          </form>
        </div>
      ))}
    </ul>
  );
};

export default Profile;