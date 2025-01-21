import { IconTruckLoading } from "@tabler/icons-react";
import { IconHeartHandshake } from "@tabler/icons-react";
import { IconPlane } from "@tabler/icons-react";
import { IconRobotFace } from "@tabler/icons-react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { IconTruck } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import Testimonails from "./testimonails";

const services = [
  {
    icone: <IconTruckLoading stroke={2} className="w-10 h-10" />,
    title: "Domestic Freight Services",
    desc: "Seamless and efficient solutions for transporting goods across the country. Tailored to fit your business needs with maximum reliability.",
  },
  {
    icone: <IconHeartHandshake stroke={2} className="w-10 h-10" />,
    title: "Logistics Consulting",
    desc: "Expert advice to optimize your supply chain, reduce costs, and improve operational efficiency.",
  },
  {
    icone: <IconPlane stroke={2} className="w-10 h-10" />,
    title: "Global Shipping Solutions",
    desc: "Swift and secure international shipping to over 200 countries, ensuring timely and hassle-free deliveries.",
  },
  {
    icone: <IconRobotFace stroke={2} className="w-10 h-10" />,
    title: "E-Commerce Fulfillment",
    desc: "Comprehensive solutions for online retailers, including FBA forwarding and streamlined deliveries to fulfillment centers.",
  },
];

const companies = [
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: "Sign Up and Create Your Shipping Label",
  },
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: "Drop Off or Arrange Pickup",
  },
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: "Select Your Payment Method",
  },
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: "Track Your Shipments in Real-Time",
  },
];

const privileges = [
  {
    icone: <IconTruck stroke={2} className="w-14 h-14" />,
    title: "Reliable Delivery",
    desc: "Count on us to deliver your goods on time, every time, with the utmost care and professionalism.",
  },
  {
    icone: <IconUsersGroup stroke={2} className="w-14 h-14" />,
    title: "Dedicated Support",
    desc: "Our team is here to assist you with personalized service and solutions tailored to your logistics needs.",
  },
  {
    icone: <IconSettings stroke={2} className="w-14 h-14" />,
    title: "Easy-to-Use Platform",
    desc: "Our user-friendly platform allows you to manage all your shipping needs in one convenient place.",
  },
];

export default function Main() {
  return (
    <div>
      <section>
        <div
          className="relative max-w-[1440px] h-[543px] mx-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/img/bg-banner.png")' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="text-white flex flex-col gap-2">
              <h3 className="text-2xl">CONNECTING YOUR WORLD WITH LOGISTICS SOLUTIONS</h3>
              <h1 className="text-5xl font-bold leading-[62px]">
                Simplifying your business operations with innovative and cost-effective delivery services.
              </h1>
              <p className="text-xl">Reliable, efficient, and cost-effective logistics solutions.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-16 py-20 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <div className="w-[198px] h-2 bg-[linear-gradient(90.00deg,_rgb(17,_66,_107),rgb(17,_66,_107)_44.807%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <div className="flex flex-wrap items-center justify-between gap-10 pt-10">
              {services.map((service, index) => (
                <div key={index} className="flex w-[490px] gap-10">
                  <div className="text-log-blue-950">{service.icone}</div>
                  <div className="flex flex-col gap-2 text-xl">
                    <div className="font-semibold text-log-blue-950">{service.title}</div>
                    <div className="text-log-gray-700">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="relative max-w-[1440px] h-[543px] mx-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/img/bg-banner-2.png")' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-5xl flex flex-col items-center justify-center gap-10 text-white text-center">
              <h3 className="lg:text-4xl text-2xl lg:pt-0 pt-10 font-bold">
              Explore our wide range of logistics solutions designed to meet your business needs and exceed expectations.
              </h3>
              <div className="max-w-[934px] w-full h-2 bg-[linear-gradient(90.00deg,_rgba(255,_255,_255,_0),rgb(255,_255,_255)_26.787%,rgb(255,_255,_255)_62.827%,rgba(255,_255,_255,_0)_93.51%)]"></div>
              <p className="text-xl">
              Simplify your shipping process and focus on growing your business. Let us handle the logistics for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-16 py-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">How to Ship with Prosperous River Union Limited?</h2>
            <div className="max-w-[493px] w-full h-2 bg-[linear-gradient(90.00deg,_rgb(17,_66,_107),rgb(17,_66,_107)_44.807%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <h5 className="text-xl text-log-gray-700 font-medium pt-4">
              Streamline your international shipping with us and save valuable time and resources.
            </h5>
            <div className="flex flex-wrap items-center justify-between gap-10 pt-10">
              {companies.map((company, index) => (
                <div key={index} className="flex w-[490px] justify-center items-center gap-10">
                  <div className="text-log-blue-950">{company.icone}</div>
                  <div className="font-semibold text-xl text-log-blue-950">{company.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="relative max-w-[1440px] h-[543px] mx-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/img/bg-banner-3.png")' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-5xl flex flex-col items-center justify-center gap-10 text-white text-center">
              <div className="flex flex-col gap-10">
                <h3 className="lg:text-4xl text-2xl lg:pt-0 pt-10 font-bold">Why Choose Us?</h3>
                <div className="max-w-[934px] w-full h-2 bg-[linear-gradient(90.00deg,_rgba(255,_255,_255,_0),rgb(255,_255,_255)_26.787%,rgb(255,_255,_255)_62.827%,rgba(255,_255,_255,_0)_93.51%)]"></div>
                <p className="text-xl">
                  Join us today and experience exceptional logistics services tailored to your business.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-10 pt-10">
                {privileges.map((privilege, index) => (
                  <div key={index} className="w-[263px] flex flex-col items-center justify-center gap-4 ">
                    <div className="text-white">{privilege.icone}</div>
                    <div className="font-semibold text-xl text-white">{privilege.title}</div>
                    <div className="text-lg text-white/70 text-center">{privilege.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonails />
    </div>
  );
}
