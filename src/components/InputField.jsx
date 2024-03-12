import React from 'react'

const InputField = ({ label, }) => {
    return (
        <>
            <div className=' flex flex-col justify-start items-start gap-2'>
                <label className=' text-[#4D4D4D] text-md'>{label}</label>
                <input type="text" className=' w-full h-12
                             border border-[#B9B9B9] p-2 outline-none' />
            </div>
        </>
    )
}

export default InputField