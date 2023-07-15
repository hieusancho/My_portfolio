import React from 'react';
//images
import Logo from '../assets/logo.svg';


const Header = () => {
  return <header className='py-8'>
            <div className='container mx-auto'>
              <div className='flex justify-between items-center'>
                {/* Logo */}
                <a href="#" className='mb-20'>
                  <img src="" alt=""/>
                </a>

                {/* button */}
                <button className='btn btn-sm'>Work with me</button>
              </div>
            </div>
        </header>;
};

export default Header;
