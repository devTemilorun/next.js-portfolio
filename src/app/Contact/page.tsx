// app/contact/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaPaperPlane 
} from 'react-icons/fa'

// ────────────────────────────────────────────────
// Form Schema + Types
// ────────────────────────────────────────────────
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>

// ────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // ── Replace this with real submission logic ──
    // Examples: fetch('/api/contact'), EmailJS, Formspree, Resend, etc.
    console.log('Form data:', data)
    
    await new Promise(resolve => setTimeout(resolve, 1200)) // simulate network
    alert('Thank you! Your message has been sent.')
    reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero / Heading Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
        <div className="relative container mx-auto px-6 md:px-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Have a project in mind? Want to discuss collaboration opportunities?<br className="hidden sm:block" />
              Drop me a message — I reply within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content – Form + Info */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
            {/* Contact Form – 3/5 columns */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 bg-white dark:bg-gray-800/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaPaperPlane className="text-3xl text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl md:text-4xl font-bold">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all"
                    placeholder="hello@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-lg" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar – 2/5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Email & Phone Card */}
              <div className="bg-white dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60">
                <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:hello@yourdomain.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        hello@yourdomain.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+2340000000000" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +234 000 000 0000
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="bg-white dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60">
                <h3 className="text-2xl font-bold mb-6">Find me on</h3>
                <div className="flex gap-6 text-3xl">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}