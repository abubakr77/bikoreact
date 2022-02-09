import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

function Profile() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setProfile(res.data.profile);
    });
  }, []);

  const profItem = profile.map((item) => {
    return (
      <li className="profile-item" key={item.id}>
        <span>{item.name}</span>
        {item.desc}
      </li>
    );
  });
  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span>My </span>Profile
          </h2>
          <ul className="profile-list">{profItem}</ul>
        </div>

        <div className="skills">
          <h2 className="skills-title">
            Some <span>skills</span>
          </h2>
          <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </p>
          <div className="bar">
            <span className="title">Bootstrap</span>
            <span className="perc">100%</span>
            <div className="parent">
              <span className="sp1"></span>
            </div>
          </div>

          <div className="bar">
            <span className="title">CSS3</span>
            <span className="perc">90%</span>
            <div className="parent">
              <span className="sp2"></span>
            </div>
          </div>

          <div className="bar">
            <span className="title">Photoshop</span>
            <span className="perc">80%</span>
            <div className="parent">
              <span className="sp3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
