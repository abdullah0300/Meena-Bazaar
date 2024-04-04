import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMinus } from "react-icons/fa";
import { FaPlus, FaTiktok } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: "get in touch with us",
    sublinks: ["Phone: +44 7403 113223", "Support@meenabazaarbytaj.com"]
  },
  {
    id: 2,
    title: "information",
    sublinks: ["About Us", "Our Collections", "Terms & Conditions"]
  },
  // {
  //   id: 3,
  //   title: "our resources",
  //   sublinks: ["Plan And Pricing", "Client Business", "Sales & Purchase", "Product Quality"]
  // },
]

const Footer = () => {
  const [isOpen, setIsOpen] = useState(new Array(data.length).fill(false));
  const handleOpen = (index) => {
    setIsOpen((prevState) => {
      const newOpenIndexes = prevState.map((item, i) =>
        i === index ? !prevState[i] : item
      );
      return newOpenIndexes;
    });
  };

  return (
    <>
      <div className=' flex flex-col gap-5 bg-[#614605] py-10 md:py-4'>

        {/* MOBILE */}

        <div className=' flex flex-col gap-5 md:hidden px-3'>

          <div className=' flex justify-start items-center gap-3 text-white'>
            <h3 className=' capitalize'>follow us:</h3>
            <div className=' flex gap-3'>
              <div className=' rounded-[50%] p-2 bg-white'>
                <a href='https://www.facebook.com/meenabazaarbytaj/' target='_blank'> <FaFacebookF className='text-primaryColor' /></a>
              </div>
              {/* <div className=' rounded-[50%] p-2 bg-white'>
                <FaTwitter className='text-primaryColor' />
              </div> */}
              <a href='https://www.instagram.com/meenabazaarbytaj/' target='_blank'> <div className=' rounded-[50%] p-2 bg-white'>
                <FaInstagram className='text-primaryColor' />
              </div></a>
              <a href='https://www.tiktok.com/@meenabazaar_jewells?_t=8l9FGcTCbp3&_r=1' target='_blank'> <div className=' rounded-[50%] p-2 bg-white'>
                <FaTiktok className='text-primaryColor' />
              </div></a>
            </div>
          </div>

          <div className=' flex flex-col gap-3'>

            {
              data.map((item, i) => (
                <>
                  <div className=' flex justify-between text-[#E5E5E5]' onClick={() => {
                    handleOpen(i)
                  }}>
                    <p className=' capitalize text-[19px]'>{item.title}</p>
                    {isOpen[i] ? (
                      <FaMinus
                        className='text-2xl text-[#E5E5E5]'
                      />
                    ) : (
                      <FaPlus
                        className='text-2xl text-[#E5E5E5]'
                      />
                    )}
                  </div>
                  <div>
                    <ul className={` flex flex-col gap-2 text-[#E5E5E5] ${isOpen[i]
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                      }`}>
                      <Link to='./aboutus'>   <p>About us</p></Link>
                      <Link to="/Shipping"><p>Shipping Policy</p></Link>
                      <Link to="/ReturnPolicy"><p>Returns Policy</p></Link>
                    </ul>
                  </div>
                </>
              ))
            }

            {/* <div className=' flex justify-between text-white'>
              <p className=' capitalize text-[19px]'>about us</p>
            </div> */}

          </div>

        </div>


        {/* DESKTOP */}

        {/* first div */}
        <div className=' hidden md:flex gap-40 text-white pl-16 pt-10'>
          <div className=' flex flex-col gap-3'>
            {/* <div>
              <h3 className='text-lg uppercase font-semibold'>Our resources</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
              <p>plan and pricing</p>
              <p>client business</p>
              <p>sales & purchase</p>
              <p>product quality</p>
            </div> */}
            <img className='h-[10rem] rounded' src='https://ik.imagekit.io/mctozv7td/WhatsApp%20Image%202024-02-28%20at%2002.49.09_5c1c6572.jpg?updatedAt=1709070883137'></img>
          </div>
          {/* 1st */}
          <div className=' flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='text-lg uppercase font-semibold'>get in  touch with us</h3>
                <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
              </div>
              <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
                <p>Phone: +44 7403 113223</p>
                <p>support@meenabazaarbytaj.com</p>
              </div>
            </div>
            <div className=' flex justify-start items-center gap-3 ml-[-20px]'>
              <h3 className=' capitalize'>follow us:</h3>
              <div className=' flex gap-3'>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <a href='https://www.facebook.com/meenabazaarbytaj/' target='_blank'>  <FaFacebookF className='text-primaryColor' /></a>
                </div>
                {/* <div className=' rounded-[50%] p-2 bg-white'>
                  <a> <FaTwitter className='text-primaryColor' /></a>
                </div> */}
                <div className=' rounded-[50%] p-2 bg-white'>
                  <a href='https://www.instagram.com/meenabazaarbytaj/' target='_blank'> <FaInstagram className='text-primaryColor' /></a>
                </div>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <a href='https://www.tiktok.com/@meenabazaar_jewells?_t=8l9FGcTCbp3&_r=1' target='_blank'> <FaTiktok className='text-primaryColor' /></a>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className=' flex flex-col gap-3'>
            <div>
              <h3 className='text-lg uppercase font-semibold'>information</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
              <Link to='./aboutus'>   <p>about us</p></Link>
              <Link to="/Shipping"><p>Shipping Policy</p></Link>
              <Link to="/ReturnPolicy"><p>Returns Policy</p></Link>
              {/* <p>privacy policy</p> */}
            </div>
          </div>

          {/* 3rd */}
          <div className=' flex flex-col gap-3'>
            {/* <div>
              <h3 className='text-lg uppercase font-semibold'>Our resources</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
              <p>plan and pricing</p>
              <p>client business</p>
              <p>sales & purchase</p>
              <p>product quality</p>
            </div> */}
            {/* <img className='h-[10rem] rounded-pill' src='https://ik.imagekit.io/mctozv7td/WhatsApp%20Image%202024-02-28%20at%2002.49.09_5c1c6572.jpg?updatedAt=1709070883137'></img> */}
          </div>

        </div>

        {/* second div (same for both) */}
        <div className='flex flex-col gap-3 justify-center items-center'>
          <hr className='w-full text-[#707070]' />
          <div className='text-center'>
            <h3 className='capitalize text-lg text-[#E5E5E5]'>
              Designed by <a href='https://www.webcraftio.com/' className='text-[#E5E5E5]'>WebCraftio</a>
            </h3>
          </div>
        </div>


      </div>
    </>
  )
}

export default Footer