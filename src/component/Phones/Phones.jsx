import PhoneCart from "./PhonesCart";




const Phones = ({phones}) => {
    // console.log(phones)
    
   
    return (
       
         <div className='py-10 '>
            <h3 className='text-2xl text-center'>All Category Phone </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 ">
                {
                   phones?.map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>)
                }
            </div>
            
        </div>
       
       
    );
};

export default Phones;