import React from 'react';
import { Section, SubHeading } from './common';
import Mora01 from '../assets/Mora_01.png';
import Mora04 from '../assets/Mora_04.png';

const Projects = ({ ref }: { ref: (node: HTMLDivElement | null) => void }) => {
  return (
    <Section id='projects' className='bg-lightblue' ref={ref}>
      <SubHeading text='Personal Projects' />
      <div className='flex flex-col md:flex-row gap-3 md:gap-10 xl:gap-14 px-2 md:px-6 xl:px-10 pt-1 md:pt-3 xl:pt-4'>
        <div className='flex-1'>
          <div className='relative w-[350px] h-[280px] mx-auto my-[30px] sm:m-0'>
            <img
              src={Mora01}
              alt='Mora app screenshot 1 - home page'
              className='absolute top-0 left-0 rounded-lg w-[280px] h-auto object-contain bg-gray-50 drop-shadow-xl z-10'
            />
            <img
              src={Mora04}
              alt='Mora app screenshot 4 - study mode'
              className='absolute bottom-0 right-0 rounded-lg w-[280px] h-auto object-contain bg-gray-50 drop-shadow-xl z-20'
            />
          </div>
        </div>

        <div className='overflow-hidden font-light mb-[20px] sm:mr-[20px] text-justify'>
          <h3 className='text-[2rem] mt-0 mx-auto mb-[30px] sm:text-left text-center text-darkblue'>
            Mora
          </h3>

          <a
            href='https://usemora.co'
            target='_blank'
            rel='noopener noreferrer'
            className='text-darkblue hover:text-mediumdarkblue transition-colors duration-200 block mb-[20px] underline'
          >
            usemora.co
          </a>

          <p className='my-[20px]'>
            A simple, modern flashcard app I built for language learners,
            especially those studying new scripts or tonal languages like Thai,
            who need something more flexible than traditional text-only tools.
          </p>

          <div className='my-[20px]'>
            <h4 className='font-medium text-darkblue mb-[10px]'>
              Key Features
            </h4>
            <ul className='space-y-[10px]'>
              <li className='flex items-start'>
                • Handwriting support for practicing non-Latin scripts and
                phonetic spelling.
              </li>
              <li className='flex items-start'>
                • Native browser text to speech.
              </li>
              <li className='flex items-start'>
                • Spaced repetition with front-to-back and back-to-front study
                modes to maximize retention.
              </li>
            </ul>
          </div>

          <div className='my-[20px]'>
            <h4 className='font-medium text-darkblue mb-[10px]'>Tech Stack</h4>
            <p>
              TypeScript, Next.js, Tailwind, TanStack Query, Prisma, PostgreSQL,
              Vercel, Neon.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
