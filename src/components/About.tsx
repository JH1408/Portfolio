import React from 'react';
import { Section, SubHeading } from './common';
import JHPhoto from '../assets/JH_Photo.png';

const About = ({ ref }: { ref: (node: HTMLDivElement | null) => void }) => {
  return (
    <Section id='about' ref={ref}>
      <SubHeading text='About Me' />
      <div className='sm:float-left sm:pr-[40px] sm:pl-[10px]'>
        <img
          src={JHPhoto}
          alt='Josy Hartig, Software Engineer.'
          className='rounded-full max-h-[150px] max-w-[100%] mx-auto my-[30px] sm:m-0'
        />
      </div>
      <div className='overflow-hidden font-light  mb-[20px] sm:mr-[20px] text-justify'>
        <p className='text-[2rem] font-light mt-0 mx-auto mb-[30px] sm:text-left text-center'>
          Hi, I'm Josy,
        </p>
        <p className='font-medium my-[20px]'>
          a self-taught Software Engineer and Engineering Manager with a passion
          for building user-centric products in fast-paced environments. I have
          a proven track record in leading high-impact projects, scaling teams,
          and collaborating closely with Product Managers and Designers to ship
          products people actually enjoy using.
        </p>
        <p className='my-[20px]'>
          My journey into tech began after working as a pharmacist, where I
          realized I wanted a more flexible lifestyle. A short introductory HTML
          course sparked my love for coding and led me to make the leap into
          software development. Since then, I've built a solid technical
          foundation, evolving from writing my first lines of code to leading
          engineering teams and shipping high-impact projects. My hands-on
          approach and commitment to continuous learning have helped me grow
          quickly in this field. I'm excited to continue building products that
          make a difference while embracing new challenges and opportunities for
          growth.
        </p>
        <p className='my-[20px]'>
          I love working with TypeScript and React, and I care deeply about
          building intuitive user experiences. I'm especially drawn to
          early-stage teams where I can have a tangible impact.
        </p>
        <p className='font-medium my-[20px]'>
          I'm currently open to fully remote roles as a Software Engineer,
          ideally in companies focused on creative tools or productivity
          software.
        </p>
      </div>
    </Section>
  );
};

export default About;
