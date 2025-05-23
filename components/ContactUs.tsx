import React from 'react';

import { AnimatedText } from './Animation/AnimatedText';

const ContactUs = () => {
  return (
    <section className="min-h-screen pt-28 relative bg-contact-us-bg transition-all flex flex-col overflow-clip">
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3987877370264!2d72.8338265756143!3d19.1340134501479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71a7b0ee477%3A0xd84e212d6717bb6c!2sVeera%20Desai%20Road!5e0!3m2!1sen!2sin!4v1704104633787!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen={false}
          className="left-0 top-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>

      <div
        id="contact-section"
        className="lg:absolute flex flex-col gap-8 justify-center items-center shadow-card bg-contact-us-card lg:-mt-44 py-16 lg:py-24 md:px-10 lg:w-[50%] w-full drop-shadow-lg sm:top-[60%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/5 rounded-t-3xl rounded-b-none sm:rounded-2xl"
      >
        <AnimatedText text="Contact Us" textClassName="text-4xl font-bold text-white" />

        <div className="h-full w-full flex-1 p-10 flex flex-col gap-5 justify-start items-center text-white">
          <div className="flex-1 h-full space-y-5">
            <a
              href="https://www.bing.com/maps?osid=c0ed318f-49eb-4391-a930-3f9535a514a0&cp=19.134383~72.83181&lvl=17.17&pi=0&v=2&sV=2&form=S00027"
              target="_blank"
              title="View on Bing Maps"
              className="flex justify-start items-center gap-4"
            >
              <i className="fa-solid fa-map-location-dot fa-xl text-rose-500 border border-white rounded-full px-4 py-7 text-center w-fit"></i>
              Veera Desai Road, B 999, Remi Bizcourt, <br /> Opposite Supreme Chambers, <br /> Mumbai, Maharashtra 400053, IN
            </a>
            <a href="tel:+919913877730" target="_blank" title="Call us" className="flex justify-start items-center gap-4">
              <i className="fa-solid fa-phone fa-xl text-rose-500 border border-white rounded-full px-4 py-7 text-center w-fit"></i>
              +91 9913877730
            </a>
            <a href="mailto:contact@bmfilms.com" target="_blank" title="Send us an email" className="flex justify-start items-center gap-4">
              <i className="fa-solid fa-envelope fa-xl text-rose-500 border border-white rounded-full px-4 py-7 text-center w-fit"></i>
              contact@bmfilms.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
