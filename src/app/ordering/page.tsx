"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, CreditCard, Package, Palette, FileText, Users, Award, Shield } from 'lucide-react';
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

export default function OrderingPage() {
  // Static data for process steps since markdown import causes server-side issues
  const processSteps = [
    {
      stepNumber: 1,
      title: "Initial Consultation",
      description: "Discuss your needs, preferences, and specifications for your custom guitar"
    },
    {
      stepNumber: 2,
      title: "Wood Selection",
      description: "Choose from our collection of premium tonewoods for your instrument"
    },
    {
      stepNumber: 3,
      title: "Design Confirmation",
      description: "Finalize all specifications and aesthetic details"
    },
    {
      stepNumber: 4,
      title: "Deposit",
      description: "50% deposit required to begin construction"
    },
    {
      stepNumber: 5,
      title: "Construction",
      description: "Your guitar is carefully crafted over 3-4 months"
    },
    {
      stepNumber: 6,
      title: "Final Payment & Delivery",
      description: "Balance due upon completion, shipping or pickup arranged"
    }
  ];

  const faqs = [
    {
      question: "Can I visit the workshop during construction?",
      answer: "Yes, workshop visits can be arranged by appointment. Many clients enjoy seeing their guitar in various stages of construction."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Payment plans are available for qualifying customers. Please inquire for details."
    },
    {
      question: "What is included with the guitar?",
      answer: "Each guitar comes with a custom-fitted hardshell case, certificate of authenticity, care instructions, and lifetime support."
    },
    {
      question: "Can you replicate a specific guitar?",
      answer: "While each guitar is unique, we can work to match specific tonal goals or replicate successful design elements from previous builds."
    },
    {
      question: "What is your warranty policy?",
      answer: "All guitars come with a limited lifetime warranty to the original owner, covering defects in materials and workmanship."
    }
  ];

  const icons = [FileText, Palette, CheckCircle, CreditCard, Clock, Package];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/craft-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Guitar Ordering
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Commission a guitar tailored to your exact specifications. 
            Each instrument is a unique collaboration between luthier and musician.
          </motion.p>
        </FadeIn>

        <div className="mb-16">
          <FadeIn>
            <motion.h2 
              className="text-3xl font-cinzel text-center mb-12 text-amber-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              The Ordering Process
            </motion.h2>
          </FadeIn>
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step: {stepNumber: number; title: string; description: string}, index: number) => {
              const Icon = icons[index] || CheckCircle;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 relative hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {step.stepNumber}
                    </motion.div>
                    <motion.div 
                      className="ml-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-amber-700 mb-3" />
                      <h3 className="text-xl font-cinzel font-semibold mb-3">{step.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <FadeIn>
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-2xl font-cinzel mb-6 text-amber-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6 }}
              >
                Wood Selection
              </motion.h2>
              <motion.p 
                className="text-stone-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Choose from our carefully curated collection of premium tonewoods. 
                Each piece is hand-selected for its acoustic properties and visual beauty.
              </motion.p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-amber-600">Soundboard Options</h3>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• European Spruce (German, Swiss, Italian)</li>
                    <li>• Engelmann Spruce</li>
                    <li>• Western Red Cedar</li>
                    <li>• Redwood (limited availability)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-amber-600">Back & Sides Options</h3>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• Indian Rosewood</li>
                    <li>• Brazilian Rosewood (CITES certified)</li>
                    <li>• Madagascar Rosewood</li>
                    <li>• Cocobolo</li>
                    <li>• Cypress</li>
                    <li>• Maple (European or North American)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn>
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-2xl font-cinzel mb-6 text-amber-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6 }}
              >
                Customization Options
              </motion.h2>
              <motion.p 
                className="text-stone-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Every aspect of your guitar can be tailored to your preferences, 
                from practical specifications to aesthetic details.
              </motion.p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-amber-600">Specifications</h3>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• Scale length (640mm - 664mm)</li>
                    <li>• Nut width (50mm - 54mm)</li>
                    <li>• Neck profile and thickness</li>
                    <li>• String spacing at bridge</li>
                    <li>• Action height preferences</li>
                    <li>• Elevated fingerboard option</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-amber-600">Aesthetic Options</h3>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• Custom rosette design</li>
                    <li>• Binding materials and patterns</li>
                    <li>• Purfling details</li>
                    <li>• Tuning machine selection</li>
                    <li>• French polish or lacquer finish</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn>
          <motion.div 
            className="bg-amber-50 rounded-lg p-8 mb-16 border border-amber-200"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-cinzel mb-6 text-center text-amber-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              Pricing & Timeline
            </motion.h2>
            <StaggerChildren className="grid md:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-semibold mb-3">Starting Prices</h3>
                  <motion.p 
                    className="text-3xl font-bold text-amber-700 mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    $8,000
                  </motion.p>
                  <p className="text-sm text-stone-600">Traditional Construction</p>
                  <motion.p 
                    className="text-3xl font-bold text-amber-700 mb-2 mt-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    $12,000
                  </motion.p>
                  <p className="text-sm text-stone-600">Double Top Construction</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-semibold mb-3">Build Timeline</h3>
                  <motion.p 
                    className="text-3xl font-bold text-amber-700 mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    3-4 Months
                  </motion.p>
                  <p className="text-sm text-stone-600">Standard build time</p>
                  <p className="text-sm text-stone-500 mt-3">Current wait time may vary based on order backlog</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
                  <motion.p 
                    className="text-3xl font-bold text-amber-700 mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    50%
                  </motion.p>
                  <p className="text-sm text-stone-600">Deposit to begin</p>
                  <p className="text-sm text-stone-500 mt-3">Balance due upon completion</p>
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </motion.div>
        </FadeIn>

        <FadeIn>
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 mb-16"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-2xl font-cinzel mb-6 text-amber-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <StaggerChildren className="space-y-6">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="border-b border-stone-200 pb-4 last:border-b-0"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold mb-2 text-stone-900">{faq.question}</h3>
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </motion.div>
        </FadeIn>

        <FadeIn>
          <motion.div 
            className="text-center bg-stone-900 text-white rounded-lg p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-cinzel mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              Begin Your Custom Guitar Journey
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-stone-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to commission your dream guitar? Contact us to schedule a consultation 
              and begin the exciting process of creating your perfect instrument.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}