import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Cartslice";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cart);
  const total = items.reduce((a, b) => a + b.price, 0);
 const totalprice=total+4;
  console.log(items.length);

  const handleremove=(id)=>{
    dispatch(remove(id));
    
    toast.success("Item remove Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className:"z-9"
    })
  }
  return (
    <>
     {
      items.length? <div className=" bg-gradient-to-r from-rose-100 to-teal-100 pt-2   ">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mt-20">
        <div className="rounded-lg md:w-2/3">
          {items.map((item) => {
            return (
              <div className="justify-between mb-4 rounded-lg bg-white p-6 shadow-md flex sm:justify-start">
                <img
                  src={item.image}
                  alt="product-image"
                  className=" rounded-lg h-16 w-16 md:h-20 md:w-20"
                />
                <div className=" ml-4 flex w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className=" text-sm md:text-lg font-bold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      ${item.price}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    {/* <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value="4"
                        min="1"
                      />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div> */}
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">259.000</p>
                      <button
                        className=" px-3 rounded-md pb-1"
                        onClick={() => handleremove(item.id)}
                      >
                         <AiOutlineDelete/>
                      </button>
                      <ToastContainer/>
                    </div>
                  

                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mb-2 h-full rounded-lg border bg-white px-3 py-2 shadow-md md:mt-0 md:w-1/3 md:mb-4">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 -mt-2 md:mt-0">Shipping</p>
          <p className="text-gray-700 -mt-2 md:mt-0">$4.00</p>
        </div>
        <hr className="my-2 border-gray-500" />
        <div className="flex justify-between">
          <p className="text-lg font-bold -mt-2">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold  -mt-2 md:mt-0">${totalprice}</p>
            <p className="text-sm text-gray-700 mb-4 -mt-2">Including tax</p>
          </div>
        </div>
        <Link to='/Orderpage' className=" rounded-md px-32 py-1   md:px-28
          bg-blue-500  font-medium text-blue-50 hover:bg-blue-600" >
          Check out
        </Link>
      </div>
      </div>
    </div>:<div className="pt-36 pb-56 md:pb-0 bg-gradient-to-r from-rose-100 to-teal-100">
    <div className=" mx-[110px] md:mx-[500px]   -mb-48 md:mb-0">
      
    <img src="https://cdn-icons-png.flaticon.com/128/2203/2203239.png" alt="" className="h-36 w-36" />
    <div className="mt-10">


    <h1 className="font-bold text-xl md:text-2xl">Hey, it feels so light!</h1>
    <h2 className="text-lg font-semibold md:px-6 md:py-1 -mb-3">Please add somes items</h2>
   <button className="bg-green-300 m-4 text-sm px-6  mx-10 md:mx-14 font-semibold py-1 " onClick={()=>navigate('/product')}>Add items</button> 

    </div>
      </div>      
      
       </div>
     }
    </>
  );
};

export default Cart;
