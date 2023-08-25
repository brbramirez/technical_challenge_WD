import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const PhoneDetails = () => {
  const [phone, setPhone] = useState({}); 
  const { phoneId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5005/api/phones/${phoneId}`);
        const data = await response.json();
        setPhone(data);
      } catch (error) {
        console.error('Error fetching phone data:', error);
      }
    };

    fetchData();
  }, [phoneId]); 
  
  let imgIndex = phone.id;

  return (
    <div className='container d-flex flex-column justify-center my-5'>
      <h2>{phone.name}</h2>
      <img src={imageList[imgIndex]} alt={phone.name} />
      <p className='fs-2 text-center'>{phone.description}</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default PhoneDetails;