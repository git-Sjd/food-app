import React from 'react'
import img from '../Image/AvatarMaker.png'


function Header() {
    // const logo = await 
    // console.log(logo.default, 'logo')
    return (
        <div className='flex mt-10 space-x-5  border-2-yellow'>
            <div className='w-6 h-6 ml-6'>
                <img src={img} alt="logo1" />
            </div>
            <div className='cursor-pointer' onClick={{ '/About'}}>
                About Us
            </div>
            <div>
                Restro
            </div>
            <div>
                <input></input>
            </div>

        </div >
    )
}

export default Header
