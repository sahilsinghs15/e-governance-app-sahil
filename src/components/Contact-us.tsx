"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export default function ContactUS() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    console.log(form);
    // Clear the form after submission
    setForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Contact Us
        </h1>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-purple-800 to-gray-800 rounded-lg shadow-lg p-6 text-white">
              <h2 className="text-2xl font-semibold mb-6">Reach Us</h2>
              <p className="mb-4">
                <strong>E-Governance</strong>
                <br /> Andheri East, Mumbai, Maharashtra 400093
              </p>
              <p className="mb-4">
                <strong>Contact Us:</strong>
                <br /> Mobile No: 1234567890
              </p>
              <p>
                <strong>Write To Us:</strong>
                <br /> info@e-governance.ac.in
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="bg-gradient-to-br from-purple-800 to-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Drop us a message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <Label htmlFor="fullName" className="text-white">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-gray-900 text-white border border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="email" className="text-white">
                    Your Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-gray-900 text-white border border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="subject" className="text-white">
                    Subject <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-gray-900 text-white border border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md bg-gray-900 text-white border border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="notRobot"
                      name="notRobot"
                      className="h-4 w-4 text-purple-500 border-gray-300 rounded"
                      required
                    />
                    <Label htmlFor="notRobot" className="ml-2 text-white">
                      I&#39;m not a robot
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
