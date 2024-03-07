import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=' flex flex-col gap-5 bg-[#614605] py-10 md:py-4'>

        {/* MOBILE */}

        <div className=' flex flex-col gap-5 md:hidden px-3'>

          <div className=' flex justify-start items-center gap-3 text-white'>
            <h3 className=' capitalize'>Follow us:</h3>
            <div className=' flex gap-3'>
              <div className=' rounded-[50%] p-2 bg-white'>
                <FaFacebookF className='text-primaryColor' />
              </div>
              <div className=' rounded-[50%] p-2 bg-white'>
                <FaTwitter className='text-primaryColor' />
              </div>
              <div className=' rounded-[50%] p-2 bg-white'>
                <FaInstagram className='text-primaryColor' />
              </div>
            </div>
          </div>

          <div className=' flex flex-col gap-3'>

            <div className=' flex justify-between text-white'>
              <p className=' capitalize text-[19px]'>get in touch with us</p>
              <span className=' text-4xl'>+</span>
            </div>

            <div className=' flex justify-between text-white'>
              <p className=' capitalize text-[19px]'>information</p>
              <span className=' text-4xl'>+</span>
            </div>

            <div className=' flex justify-between text-white'>
              <p className=' capitalize text-[19px]'>our resources</p>
              <span className=' text-4xl'>+</span>
            </div>

            <div className=' flex justify-between text-white'>
              <p className=' capitalize text-[19px]'>about us</p>
            </div>

          </div>

        </div>


        {/* DESKTOP */}

        {/* first div */}
        <div className=' hidden md:flex gap-40 text-white pl-16 pt-10'>

          {/* 1st */}
          <div className=' flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='text-lg uppercase font-semibold'>get in  touch with us</h3>
                <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
              </div>
              <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
                <p>Phone: +394304095209</p>
                <p>support@company.com</p>
              </div>
            </div>
            <div className=' flex justify-start items-center gap-3 ml-[-20px]'>
              <h3 className=' capitalize'>follow us:</h3>
              <div className=' flex gap-3'>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <FaFacebookF className='text-primaryColor' />
                </div>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <FaTwitter className='text-primaryColor' />
                </div>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <FaInstagram className='text-primaryColor' />
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
              <p>about us</p>
              <p>our products</p>
              <p>terms & conditions</p>
              <p>privacy policy</p>
            </div>
          </div>

          {/* 3rd */}
          <div className=' flex flex-col gap-3'>
            <div>
              <h3 className='text-lg uppercase font-semibold'>our resources</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
              <p>plan and pricing</p>
              <p>client business</p>
              <p>sales & purchase</p>
              <p>product quality</p>
            </div>
          </div>

        </div>

        {/* second div (same for both) */}
        <div className='flex flex-col gap-3 justify-center items-start'>
          <hr className=' w-full text-[#707070]' />
          <div className=' pl-10'>
            <h3 className=' capitalize text-lg text-[#E5E5E5]'>designed by WebCraftio</h3>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer