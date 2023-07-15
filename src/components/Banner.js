import React from 'react';
import Image from '../assets/avatar.svg';
//icons
import {FaGithub,FaYoutube, FaDribbble} from 'react-icons/fa';

//type animation
import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';



const Banner = () => {
  // 1vh=9px, 1rem=16px
  //sd motion để chữ nổi lên

  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto '>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

                  {/* Text */}
                  <div className='flex-1 text-center font-secondary lg:text-left'>

                    {/* fadeIn: chữ nó nổi lên từ dưới */}
                    <motion.h1 variants={fadeIn('up',0.3 )}
                               initial="hidden"
                               whileInView={'show'}
                               viewport={{once : false, amount:0.7}} 
                               className='text-[40px] font-bold leading-[0.8] lg:text-[80px] '>
                      HIẾU <span>NGUYỄN</span>
                    </motion.h1>

                    <motion.div 
                                variants={fadeIn('up',0.4 )}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once : false, amount:0.7}} 
                                className='mb-6 text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>

                        <span className='text-white mr-4'> I am a</span>
                        <TypeAnimation sequence={[
                          'Frontend Developer',
                          2000,
                          
                        ]}
                        speed={50}
                        className='text-accent'
                        wrapper='span'
                        repeat={Infinity}
                        />
                    </motion.div>
                  

                    <motion.div 
                                variants={fadeIn('up',0.6 )}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once : false, amount:0.7}} 
                                className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                      <a href='#contact' className='text-gradient btn-link'>Contact me </a>
                      {/* btn: bo thành 1 button */}

                      <a href="#" className='text-gradient btn-link'> 
                        My Portfolio
                      </a>

                    </motion.div>
                  
                  {/* socials */}
                      <motion.div 
                                  variants={fadeIn('up',0.7 )}
                                  initial="hidden"
                                  whileInView={'show'}
                                  viewport={{once : false, amount:0.7}} 
                                  className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                        <a href='https://www.youtube.com/'>
                          <FaYoutube/>
                        </a>
                        <a href='https://github.com/hieusancho'>
                          <FaGithub/>
                        </a>
                        <a href='#'>
                          <FaDribbble/>
                        </a>
                      </motion.div>

                  </div>

                  {/* Image */}
                  <motion.div 
                              variants={fadeIn('down',0.5 )}
                              initial="hidden"
                              whileInView={'show'}
                              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mb-25'>
                    <img src={Image} alt=""/>
                  </motion.div>

                </div>
            </div>
        </section>;
};

export default Banner;
