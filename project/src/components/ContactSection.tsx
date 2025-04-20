import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderSocialIcon = (icon: React.ReactNode, link: string) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center bg-gold text-deep-red rounded-full transition-transform duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );

  return (
    <section id="contact" className="section-padding bg-deep-red relative" ref={ref}>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path fill="#FFD700" d="M47.1,-57.3C60.9,-44.6,71.8,-30,75.8,-13.8C79.8,2.4,76.7,20.2,67.8,35C58.8,49.7,43.9,61.4,26.7,68.9C9.6,76.4,-9.7,79.7,-26.9,74.9C-44.2,70.1,-59.2,57.2,-67.4,41.7C-75.5,26.1,-76.8,7.9,-73.3,-9.1C-69.9,-26.1,-61.9,-41.9,-49.1,-54.9C-36.3,-67.9,-18.2,-78.2,-1.1,-76.9C16,-75.6,33.3,-70,47.1,-57.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Parallax translateY={[20, -20]} className="mb-14">
          <h2 className="section-title text-center">Contact Us</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get in touch with our team. We'd love to hear from you.
          </p>
        </Parallax>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <Parallax translateY={[30, -30]}>
              <div className={`transform transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-3xl font-bold mb-8 text-gold">Let's Connect</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Email</h4>
                      <a href="mailto:info@seventhsense.agency" className="text-white opacity-80 hover:text-gold transition-colors">
                        info@seventhsense.agency
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Phone</h4>
                      <a href="tel:+91-9876543210" className="text-white opacity-80 hover:text-gold transition-colors">
                        +91 987 654 3210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Locations</h4>
                      <p className="text-white opacity-80">Rajkot & Ahmedabad</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {renderSocialIcon(<Instagram size={20} />, "https://instagram.com")}
                    {renderSocialIcon(<Linkedin size={20} />, "https://linkedin.com")}
                    {renderSocialIcon(<Twitter size={20} />, "https://twitter.com")}
                    {renderSocialIcon(<Facebook size={20} />, "https://facebook.com")}
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="w-full lg:w-1/2">
            <Parallax translateY={[40, -40]}>
              <div className={`transform transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6746230030257!2d70.7753476!3d22.2934226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1656568186390!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    className="rounded-lg border-4 border-gold"
                  ></iframe>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;