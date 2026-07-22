import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import SectionHeading from '../components/SectionHeading'
import PlaceholderMedia from '../components/PlaceholderMedia'

const TESTIMONIALS = [
  {
    quote: 'STRIVE helped me find consistent training opportunities without worrying about fake clients.',
    role: 'Trainer',
  },
  {
    quote: 'Their training sessions were engaging, structured and impactful.',
    role: 'College Partner',
  },
  {
    quote: 'Professional, committed and result-oriented.',
    role: 'Corporate Client',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
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
                <PlaceholderMedia
                  label={`${t.role} avatar`}
                  aspect="1/1"
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-lg text-text/80 max-w-xl">&ldquo;{t.quote}&rdquo;</p>
                <span className="font-semibold text-primary">— {t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
