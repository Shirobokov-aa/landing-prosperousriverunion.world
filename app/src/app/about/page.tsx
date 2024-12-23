"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconAward } from "@tabler/icons-react";
import { IconBuildingSkyscraper } from "@tabler/icons-react";
import { IconUsers } from "@tabler/icons-react";
import { IconTruckDelivery } from "@tabler/icons-react";

const stats = [
  {
    icon: <IconBuildingSkyscraper stroke={2} className="w-10 h-10" />,
    value: "15+",
    label: "Years of Experience",
  },
  {
    icon: <IconUsers stroke={2} className="w-10 h-10" />,
    value: "50k+",
    label: "Happy Customers",
  },
  {
    icon: <IconTruckDelivery stroke={2} className="w-10 h-10" />,
    value: "220+",
    label: "Countries Served",
  },
  {
    icon: <IconAward stroke={2} className="w-10 h-10" />,
    value: "99%",
    label: "Satisfaction Rate",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every shipment, ensuring your cargo reaches its destination safely and on time.",
  },
  {
    title: "Innovation",
    description: "Our 3D AI-assisted measurement technology represents our commitment to innovative solutions.",
  },
  {
    title: "Reliability",
    description: "Trust is earned through consistent, dependable service that our customers can count on.",
  },
  {
    title: "Customer Focus",
    description: "Your success is our success. We're dedicated to providing personalized solutions for your shipping needs.",
  },
];

export default function About() {
  return (
    <div>
      <Header />
      <section>
        <div
          className="relative max-w-[1440px] h-[300px] mx-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070")' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
            <div className="text-white flex flex-col gap-4">
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="text-xl max-w-2xl">
                Your trusted partner in global logistics, delivering excellence across 220 countries with innovative solutions
                and unmatched service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-16 py-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="w-[198px] h-2 bg-[linear-gradient(90.00deg,_rgb(17,_66,_107),rgb(17,_66,_107)_44.807%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
              <div className="flex flex-col gap-6">
                <p className="text-xl text-log-gray-700">
                  Founded in 2008, our company has grown from a small local shipping provider to a global logistics leader.
                  Weve built our reputation on the foundation of reliability, innovation, and customer-centric service.
                </p>
                <p className="text-xl text-log-gray-700">
                  Our journey has been marked by continuous improvement and technological advancement, including the
                  implementation of cutting-edge 3D AI-assisted measurement systems that revolutionize cargo handling
                  accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-log-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-16 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="text-white">{stat.icon}</div>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-16 py-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="w-[198px] h-2 bg-[linear-gradient(90.00deg,_rgb(17,_66,_107),rgb(17,_66,_107)_44.807%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
              {values.map((value, index) => (
                <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-log-blue-950 mb-4">{value.title}</h3>
                  <p className="text-xl text-log-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="relative max-w-[1440px] h-[543px] mx-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070")' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
            <div className="max-w-5xl flex flex-col items-center justify-center gap-10 text-white text-center">
              <h3 className="lg:text-4xl text-2xl font-bold">
                Join Us in Shaping the Future of Global Logistics
              </h3>
              <div className="max-w-[934px] w-full h-2 bg-[linear-gradient(90.00deg,_rgba(255,_255,_255,_0),rgb(255,_255,_255)_26.787%,rgb(255,_255,_255)_62.827%,rgba(255,_255,_255,_0)_93.51%)]"></div>
              <p className="text-xl">
                Experience the difference of working with a logistics partner who combines global reach with local expertise,
                innovative technology with personal service, and efficiency with reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
