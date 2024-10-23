import React, { useEffect, useState } from 'react';
import { fetchTestimonials } from '../../services/testimonialService'; 

const TestimonialSlider = () => {
  const [active, setActive] = useState(0);
  const [autorotateInterval, setAutorotateInterval] = useState(null);
  const [testimonials, setTestimonials] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const getTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data); 
      } catch (err) {
        setError('Failed to load testimonials'); 
        
      } finally {
        setLoading(false); 
        
      }
    };

    getTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0 && !autorotateInterval) {
      const interval = setInterval(() => {
        setActive((prevActive) => (prevActive + 1 === testimonials.length ? 0 : prevActive + 1));
      }, 7000);
      setAutorotateInterval(interval);
    }

    return () => clearInterval(autorotateInterval);
  }, [autorotateInterval, testimonials.length]);

  const handleStopAutorotate = () => {
    clearInterval(autorotateInterval);
    setAutorotateInterval(null);
  };


  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-80 flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            {/* Testimonial Slider */}
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="relative h-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#450752] before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                  <div className="h-32">
                    <div className="relative top-11 left-1/2 -translate-x-1/2 rounded-full">
                      <img
                        className="relative top-3 left-1/2 -translate-x-1/2 rounded-full"
                        src={testimonials[active].img}
                        alt={testimonials[active].name}
                        width="76"
                        height="76"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-9">
                <div className="relative flex flex-col transition-all duration-150 ease-in-out">
                  <div className="text-2xl font-light text-slate-900 before:content-['\201C'] after:content-['\201D']">
                    {testimonials[active].quote}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap justify-center -m-1.5">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm ${
                      active === index ? 'bg-[#450752] text-white shadow-indigo-950' : 'bg-white hover:bg-indigo-100 text-slate-900'
                    }`}
                    onClick={() => {
                      setActive(index);
                      handleStopAutorotate();
                    }}
                  >
                    <span>{testimonial.name}</span>{' '}
                    <span className={active === index ? 'text-indigo-200' : 'text-slate-300'}>-</span>{' '}
                    <span>{testimonial.role}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* Add your footer here if needed */}

      {/* Banner with Links */}
      <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50">
        {/* Add your banner with links here if needed */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
