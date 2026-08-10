import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { validateContactForm } from '../utils/validation'

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'institution') {
      setForm((prev) => ({
        ...prev,
        message: 'Hello STRIVE Team, we are an institution looking to hire certified trainers for our upcoming sessions.',
      }))
    } else if (type === 'csr') {
      setForm((prev) => ({
        ...prev,
        message: 'Hello STRIVE Team, we are looking to partner with STRIVE for CSR educational initiatives.',
      }))
    }
  }, [searchParams])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateContactForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    const text = `Hello STRIVE Team,%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Message:* ${encodeURIComponent(form.message)}`
    const whatsappUrl = `https://wa.me/919489949872?text=${text}`

    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <>
      <Seo
        title="Contact Us — Institutional & Trainer Partnerships"
        description="Get in touch with STRIVE for trainer membership inquiries, institutional hiring, or CSR educational partnerships. Call +91 94899 49872 or email info@strivesociety.in."
        path="/contact"
      />
      <section className="pt-36 pb-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Get in Touch"
                title="Let's Connect"
                subtitle="Have questions about joining STRIVE, hiring certified trainers, or CSR partnerships? Reach out directly via phone, email, or WhatsApp."
              />
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/919489949872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-all duration-200">
                  <FaWhatsapp />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-emerald-700 uppercase tracking-wide">Instant WhatsApp</span>
                  <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">+91 94899 49872</span>
                </div>
              </a>

              <a
                href="tel:+919489949872"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <FiPhone />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Call Us</span>
                  <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">+91 94899 49872</span>
                </div>
              </a>

              <a
                href="mailto:info@strivesociety.in"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <FiMail />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Email Us</span>
                  <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">info@strivesociety.in</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Location</span>
                  <span className="font-bold text-slate-900">Kochi, Kerala, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Connect on Social Media</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaWhatsapp, href: 'https://wa.me/919489949872', label: 'WhatsApp' },
                  { icon: FaFacebookF, href: 'https://www.facebook.com/share/163kBdRoWQ8/', label: 'Facebook' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/strivekochi', label: 'Instagram' },
                  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/strive-society', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs">
              <iframe
                title="STRIVE location — Kochi, Kerala"
                src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Send Us a Message</h3>
            <p className="text-sm text-slate-500 mb-8">Fill in the fields below to open your query pre-filled directly on WhatsApp.</p>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                <FiCheckCircle className="text-2xl text-primary shrink-0" />
                WhatsApp opened! If it did not open automatically, click the WhatsApp button to continue.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-800 outline-none transition-all text-sm font-medium"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="text-red-600 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-800 outline-none transition-all text-sm font-medium"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-800 outline-none transition-all text-sm font-medium"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements or inquiry..."
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-800 outline-none transition-all text-sm font-medium resize-none"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="text-red-600 text-xs mt-1 font-medium">{errors.message}</p>}
              </div>

              <Button as="button" type="submit" variant="primary" className="w-full sm:w-auto text-sm px-8 py-3.5">
                Send via WhatsApp <FaWhatsapp className="text-lg text-emerald-300" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
