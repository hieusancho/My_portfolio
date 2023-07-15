import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';


//39
const About = () => {
  const [ref, inView]= useInView({
    threshold: 0.5,

  })
  return <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
              <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                {/* image */}
                <motion.div 
                            variants={fadeIn('right',0.3 )}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once : false, amount:0.3}} 
                            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>

                </motion.div>

                {/* text */}
                <motion.div variants={fadeIn('left',0.5 )}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once : false, amount:0.3}} 
                            className='flex-1'
                >
                  <h2 className='h2 text-accent'>About me. </h2>
                  <h3 className='h3 mb-4'>I'm a Front-end Developer </h3>
                  <h4 className='h4 mb-8'>
                    Hello, my name is Nguyen Hieu . I am a Front-End developer and I have been involved in various IT projects 
                    during my tenure.  I have developed a strong understanding of various technologies and their practical applications.
                    I have been involved in software development projects where I was responsible for designing, developing 
                    and testing software applications. I have also worked on database management projects where I was responsible for
                    designing, developing, and maintaining databases. Additionally, I have experience working with cloud technologies 
                    such as AWS and Azure, where I have assisted in the deployment and management of cloud-based applications. 
                    Skills In addition to my practical experience, I have developed several technical and non-technical skills that are
                    essential for success in the IT industry. Some of the key technical skills I have include proficiency in programming
                    languages such as Java, and SQL. I am also knowledgeable in front-end development technologies such as 
                    HTML, CSS, and JavaScript. Furthermore, I have excellent problem-solving skills, strong attention to detail, 
                    and the ability to work well in a team environment. I have also developed strong communication skills, both written 
                    and verbal, that enable me to collaborate effectively with stakeholders and clients.
                  </h4>

                  {/* stats */}
                  <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                    <div>
                      <div >
                        <p >Less 1 year working</p>
                        
                      </div>
                      <div className='text-[40px] font-tertiary text-gradient mb-2 '>Experience</div>
                    </div>

                    <div>
                      <div >
                        <p >3 People</p>
                        
                      </div>
                      <div className='text-[40px] font-tertiary text-gradient mb-2 '>Clients</div>
                    </div>

                    <div>
                      <div >
                        <p >5 completed</p>
                        
                      </div>
                      <div className='text-[40px] font-tertiary text-gradient mb-2 '>Projects</div>
                    </div>


                  </div>

                  <div className='flex gap-x-8 items-center'>
                    <a href='#contact' className='text-gradient btn-link'> Contact me </a>
                    <a href='#' className='text-gradient btn-link'>
                      My Portfolio
                    </a>
                  </div>

                </motion.div>


              </div>
            </div>
        </section>;
};

export default About;
