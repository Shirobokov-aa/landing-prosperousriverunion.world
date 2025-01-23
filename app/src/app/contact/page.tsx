"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconMapPin, IconMail, IconClock } from "@tabler/icons-react";

const contactInfo = [
  {
    icon: <IconMapPin stroke={2} className="w-8 h-8" />,
    title: "Address",
    info: "Unit 704C, 7/F, Block 3, Nan Fung Industrial City, 18 Tin Hau Road, Tuen  Mun, HONGKONG",
    description: "Head Office"
  },
  {
    icon: <IconMail stroke={2} className="w-8 h-8" />,
    title: "Email",
    info: "info@prosperousriverunion.world",
    description: "Send us a message anytime!"
  },
  {
    icon: <IconClock stroke={2} className="w-8 h-8" />,
    title: "Working Hours",
    info: "Mon-Fri: 9:00 AM - 6:00 PM",
    description: "Sat-Sun: Closed"
  }
];

export default function Contact() {
  return (
    <div>
      <Header />
      <section>
        <div
          className="relative max-w-[1440px] h-[300px] mx-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070")' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
            <div className="text-white flex flex-col gap-4">
              <h1 className="text-5xl font-bold">Contact Us</h1>
              <p className="text-xl max-w-2xl">
                Were here to help with all your shipping and logistics needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto lg:px-16 px-8 py-20">
          <div className="flex flex-col gap-2 mb-16">
            <h2 className="text-3xl font-bold">About Company</h2>
            <div className="w-[198px] h-2 bg-[linear-gradient(90.00deg,_rgb(17,_66,_107),rgb(17,_66,_107)_44.807%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <p className="text-xl text-log-gray-700 max-w-3xl pt-6">
              As a leading logistics company with 15 years of experience, were committed to providing reliable and efficient
              cargo delivery worldwide. Our innovative technology and professional approach ensure the highest quality service
              for each client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-log-blue-950">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-log-blue-950">{item.title}</h3>
                  <p className="text-lg font-medium">{item.info}</p>
                  <p className="text-log-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-log-blue-900 text-white">
        <div className="max-w-6xl mx-auto lg:px-16 px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
            <p className="text-xl">
              Our support team is ready to answer all your questions.
              <br />
              Contact us through any convenient method!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
