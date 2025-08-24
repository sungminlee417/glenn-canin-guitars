"use client";

import { motion } from "framer-motion";
import { CheckCircle, Settings, DollarSign, Star } from 'lucide-react';
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface Option {
  category: string;
  title: string;
  description: string;
  price: string;
  required: boolean;
}

interface PricingItem {
  label: string;
  value: string;
}

interface OrderingData {
  data: {
    title?: string;
    pageTitle?: string;
    pageDescription?: string;
    optionsTitle?: string;
    basePrice?: string;
    baseDescription?: string;
    options?: Option[];
    pricingItems?: PricingItem[];
    pricingNote?: string;
    includedFeaturesTitle?: string;
    includedFeatures?: string[];
    [key: string]: unknown;
  };
  content: string;
}

interface OrderingContentProps {
  orderingContent: OrderingData | null;
}

export default function OrderingContent({ orderingContent }: OrderingContentProps) {

  const title = orderingContent?.data?.pageTitle || orderingContent?.data?.title || "Custom Guitar Ordering";
  const description = orderingContent?.data?.pageDescription || "Commission a custom classical guitar tailored to your musical vision and playing style.";
  const optionsTitle = orderingContent?.data?.optionsTitle || "Guitar Options & Upgrades";
  const basePrice = orderingContent?.data?.basePrice || "$14,000";
  const baseDescription = orderingContent?.data?.baseDescription || "Includes balsa core doubletop with cedar/cedar or spruce/cedar skins, Indian rosewood back/sides, elevated fingerboard, 20th fret, optional soundport, Barnett tuners, arched TKL case.";
  
  // Default options
  const defaultOptions: Option[] = [
    { category: 'Scale Length', title: '650mm (Standard)', description: 'Traditional classical guitar scale length', price: 'Included', required: false },
    { category: 'Scale Length', title: '640mm (Short Scale)', description: 'Shorter scale length for easier playing', price: 'Included', required: false },
    { category: 'Scale Length', title: '665mm (Long Scale)', description: 'Extended scale for increased tension and projection', price: 'Included', required: false },
    { category: 'Wood Upgrades', title: '40-year-old Madagascar Rosewood', description: 'Premium aged Madagascar rosewood for back and sides', price: '+$3,000', required: false },
    { category: 'Wood Upgrades', title: 'Brazilian Rosewood', description: 'Rare Brazilian rosewood for back and sides', price: '+$5,000', required: false },
    { category: 'Hardware', title: 'Alessi Tuners', description: 'Premium tuning machines for superior stability', price: '+$500', required: false },
    { category: 'Case', title: 'Bam or Visesnut Case', description: 'Upgrade to premium hardshell case', price: '+$500', required: false },
  ];
  
  const options = orderingContent?.data?.options || defaultOptions;
  
  // Group options by category
  const groupedOptions = options.reduce((groups, option) => {
    const category = option.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(option);
    return groups;
  }, {} as Record<string, Option[]>);
  
  // Use CMS pricing items or defaults
  const defaultPricingItems = [
    { label: 'Waitlist', value: 'Contact for current wait time' },
    { label: 'Deposit', value: '$500' },
    { label: 'Balance', value: 'Due upon completion' },
  ];
  const pricingItems = orderingContent?.data?.pricingItems || defaultPricingItems;
  
  const pricingNote = orderingContent?.data?.pricingNote || "Customers must call or email to get on the waitlist. Pricing varies based on wood selection and optional upgrades.";
  
  // Use CMS included features or defaults
  const defaultIncludedFeatures = [
    "Balsa core doubletop construction",
    "Cedar or spruce soundboard options",
    "Indian rosewood back and sides (standard)",
    "Elevated fingerboard with 20th fret access",
    "Optional soundport",
    "Barnett tuning machines (standard)",
    "Arched TKL case included",
  ];
  const includedFeatures = orderingContent?.data?.includedFeatures || defaultIncludedFeatures;
  const includedFeaturesTitle = orderingContent?.data?.includedFeaturesTitle || "What's Included";

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/ordering-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </FadeIn>

        {/* Base Price Section */}
        <FadeIn className="mb-16">
          <motion.div
            className="bg-gradient-to-r from-amber-50 to-stone-50 dark:from-amber-900/20 dark:to-stone-700 rounded-lg p-8 border border-amber-200 dark:border-amber-600 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-4">Base Price</h2>
            <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-4">{basePrice}</div>
            <p className="text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
              {baseDescription}
            </p>
          </motion.div>
        </FadeIn>

        {/* Options Section */}
        <FadeIn className="mb-16">
          <motion.div
            className="bg-white dark:bg-stone-800 rounded-lg shadow-sm p-8 border border-stone-200 dark:border-stone-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-cinzel font-bold text-amber-700 dark:text-amber-400 mb-8 text-center">{optionsTitle}</h2>
            
            <div className="space-y-8">
              {Object.entries(groupedOptions).map(([category, categoryOptions]) => (
                <motion.div
                  key={category}
                  className="border-b border-stone-200 dark:border-stone-600 pb-8 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-cinzel font-semibold text-stone-900 dark:text-stone-100 mb-6 flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-amber-600 dark:text-amber-400" />
                    {category}
                  </h3>
                  
                  <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryOptions.map((option, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          className="p-4 rounded-lg border border-stone-200 dark:border-stone-600 hover:shadow-lg transition-all bg-stone-50 dark:bg-stone-700 relative"
                          whileHover={{ y: -3, scale: 1.01 }}
                          transition={{ duration: 0.3 }}
                        >
                          {option.required && (
                            <Star className="absolute top-3 right-3 w-5 h-5 text-amber-500" fill="currentColor" />
                          )}
                          
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100">{option.title}</h4>
                            <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                              option.price === 'Included' 
                                ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200'
                                : 'bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                            }`}>
                              {option.price}
                            </span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">{option.description}</p>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </FadeIn>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <motion.div
              className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg border border-amber-200 dark:border-amber-600"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-cinzel font-bold text-amber-700 dark:text-amber-400 mb-6">Pricing & Timeline</h3>
              
              <div className="space-y-4">
                {pricingItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center p-3 bg-white dark:bg-stone-700 rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium text-stone-700 dark:text-stone-300">{item.label}:</span>
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{item.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                className="text-stone-600 dark:text-stone-300 text-sm mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {pricingNote}
              </motion.p>
            </motion.div>
          </FadeIn>

          <FadeIn>
            <motion.div
              className="bg-stone-900 dark:bg-stone-800 text-white p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-cinzel font-bold mb-6">{includedFeaturesTitle}</h3>
              
              <ul className="space-y-3">
                {includedFeatures.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-stone-200 dark:text-stone-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-amber-400 dark:text-amber-300 mr-3 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16">
          <motion.div
            className="text-center bg-gradient-to-r from-amber-50 to-stone-50 dark:from-amber-900/20 dark:to-stone-700 p-8 rounded-lg border border-amber-200 dark:border-amber-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Start Your Custom Guitar?
            </motion.h3>
            <motion.p
              className="text-stone-600 dark:text-stone-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to begin the conversation about your dream classical guitar.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-amber-600 dark:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors"
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