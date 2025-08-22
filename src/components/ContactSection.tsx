"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactData {
  data: {
    pageTitle?: string;
    pageDescription?: string;
    workshopSectionTitle?: string;
    workshopSectionDescription?: string;
    phone?: string;
    email?: string;
    address?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface ContactSectionProps {
  contactContent?: ContactData | null;
}

export default function ContactSection({ contactContent }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gray-900 dark:text-stone-100 mb-4">
            {contactContent?.data?.pageTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-stone-300 max-w-2xl mx-auto">
            {contactContent?.data?.pageDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-100 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-stone-100">Phone</p>
                  <p className="text-gray-600 dark:text-stone-300">{contactContent?.data?.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-stone-100">Email</p>
                  <p className="text-gray-600 dark:text-stone-300">{contactContent?.data?.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-stone-100">Workshop</p>
                  <div className="text-gray-600 dark:text-stone-300 whitespace-pre-line">
                    {contactContent?.data?.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 dark:bg-stone-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-stone-100 mb-2">
                {contactContent?.data?.workshopSectionTitle}
              </h4>
              <p className="text-gray-600 dark:text-stone-300 text-sm">
                {contactContent?.data?.workshopSectionDescription}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-100 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-md focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-700 text-gray-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-md focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-700 text-gray-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-md focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-700 text-gray-900 dark:text-stone-100"
                >
                  <option value="">Select a subject</option>
                  <option value="commission">Commission a Guitar</option>
                  <option value="availability">Guitar Availability</option>
                  <option value="workshop">Workshop Visit</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-md focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-stone-700 text-gray-900 dark:text-stone-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 dark:bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}