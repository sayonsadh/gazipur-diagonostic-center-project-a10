import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceName } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceName]);

  const service = services.filter(
    (serviceDetails) => serviceName === serviceDetails.Name
  );

  return (
    <div className="mt-5 mb-5">
      <h2>You select {serviceName}</h2>
      <div className="border border-primary rounded-3 border-2 w-50 mx-auto">
        <img className="p-2" src={service[0]?.image} alt="" />
        <p className="m-2">{service[0]?.Description}</p>
        <h6>Price:- {service[0]?.price}</h6>
        <button className="btn btn-success mb-2">Confirm</button>
      </div>
    </div>
  );
};

export default Booking;
