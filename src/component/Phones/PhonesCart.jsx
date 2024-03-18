import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import React from 'react';
import { Link } from "react-router-dom";

const PhoneCart = ({phone}) => {
    const {id,name,price,image,description} =phone || {}
    return (
        <div>
           
 

  
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/phones/${id}`}>
        <Button
          ripple={false}
          fullWidth={true}
          className="btn btn-active text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          See Details
        </Button>
        </Link>
      </CardFooter>
    </Card>
  

        </div>
    );
};

export default PhoneCart;