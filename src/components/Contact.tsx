import React, { useRef, useState } from 'react';
import { SubHeading, Section } from './common';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Spinner from './Spinner';

const templateId = 'template_gxofpsd';
const serviceId = 'service_7p463hk';
const publicKey = 'j6S7S3Fku2bBASQl3';

const buttonHoverStyle =
  'hover:bg-white hover:border-2 hover:text-mediumdarkblue';

const Contact = ({ ref }: { ref: (node: HTMLDivElement | null) => void }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (form.current) {
      const formData = new FormData(form.current);
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      try {
        setIsLoading(true);
        await emailjs.send(
          serviceId,
          templateId,
          { message, email },
          publicKey
        );
        toast.success('Thanks! Your message has been sent.');
        Array.from((e.target as HTMLFormElement).elements).forEach(
          (element) => {
            if (
              element instanceof HTMLInputElement ||
              element instanceof HTMLTextAreaElement
            ) {
              element.value = '';
            }
          }
        );
      } catch (e) {
        console.error('Error sending email:', e);
        toast.error('Oops! Something went wrong. Please try again.', {
          style: { width: '1000px' },
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Section id='contact' ref={ref}>
      <SubHeading text="Let's Connect!" />
      <p className='text-darkblue font-light pb-[20px] text-center'>
        I'd love to hear from you if you think I'd be a good fit for your team
        or just want to chat about building great products.
      </p>
      <form ref={form} className='pb-[30px] text-center' onSubmit={sendEmail}>
        <input
          type='email'
          placeholder='Your Email'
          name='email'
          required
          className='border-mediumdarkblue border mb-[20px] rounded text-sm font-normal h-[30px] w-[300px] pl-[5px] block mx-auto'
        />
        <textarea
          placeholder='Your Message'
          name='message'
          required
          rows={8}
          className='border border-mediumdarkblue mb-[20px] rounded pl-[5px] text-sm font-normal w-[300px] block mx-auto focus:border-darkblue'
        />
        <button
          disabled={isLoading}
          type='submit'
          className={`h-[28px] bg-mediumdarkblue border-2 border-mediumdarkblue rounded text-white text-base font-medium w-[100px]  transition ease-out duration-450 ${isLoading ? '' : buttonHoverStyle}`}
        >
          {isLoading ? <Spinner /> : 'Send'}
        </button>
      </form>
    </Section>
  );
};

export default Contact;
