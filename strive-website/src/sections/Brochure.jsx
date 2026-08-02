import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import AnimatedSection from '../components/AnimatedSection'
import { isValidEmail } from '../utils/validation'
import brochureCover from '../assets/brochure-cover.jpg'

export default function Brochure() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')

    // TODO: wire real submit endpoint here — currently client-side only.

    setSubmitted(true)
  }

  return (
    <section id="brochure" className="py-20 px-6">
      <AnimatedSection as="div" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={brochureCover}
          alt="STRIVE brochure cover"
          loading="lazy"
          className="rounded-card max-w-xs mx-auto w-full aspect-[4/5] object-cover"
        />

        <div>
          <SectionHeading
            align="left"
            eyebrow="Brochure"
            title="Download Our Brochure"
            subtitle="Enter your email address to receive our brochure instantly."
          />

          {/* min-h keeps the form/success swap from shifting page layout (Task 25 audit) */}
          <div className="min-h-[96px]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-primary font-semibold bg-surface rounded-card p-6"
                >
                  <FiCheckCircle className="text-3xl shrink-0" />
                  <span className="flex-1">
                    Thanks! Your brochure is ready —{' '}
                    <a
                      href="/strive-brochure.pdf"
                      download
                      className="underline hover:text-secondary"
                    >
                      download it here
                    </a>
                    .
                  </span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="flex-1">
                    <label htmlFor="brochure-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="brochure-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-5 py-3 rounded-full border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'brochure-email-error' : undefined}
                    />
                    {error && (
                      <p id="brochure-email-error" className="text-red-600 text-sm mt-2 ml-2">
                        {error}
                      </p>
                    )}
                  </div>
                  <Button as="button" type="submit" variant="primary">
                    Get Brochure
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
