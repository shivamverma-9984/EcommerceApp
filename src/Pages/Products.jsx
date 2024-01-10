import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Cartslice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [productdata, setproductdata] = useState([]);
  const [fiters, setfiters] = useState(productdata);
  const [page, setpge] = useState(0);
const navigate=useNavigate();

  

  const dispatch = useDispatch();
  let mount = true;

  useEffect(() => {
    const fun = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (mount) {
        setfiters(data);
        setproductdata(data);
      }
    };
    fun();
  }, []);

  const handleAdd = (items) => {
    dispatch(add(items));
   
    toast.success("Item add Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className:" mt-12 "
      
    });
    setTimeout(() => {
      navigate('/cart')
    },2000);
  };
  const filterproduct = (data) => {
    if (data == "all") {
    } else {
      const updatelist = productdata.filter((item) => item.category === data);
      setfiters(updatelist);
    }
  };
  return (
    <div data-aos="fade-down"  data-aos-duration={3000} className="bg-gradient-to-r from-rose-100 to-teal-100 py-24 ">
      <div className="container mx-auto px-4">

       <div  >

       <h2 className="text-3xl mt-[] md:text-4xl uppercase text-black mb-8 font-medium tracking-widest ml-4 text-center ">
          All Product
        </h2>

        <div data-aos="zoom-in"  data-aos-duration={3000} className="grid grid-cols-3  px-2 justify-center p-10  mt-[-40px] md: gap-1 md:grid-cols-5  ml-2 ">
          {" "}
          <button
            className=" text-sm font-semibold md:text-xl bg-white shadow-xl  capitalize md:px-2 md:py-1 md:w-"
            onClick={() => setfiters(productdata)}
          >
            all
          </button>
         
          <button
            className="text-sm  font-semibold md:text-xl  bg-white shadow-xl capitalize md:px-4"
            onClick={() => filterproduct("women's clothing")}
          >
            women's
          </button>
          <button
            className=" text-sm font-semibold md:text-xl bg-white shadow-xl capitalize md:px-4"
            onClick={() => filterproduct("men's clothing")}
          >
            men's
          </button>
          <button
            className=" text-sm font-semibold md:text-xl capitalize bg-white shadow-xl md:px-2"
            onClick={() => filterproduct("electronics")}
          >
            electronics
          </button>
          <button
            className="text-sm  font-semibold md:text-xl bg-white shadow-xl capitalize md:px-4"
            onClick={() => filterproduct("jewelery")}
          >
            jewelery
          </button>
        </div>

        {productdata.length > 0 ? (
          <div  className="grid grid-cols-1  md:grid-cols-4 gap-10 ml-3">
            {fiters.map((items, idx) => {
              return (
                <div
                
                  className="bg-white rounded-lg shadow-lg p-2 "
                  key={idx}
                >
                  <Link  to={`/products/${items.id}`}className="relative overflow-hidden">
                    <img
                      className="object-cover w-100 h-40 mx-auto "
                      src={items.image}
                      alt="Product"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <button className="bg-gray-100 text-gray-900 py-1  px-2 rounded-full font-bold h-8 w-8 hover:bg-gray-300">
                        <GoLinkExternal />
                      </button> */}
                    </div>
                  </Link>
                  <h3 className="text-xl font-bold   py-1t  gray-900 mt-4">
                    {items.title.slice(0, 20)}
                  </h3>
                  <p className="text-gray-500 text-[10px] mt-2">
                    {items.descriptions}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">
                      ${items.price}
                    </span>
                    <button
                      className="bg-gray-900 text-[12px] text-white py-1  px-2 rounded-full font-semibold hover:bg-gray-800"
                      onClick={() => handleAdd(items)}
                    >
                      Add to cart
                    </button>
                  </div>
                  <ToastContainer />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto mt-10 border-gray-300 h-24 w-24 animate-spin rounded-full border-8 border-t-blue-600" />
        )}
{/* {
    productdata.length>0 ? (<div className=""> 
      <span>prev</span>
      {
        [... Array(productdata.length/8)].map((_,i)=>{
          return <span key={i}>{i+1}</span>

        })
      }
      <span> next</span>

       </div>):<div>bg-white shadow-xl</div>
} */}
      </div>
      </div>
    </div>
  );
};

export default Products;
