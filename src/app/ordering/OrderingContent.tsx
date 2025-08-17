"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, CreditCard, Package, Palette, FileText } from 'lucide-react';
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

interface OrderingData {
  data: {
    title?: string;
    processSteps?: ProcessStep[];
    [key: string]: unknown;
  };
  content: string;
}

interface OrderingContentProps {
  orderingContent: OrderingData | null;
}

export default function OrderingContent({ orderingContent }: OrderingContentProps) {
  // Default process steps with icons
  const defaultProcessSteps = [
    {
      stepNumber: 1,
      title: "Initial Consultation",
      description: "Discuss your needs, preferences, and specifications for your custom guitar",
      icon: FileText,
    },
    {
      stepNumber: 2,
      title: "Wood Selection",
      description: "Choose from our collection of premium tonewoods for your instrument",
      icon: Palette,
    },
    {
      stepNumber: 3,
      title: "Design Confirmation",
      description: "Finalize all specifications and aesthetic details",
      icon: CheckCircle,
    },
    {
      stepNumber: 4,
      title: "Deposit",
      description: "50% deposit required to begin construction",
      icon: CreditCard,
    },
    {
      stepNumber: 5,
      title: "Construction",
      description: "Your guitar is carefully crafted over 3-4 months",
      icon: Clock,
    },
    {
      stepNumber: 6,
      title: "Final Payment & Delivery",
      description: "Balance due upon completion, shipping or pickup arranged",
      icon: Package,
    },
  ];

  // Use CMS process steps if available, otherwise use defaults
  const processSteps = orderingContent?.data?.processSteps?.map((step, index) => ({
    ...step,
    icon: defaultProcessSteps[index]?.icon || FileText,
  })) || defaultProcessSteps;

  const title = orderingContent?.data?.title || "Ordering Information";

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/ordering-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Commission a custom classical guitar tailored to your musical vision and playing style.
          </motion.p>
        </FadeIn>

        <FadeIn className="mb-16">
          <motion.div
            className="bg-white rounded-lg shadow-sm p-8 border border-stone-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-cinzel font-bold text-amber-700 mb-6 text-center">The Process</h2>
            
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <StaggerItem key={step.stepNumber}>
                  <motion.div
                    className="p-6 rounded-lg border border-stone-200 hover:shadow-lg transition-all bg-stone-50"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center mr-4 font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.stepNumber}
                      </motion.div>
                      <step.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{step.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </motion.div>
        </FadeIn>

        {/* Display CMS content if available */}
        {orderingContent?.content && (
          <FadeIn className="mb-16">
            <motion.div
              className="bg-white rounded-lg shadow-sm p-8 border border-stone-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="prose prose-stone prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: orderingContent.content }}
              />
            </motion.div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <motion.div
              className="bg-amber-50 p-8 rounded-lg border border-amber-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-cinzel font-bold text-amber-700 mb-6">Pricing & Timeline</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex justify-between items-center p-3 bg-white rounded-lg"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium text-stone-700">Starting Price:</span>
                  <span className="text-xl font-bold text-amber-600">$8,000</span>
                </motion.div>
                
                <motion.div
                  className="flex justify-between items-center p-3 bg-white rounded-lg"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium text-stone-700">Build Time:</span>
                  <span className="text-xl font-bold text-amber-600">3-4 months</span>
                </motion.div>
                
                <motion.div
                  className="flex justify-between items-center p-3 bg-white rounded-lg"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium text-stone-700">Deposit:</span>
                  <span className="text-xl font-bold text-amber-600">50%</span>
                </motion.div>
              </div>
              
              <motion.p
                className="text-stone-600 text-sm mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Final pricing depends on wood selection, custom features, and decorative elements.
                Payment plans available for qualifying customers.
              </motion.p>
            </motion.div>
          </FadeIn>

          <FadeIn>
            <motion.div
              className="bg-stone-900 text-white p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-cinzel font-bold mb-6">What&apos;s Included</h3>
              
              <ul className="space-y-3">
                {[
                  "Premium tonewood selection",
                  "Custom specifications",
                  "Professional setup",
                  "Lifetime warranty",
                  "Certificate of authenticity",
                  "Hardshell case",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-stone-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16">
          <motion.div
            className="text-center bg-gradient-to-r from-amber-50 to-stone-50 p-8 rounded-lg border border-amber-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-cinzel font-bold text-stone-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Start Your Custom Guitar?
            </motion.h3>
            <motion.p
              className="text-stone-600 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to begin the conversation about your dream classical guitar.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Glenn Today
            </motion.a>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}