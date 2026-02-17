'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaWhatsapp
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import PagesNavbar from '@/src/components/PagesNavbar'
import Footer from '@/src/components/Footer'


const WEB3FORMS_ACCESS_KEY = 'bfb3e646-41fe-4500-bbb7-3f621a355715'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

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
    setSubmitStatus('loading')
    setSubmitMessage('')

    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('message', data.message)
    

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      const json = await response.json()

      if (json.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent.')
        reset()
      } else {
        setSubmitStatus('error')
        setSubmitMessage(json.message || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setSubmitMessage('Network error — please check your connection.')
    }
  }

  return (
    <div>
      <PagesNavbar/>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        <section className="relative pt-16 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
          <div className="relative container mx-auto px-6 md:px-10 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-black">
                Let’s Work Together
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                Have a project idea, collaboration, or opportunity?<br className="hidden sm:block" />
                Send me a message — I typically respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-6 md:px-10 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
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
                  <input
                    type="text"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all"
                      placeholder="John....."
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
                    disabled={isSubmitting || submitStatus === 'loading'}
                    className="w-full py-4 px-6 rounded-lg text-white font-bold text-lg
                    bg-indigo-600 hover:bg-indigo-700
                    shadow-lg transition-transform duration-200
                    hover:scale-105
                    disabled:opacity-60 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2"
                  >
                    {submitStatus === 'loading' || isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="text-xl" />
                      </>
                    )}
                  </button>
                  {submitStatus === 'success' && (
                    <div className="p-5 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-xl text-center font-medium border border-green-200 dark:border-green-800/50">
                      {submitMessage}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-5 bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 rounded-xl text-center font-medium border border-red-200 dark:border-red-800/50">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-white dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60">
                  <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <a href="mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..." className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          dev.temilorun@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                        <FaPhone />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <a href="tel:+2347041225674" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          +234 7031225674
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60">
                  <h3 className="text-2xl font-bold mb-6">Connect Online</h3>
                  <div className="flex gap-7 text-3xl">
                    <a href="https://github.com/devTemilorun" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                      <FaGithub />
                    </a>
                    <a href="https://wa.me/2347031225674?text=Hello!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                      <FaWhatsapp/>
                    </a>
                    <a href="https://twitter.com/ISCRYPT0001" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                      <FaXTwitter/>
                    </a>
                    <a href="https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    <Footer/>             
    </div>
  )
}