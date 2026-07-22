import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import trainerAvatar from '../assets/demo/testimonial-trainer.jpg'
import collegePartnerAvatar from '../assets/demo/testimonial-college-partner.jpg'
import corporateClientAvatar from '../assets/demo/testimonial-corporate-client.jpg'

const TESTIMONIALS = [
  {
    quote: 'STRIVE helped me find consistent training opportunities without worrying about fake clients.',
    role: 'Trainer',
    avatar: trainerAvatar,
  },
  {
    quote: 'Their training sessions were engaging, structured and impactful.',
    role: 'College Partner',
    avatar: collegePartnerAvatar,
  },
  {
    quote: 'Professional, committed and result-oriented.',
    role: 'Corporate Client',
    avatar: corporateClientAvatar,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-surface">
      <AnimatedSection as="div" className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Testimonials" title="What People Say" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.role}>
              <div className="flex flex-col items-center text-center gap-4 px-4">
                {/* Demo image — swap for a real headshot per src/assets/placeholder-manifest.md */}
                <img
                  src={t.avatar}
                  alt={`${t.role} avatar`}
                  loading="lazy"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <p className="text-lg text-text/80 max-w-xl">&ldquo;{t.quote}&rdquo;</p>
                <span className="font-semibold text-primary">— {t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedSection>
    </section>
  )
}
