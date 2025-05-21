import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_fff9uko',
                'template_it1djf8',
                form.current,
                '_k2UtkQEJ6bY-vpwc'
            )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.error("Failed to send:", error.text);
                alert("Something went wrong. Please try again later.");
            });
    };

    return (
        <div id="contact" className=" text-sky-100 p-8">
          <div className="border border-sky-700 rounded-xl shadow-xl ">
              <div className="max-w-6xl mx-auto p-12">
                  <p className="text-center text-sm uppercase tracking-widest mb-4">Get in touch</p>
                  <h1 className="text-center  text-sky-500 lg:text-6xl font-extrabold mb-16 text-4xl ">CONTACT ME</h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      {/* Left - Description */}
                      <div>
                          <h2 className="text-xl font-semibold mb-4">We are here to serve! How can we help you?</h2>
                          <p className="text-gray-400">
                              If you have any questions about my work or anything else{" "}
                              <span className="text-sky-500">&lt;code/&gt;</span> related, I’m here to help!
                          </p>
                      </div>

                      {/* Right - Form */}
                      <form ref={form} onSubmit={sendEmail} className="space-y-6">
                          <div>
                              <label className="block text-xs font-semibold uppercase mb-1">Name (*)</label>
                              <input
                                  type="text"
                                  name="name"
                                  className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
                                  required
                              />
                          </div>

                          <div>
                              <label className="block text-xs font-semibold uppercase mb-1">E-mail (*)</label>
                              <input
                                  type="email"
                                  name="email"
                                  className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
                                  required
                              />
                          </div>

                          <div>
                              <label className="block text-xs font-semibold uppercase mb-1">Comment (*)</label>
                              <textarea
                                  rows="4"
                                  name="message"
                                  className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
                                  required
                              />
                          </div>

                          <div>
                              <button
                                  type="submit"
                                  className="bg-black text-white px-6 py-3 uppercase tracking-wide text-sm hover:bg-gray-800 active:scale-95 active:opacity-90 transition duration-150 ease-in-out"

                              >
                                  Submit
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default ContactUs;
