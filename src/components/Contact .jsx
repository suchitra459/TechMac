import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black" >
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Get in touch with us for project inquiries, partnerships, or
          any other information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-gray-100 p-6 rounded-lg shadow text-black">
            <h3 className="text-xl font-semibold mb-4">
              Tech Mac Project Private Limited
            </h3>

            <p className="text-gray-600 mb-4">
              Building strong infrastructure solutions across India with
              commitment, quality, and trust.
            </p>

            <p className="text-gray-700 mb-2">
              📍 Address: 123 Infrastructure Hub City, India
            </p>
            <p className="text-gray-700 mb-2">
              📞 Phone: +91 1234567890
            </p>
            <p className="text-gray-700 mb-2">
              ✉ Email: info@techmacproject.com
            </p>
          </div>

          <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4 text-black">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded border focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded border focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold w-full"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
