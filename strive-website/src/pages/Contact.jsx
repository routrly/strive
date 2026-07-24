import { useState } from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { validateContactForm } from '../utils/validation'

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateContactForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // TODO: wire real submit endpoint here — currently client-side only.

    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with STRIVE — call +91 94899 49872 or email info@strivesociety.in."
        path="/contact"
      />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading align="left" eyebrow="Get in Touch" title="Contact Us" />

            <div className="space-y-4 mb-8">
              <a href="tel:+919489949872" className="flex items-center gap-3 text-text hover:text-primary">
                <FiPhone className="text-xl text-primary" /> +91 94899 49872
              </a>
              <a href="mailto:info@strivesociety.in" className="flex items-center gap-3 text-text hover:text-primary">
                <FiMail className="text-xl text-primary" /> info@strivesociety.in
              </a>
            </div>

            <div className="flex gap-4 text-xl mb-8">
              <a href="https://wa.me/919489949872" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-primary hover:text-secondary">
                <FaWhatsapp />
              </a>
              {/* TODO: replace with real profile URL */}
              <a href="#" aria-label="Facebook" className="text-primary hover:text-secondary">
                <FaFacebookF />
              </a>
              {/* TODO: replace with real profile URL */}
              <a href="#" aria-label="Instagram" className="text-primary hover:text-secondary">
                <FaInstagram />
              </a>
              {/* TODO: replace with real profile URL */}
              <a href="#" aria-label="LinkedIn" className="text-primary hover:text-secondary">
                <FaLinkedinIn />
              </a>
            </div>

            <iframe
              title="STRIVE location — Kochi, Kerala"
              src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
              className="w-full h-64 rounded-card border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            {submitted && (
              <p className="mb-4 text-primary font-semibold bg-surface rounded-card p-4">
                Thanks for reaching out! We'll get back to you shortly.
              </p>
            )}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button as="button" type="submit" variant="primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
