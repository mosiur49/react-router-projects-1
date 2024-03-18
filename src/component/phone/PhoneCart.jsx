import React from 'react';
import Swal from 'sweetalert2';

const PhoneCart = ({phone}) => {
    const {id,name,price,image,description} =phone || {}

    const handleAddFavarate=()=>{
        const AddFavorateItem =[];
        const favarateItem =JSON.parse(localStorage.getItem('favorte'))

        if(!favarateItem){

        AddFavorateItem.push(phone)
        localStorage.setItem('favorte',JSON.stringify(AddFavorateItem))
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        }
        else{

          const isExits =favarateItem.find((phone) =>phone.id==id)

          if(!isExits){

            AddFavorateItem.push(...favarateItem,phone)
            localStorage.setItem('favorte',JSON.stringify(AddFavorateItem))
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
          }
          else{
            Swal.fire({
              icon: "error",
              title: "Sorry ...",
              text: "alrady added!",
              footer: '<a href="#">Why do I have this issue?</a>'
            });

          }
        }
    }
    return (
        <div>
              <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={image}
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <h6
      class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      {name}
    </h6>
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {price}
    </h4>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {description} 
    </p>
    <a href="#" class="inline-block"><button onClick={handleAddFavarate}
        class=" btn btn-success flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Add Favarete<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
          </div>  
        </div>
    );
};

export default PhoneCart;