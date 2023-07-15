import React from 'react';

// import {motion} from 'framer-motion';

// import {fadeIn} from '../variants';

// //img
// import Img1 from '../assets/portfolio-img1.png';
// import Img2 from '../assets/portfolio-img2.png';
// import Img3 from '../assets/portfolio-img3.png';

import '../work.css';


import portfolioItem1 from '../assets/Shopee.png';
import portfolioItem2 from '../assets/Furniture Shop.png';
import portfolioItem3 from '../assets/Porfolio.png';
import portfolioItem4 from '../assets/New year.png';
import portfolioItem5 from '../assets/Music.png';

// Import Swiper React components
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { Pagination, Navigation } from 'swiper';


const data = [
  {
      id: 1,
      image: portfolioItem1,
      title: 'Clone Shopee',
      github: 'https://github.com/hieusancho/Shopee',
      demo: 'https://hieusancho.github.io/Shopee/',
  },
  {
      id: 2,
      image: portfolioItem2,
      title: 'Furniture Shop',
      github: 'https://github.com/hieusancho/Furniture-Web',
      demo: 'https://hieusancho.github.io/Furniture-Web/',
  },
  {
      id: 3,
      image: portfolioItem3,
      title: 'My Portfolio',
      github: '',
      demo: '',
  },
  {
      id: 4,
      image: portfolioItem4,
      title: 'COUNTDOWN TO NEW YEAR',
      github: 'https://github.com/hieusancho/happynewyear',
      demo: 'https://hieusancho.github.io/happynewyear/',
  },
  {
      id: 5,
      image: portfolioItem5,
      title: 'Music Play',
      github: 'https://github.com/hieusancho/MP3',
      demo: 'https://hieusancho.github.io/MP3/',
  },
];


const Work = () => {

  // return <section className='section' id='work'>
  //           <div className='container mx-auto '>
  //               <div className='flex flex-col lg:flex-row gap-x-10'>

  //                 <motion.div 
  //                             variants={fadeIn('right',0.3 )}
  //                             initial="hidden"
  //                             whileInView={'show'}
  //                             viewport={{once : false, amount:0.3}} 
  //                             className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>

  //                   {/* text */}
  //                   <div className=''>
  //                     <h2 className='h2 leading-tight text-accent'>
  //                       My Recent <br/>
  //                       Work
  //                     </h2>
  //                     <p className='max-w-sm mb-16 '>My Portfolio </p>

  //                     <button className='btn btn-sm'>View all projects</button>
  //                   </div>


  //                   {/* image */}
  //                   <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
  //                     {/* overlay */}
  //                       <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '>
                          
  //                       </div>

  //                       {/* img */}
  //                       <img className='group-hover:scale-125 transition-all duration-500 ' 
  //                            src={Img1} 
  //                            alt=""
  //                       />

  //                       <div className='absolute -bottom-full left-12 group-hover:bottom-24 
  //                                       transition-all duration-500 z-50 '>
  //                                         <span className='text-gradient '>UI/UX design</span>
  //                       </div>

  //                       <div className='absolute -bottom-full left-12 group-hover:bottom-14 
  //                                       transition-all duration-700 z-50'>
  //                         <span className='text-3xl text-white'>Furniture Shop</span>
  //                       </div>
  //                   </div>

  //                 </motion.div>

                 
  //                 <motion.div 
  //                              variants={fadeIn('left',0.2 )}
  //                              initial="hidden"
  //                              whileInView={'show'}
  //                              viewport={{once : false, amount:0.3}} 
  //                             className='flex-1 flex flex-col gap-y-10 '>
  //                   {/* img */}

  //                   <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
  //                     {/* overlay */}
  //                       <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '>
                          
  //                       </div>

  //                       {/* img */}
  //                       <img className='group-hover:scale-125 transition-all duration-500 ' 
  //                            src={Img2} 
  //                            alt=""
  //                       />

  //                       <div className='absolute -bottom-full left-12 group-hover:bottom-24 
  //                                       transition-all duration-500 z-50 '>
  //                                         <span className='text-gradient '>UI/UX design</span>
  //                       </div>

  //                       <div className='absolute -bottom-full left-12 group-hover:bottom-14 
  //                                       transition-all duration-700 z-50'>
  //                         <span className='text-3xl text-white'>Project Title</span>
  //                       </div>
  //                   </div>


  //                   <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
  //                     {/* overlay */}
  //                       <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '>
                          
  //                       </div>

  //                       {/* img */}
  //                       <img className='group-hover:scale-125 transition-all duration-500 ' 
  //                            src={Img3} 
  //                            alt=""
  //                       />

  //                       <div className='absolute -bottom-full left-12 group-hover:bottom-24 
  //                                       transition-all duration-500 z-50 '>
  //                                         <span className='text-gradient '>UI/UX design</span>
  //                       </div>

  //                       <div className='absolute -bottom-full left-12 group-hover:bottom-14 
  //                                       transition-all duration-700 z-50'>
  //                         <span className='text-3xl text-white'>Project Title</span>
  //                       </div>
  //                   </div>

  //                 </motion.div>


  //               </div>
  //           </div>
  //       </section>;

  return (
    <section id="work">
        <h5 className='h5 text-accent mb-6'>My Recent Work</h5>
        <h2 className='h2 text-accent mb-16'>Portfolio</h2>

        
        <Swiper className="container work__container" grabCursor={true} breakpoints={{
            320:{
            slidesPerView: 2,
            spaceBetween: 18
            },

            768:{
            slidesPerView: 3,
            spaceBetween: 20
            },
        }}
        // modules={[Pagination, Navigation]} 
        // pagination ={{clickable:true}}
        // navigation={true}

        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={item.id} className="work__item">
                        <div className="work__item-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="work__item-cta">
                            <a rel="noreferrer" target="_blank" href={item.github} className="text-gradient btn-link btn-sm">
                                Github
                            </a>
                            <a
                                rel="noreferrer"
                                href={item.demo}
                                target="_blank"
                                className="text-gradient btn-link btn-sm"
                            >
                                LiveDemo
                            </a>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
);

};

export default Work;
