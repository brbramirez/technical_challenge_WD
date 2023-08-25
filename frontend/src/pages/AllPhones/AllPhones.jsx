import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import IPhone_7 from "../../assets/images/IPhone_7.png";
import Galaxy_S7 from "../../assets/images/Galaxy_S7.png";
import Honor_10 from "../../assets/images/Honor_10.png";
import P10_Lite from "../../assets/images/P10_Lite.jpg";
import Nokia_7 from "../../assets/images/Nokia_7.1.jpg";
import ZenPhone_5 from "../../assets/images/ZenPhone_5.jpg";
import Xiaomi_MI_A2 from "../../assets/images/Xiaomi_MI_A2.jpeg";
import Moto_G6 from "../../assets/images/Moto_G6.png";

const imageList = [IPhone_7, Galaxy_S7, Honor_10, P10_Lite, Nokia_7, ZenPhone_5, Xiaomi_MI_A2, Moto_G6];

const AllPhones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5005/api/phones');
        const data = await response.json();
        setPhones(data);
      } catch (error) {
        console.error('Error fetching phone data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Phones</h1>
  <div className='container d-flex flex-wrap justify-content-center'>
      {phones.map((phone, index) => (
        <div className="card m-4" style={{ width: '18rem' }} key={phone.id}>
          <img
            src={imageList[index % imageList.length]}
            alt={phone.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{phone.name}</h5>
            <p className="card-text">{phone.description}</p>
            <Link className="btn btn-primary" to={`/phones/${phone.id}`}>Show Details</Link>
          </div>
        </div>
      ))}
  </div>
    </div>
  );
};

export default AllPhones;
