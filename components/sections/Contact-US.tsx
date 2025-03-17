"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { toast } from "sonner"


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function ContactUS() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    formData.append("access_key", "14e7650e-23cc-4a1f-b838-c459a4d8959e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
toast.success("Message sent successfully")
        form.reset();
      } else {
        console.error("Error", data);
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Submission error", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full py-20 lg:py-40 text-white bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col gap-8 max-w-2xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div className="flex gap-4 flex-col mx-auto items-center justify-center">
              <Badge className="bg-orange-500 hover:bg-orange-900">
                Contact Us
              </Badge>
            </div>
            <motion.h2
              className="text-3xl md:text-6xl font-bold text-center"
              variants={item}
            >
              Get in Touch
            </motion.h2>
          </div>
          <motion.form
            className="flex flex-col gap-6 z-40"
            variants={item}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors"
                placeholder="Your email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 hover:border-orange-500 transition-colors min-h-[150px]"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors mt-4"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
 
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
