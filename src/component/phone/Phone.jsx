import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCart from './PhoneCart';

const Phone = () => {

    

    const [phone,setPhone]=useState({})

    const {id} =useParams()
    console.log(id)

    const phones=useLoaderData()
    console.log(phones)

    useEffect( () =>{
        const findPhone =phones?.find(phone =>phone.id ==id)
        setPhone(findPhone)
        console.log(findPhone)
    },[id,phones])
    return (
        <div className='flex items-center justify-center py-20'>
          <PhoneCart phone={phone}></PhoneCart>
        </div>
    );
};

export default Phone;