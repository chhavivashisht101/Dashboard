
//  Install framer-motion: `npm install framer-motion`

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!values.email.trim()) e.email = "Please enter your email";
    else if (!emailRegex.test(values.email)) e.email = "Enter a valid email";
    if (!values.message.trim()) e.message = "Please add a short message";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1100));

    // Here you'd send `form` to your backend / API. We'll simulate success.
    setSubmitting(false);
    setSent(true);

    // Auto clear after a while
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSent(false);
    }, 3000);
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-700 p-6">
      {/* Animated floating blobs */}
      <svg className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#a78bfa" stopOpacity="0.35" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g>
          <motion.circle
            cx="20%"
            cy="15%"
            r="220"
            fill="url(#g1)"
            animate={{ cy: ["10%", "18%", "12%"], cx: ["18%", "22%", "20%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="85%"
            cy="70%"
            rx="260"
            ry="160"
            fill="#fdba74"
            opacity="0.12"
            animate={{ rx: [260, 240, 270], ry: [160, 140, 170] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
        </g>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl"
      >
        <div className="flex items-start gap-6">
          {/* Left visual panel */}
          <div className="hidden md:flex flex-col items-center justify-center w-56 p-4 rounded-xl bg-gradient-to-b from-white/6 to-white/3 border border-white/5">
            <motion.div
              initial={{ rotate: -6, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-36 h-36 rounded-xl bg-gradient-to-tr from-pink-500 to-indigo-500 shadow-lg flex items-center justify-center"
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7.5C2 6.12 3.12 5 4.5 5h15C20.88 5 22 6.12 22 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 19 2 17.88 2 16.5v-9z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 7l-10 6L2 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            <div className="mt-4 text-center text-sm text-white/80">
              <strong className="block text-white">Get in touch</strong>
              <span className="block mt-1">We usually reply within 24 hours</span>
            </div>
          </div>

          {/* Form area */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-2xl font-semibold">Contact Us</h2>
                <p className="text-sm text-white/80 mt-1">Questions, collabs or feedback — send a message.</p>
              </div>

              <div className="flex gap-2 items-center">
                <motion.div whileHover={{ scale: 1.06 }} className="px-3 py-2 bg-white/6 rounded-lg text-xs text-white/90">
                  <strong>New</strong>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }} className="px-3 py-2 bg-white/3 rounded-lg text-xs text-white/90">
                  Live demo
                </motion.div>
              </div>
            </div>

            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <label className="relative block">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`peer w-full bg-white/6 placeholder-transparent rounded-lg px-4 py-3 outline-none border ${errors.name ? 'border-rose-400' : 'border-white/6'} focus:border-indigo-400 transition`}
                    placeholder="Your name"
                  />
                  <span className={`absolute left-4 top-1.5 text-sm transition-all peer-placeholder-shown:top-3.5 peer-focus:top-1.5 ${errors.name ? 'text-rose-300' : 'text-white/70'}`}>Name</span>
                  {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
                </label>

                {/* Email */}
                <label className="relative block">
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`peer w-full bg-white/6 placeholder-transparent rounded-lg px-4 py-3 outline-none border ${errors.email ? 'border-rose-400' : 'border-white/6'} focus:border-indigo-400 transition`}
                    placeholder="you@example.com"
                    type="email"
                  />
                  <span className={`absolute left-4 top-1.5 text-sm transition-all peer-placeholder-shown:top-3.5 peer-focus:top-1.5 ${errors.email ? 'text-rose-300' : 'text-white/70'}`}>Email</span>
                  {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
                </label>
              </div>

              {/* Message */}
              <label className="relative block mt-4">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`peer w-full bg-white/6 placeholder-transparent rounded-lg px-4 py-3 outline-none border ${errors.message ? 'border-rose-400' : 'border-white/6'} focus:border-indigo-400 transition resize-none`}
                  placeholder="Write your message here..."
                />
                <span className={`absolute left-4 top-2.5 text-sm transition-all peer-placeholder-shown:top-4.5 peer-focus:top-2.5 ${errors.message ? 'text-rose-300' : 'text-white/70'}`}>Message</span>
                {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}
              </label>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 rounded-xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-lg hover:scale-[1.01] active:scale-95 transition disabled:opacity-60"
                >
                  {submitting ? (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" strokeDasharray="60" strokeLinecap="round" fill="none"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}

                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: sent ? 1 : 0, x: sent ? 0 : 8 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 text-sm"
                >
                  {sent && (
                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="text-white/90">Message sent — thanks!</div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Extra bottom area */}
              <div className="mt-5 text-xs text-white/60 flex items-center gap-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>We’ll only use your information to reply — no spam.</div>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative border glow */}
        <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{
          background: 'linear-gradient(90deg, rgba(99,102,241,0.06), rgba(236,72,153,0.04))',
          zIndex: -1
        }} />
      </motion.div>
    </div>
  );
}
