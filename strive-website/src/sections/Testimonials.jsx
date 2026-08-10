import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import Picture from '../components/Picture'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import session1 from '../assets/testimonials/session-1.jpg'
import session2 from '../assets/testimonials/session-2.jpg'
import session3 from '../assets/testimonials/session-3.jpg'
import session4 from '../assets/testimonials/session-4.jpg'
import session5 from '../assets/testimonials/session-5.jpg'
import session6 from '../assets/testimonials/session-6.jpg'
import session1Webp from '../assets/testimonials/session-1.webp'
import session2Webp from '../assets/testimonials/session-2.webp'
import session3Webp from '../assets/testimonials/session-3.webp'
import session4Webp from '../assets/testimonials/session-4.webp'
import session5Webp from '../assets/testimonials/session-5.webp'
import session6Webp from '../assets/testimonials/session-6.webp'

const INSTITUTION_NAME = 'RVS College – Allied Health Sciences / Nursing Students'

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Understanding and friendly and gained knowledge. Nothing but just perfect ✨',
    image: session1,
    imageWebp: session1Webp,
    alt: 'STRIVE training session at RVS College photo 1',
    institution: INSTITUTION_NAME,
  },
  {
    id: 2,
    quote: 'Great trainer with excellent communication skills.',
    image: session2,
    imageWebp: session2Webp,
    alt: 'STRIVE training session at RVS College photo 2',
    institution: INSTITUTION_NAME,
  },
  {
    id: 3,
    quote: 'The trainer motivated learners and built their confidence.',
    image: session3,
    imageWebp: session3Webp,
    alt: 'STRIVE training session at RVS College photo 3',
    institution: INSTITUTION_NAME,
  },
  {
    id: 4,
    quote: 'Your class is awesome Sir.',
    image: session4,
    imageWebp: session4Webp,
    alt: 'STRIVE training session at RVS College photo 4',
    institution: INSTITUTION_NAME,
  },
  {
    id: 5,
    quote: "His training skills are good, that's easy to understand and the training session is very useful.",
    image: session5,
    imageWebp: session5Webp,
    alt: 'STRIVE training session at RVS College photo 5',
    institution: INSTITUTION_NAME,
  },
  {
    id: 6,
    quote: 'Highly interactive sessions that helped build our practical skills and career confidence.',
    image: session6,
    imageWebp: session6Webp,
    alt: 'STRIVE training session at RVS College photo 6',
    institution: INSTITUTION_NAME,
  },
]

export default function Testimonials() {
  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <AnimatedSection as="div" className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="Student & Institutional Feedback"
          subtitle="Hear what students and institutions say about their learning experience with STRIVE."
        />

        {/* Automatic Sliding Carousel Container */}
        <div className="relative group">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={700}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 pt-2"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="relative w-full h-[380px] sm:h-[420px] rounded-[20px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group/card border border-slate-200/80 bg-slate-900 cursor-pointer">
                  {/* Session Event Photo Background */}
                  <Picture
                    src={item.image}
                    webpSrc={item.imageWebp}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Dark Gradient Overlay for High Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 transition-opacity duration-300" />

                  {/* Overlaid Content at Bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7 z-10">
                    {/* Large Quotation Icon */}
                    <FaQuoteLeft className="text-secondary text-2xl sm:text-3xl mb-3 shrink-0 opacity-90 group-hover/card:scale-110 transition-transform duration-300" />

                    {/* Testimonial Quote */}
                    <p className="text-white text-base sm:text-lg font-medium leading-relaxed mb-3 drop-shadow-sm italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Institution Name */}
                    <div className="pt-3 border-t border-white/20">
                      <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide block opacity-90">
                        {item.institution}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Control Buttons */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => swiperRef?.slidePrev()}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center text-lg shadow-sm transition-all cursor-pointer"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center text-lg shadow-sm transition-all cursor-pointer"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
