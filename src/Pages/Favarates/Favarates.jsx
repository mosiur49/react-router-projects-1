import React, { useEffect, useState } from 'react';
import PhoneCart from '../../component/phone/PhoneCart';
import { button } from '@material-tailwind/react';

const Favarates = ({phone}) => {
    const {price} =phone || {}
    const [favarate,setFavorate] =useState([])
    const [nofound,setNoFound] =useState(false)
    const [totalPrice,setTotalPrice] =useState(0)
    useEffect(()=>{
        const favarateItem =JSON.parse(localStorage.getItem('favorte'))
        if(favarateItem){
            setFavorate(favarateItem)
            const total =favarateItem.reduce((preValue,curentvalue)=>preValue + curentvalue.price,0) 
            console.log(total)
            setTotalPrice(total)
        }
        else{
            setNoFound("No data Found")
        }
        console.log(favarate)
    } ,[])
    const handleRemove=()=>{
        localStorage.clear()
        setFavorate([])
        setNoFound("No data Found")
    }
    return (
        <div>
           
           {nofound ? <p className='flex justify-center items-center h-[80vh] text-4xl text-red-600'>{nofound}</p> :
            <div>
            {favarate.length >0 && <button onClick={handleRemove} className='btn btn-error  '>All data Delete</button>}
            <h2>Total price{price}</h2>
                <div className='grid justify-center items-center py-10 px10 gap-10'>
                    {favarate.map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>)}
                </div>
            </div>}

        </div>
    );
};

export default Favarates;