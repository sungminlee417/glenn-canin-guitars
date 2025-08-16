"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/contact-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you&apos;re interested in commissioning a custom guitar or have questions about my instruments, 
            I&apos;d love to hear from you.
          </motion.p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-cinzel font-semibold text-stone-900 mb-8 text-amber-700">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start p-4 rounded-lg hover:bg-stone-50 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-stone-900">Phone</p>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start p-4 rounded-lg hover:bg-stone-50 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-stone-900">Email</p>
                  <p className="text-stone-600">glenn@glenncaninguitars.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start p-4 rounded-lg hover:bg-stone-50 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-stone-900">Workshop Location</p>
                  <p className="text-stone-600">Northern California, USA</p>
                  <p className="text-stone-500 text-sm">By appointment only</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="font-semibold text-stone-900 mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6 }}
              >
                Workshop Visits
              </motion.h4>
              <motion.p 
                className="text-stone-600 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I welcome visits to my workshop by appointment. This is a great opportunity to see 
                guitars in various stages of construction and try completed instruments.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-sm border border-stone-200"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-cinzel font-semibold text-stone-900 mb-6 text-amber-700">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-stone-900 mb-2">Message Sent!</h4>
                  <p className="text-stone-600">Thank you for your message. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="custom-order">Custom Guitar Order</option>
                      <option value="available-guitars">Available Guitars</option>
                      <option value="workshop-visit">Workshop Visit</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project or question..."
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-stone-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </motion.form>
          </motion.div>
        </div>

        <FadeIn className="mt-16">
          <motion.div 
            className="bg-stone-900 text-white rounded-lg p-8 text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-cinzel mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              Ready to Begin Your Guitar Journey?
            </motion.h3>
            <motion.p 
              className="text-stone-200 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              From custom commissions to available instruments, I&apos;m here to help you find 
              the perfect guitar for your musical expression.
            </motion.p>
            <motion.a 
              href="/ordering"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Custom Orders
            </motion.a>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}