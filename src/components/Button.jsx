import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 outline-1 outline-secondary outline-offset-0 font-poppins font-medium text-[18px] hover:bg-secondary hover:text-primary ease-in duration-300 text-white outline-none ${styles} rounded-[10px] `}>
      Get Started
    </button>
  )
}

export default Button