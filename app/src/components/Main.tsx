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
    title: "Free Domestic Transfer",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis.",
  },
  {
    icone: <IconHeartHandshake stroke={2} className="w-10 h-10" />,
    title: "Free Consulting",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis.",
  },
  {
    icone: <IconPlane stroke={2} className="w-10 h-10" />,
    title: "Express Service",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis.",
  },
  {
    icone: <IconRobotFace stroke={2} className="w-10 h-10" />,
    title: "FBA Forwarding Service",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis.",
  },
];

const companies = [
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: "Sign Up and Create a Shipping Label",
  },
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: " Get Your Shipment to Kargopass",
  },
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: " Payment options ",
  },
  {
    icone: <IconArrowUpRight stroke={2} className="w-10 h-10" />,
    title: "Cargo Tracking",
  },
];

const privileges = [
  {
    icone: <IconTruck stroke={2} className="w-14 h-14" />,
    title: "Fast service",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. ",
  },
  {
    icone: <IconUsersGroup stroke={2} className="w-14 h-14" />,
    title: "Membership",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. ",
  },
  {
    icone: <IconSettings stroke={2} className="w-14 h-14" />,
    title: "Functional Interface",
    desc: "Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. ",
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
              <h3 className="text-2xl">MANAGE FROM ONE CENTER!</h3>
              <h1 className="text-5xl font-bold leading-[62px]">From Your Country to 220 Countries</h1>
              <p className="text-xl">You can send fast, high quality and reasonable prices.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-16 py-20 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Our services</h2>
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
                With 3D Artificial Intelligence Assisted Measurement, we guarantee you error-free, transparent
                measurement and pricing.
              </h3>
              <div className="max-w-[934px] w-full h-2 bg-[linear-gradient(90.00deg,_rgba(255,_255,_255,_0),rgb(255,_255,_255)_26.787%,rgb(255,_255,_255)_62.827%,rgba(255,_255,_255,_0)_93.51%)]"></div>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet
                at suspendisse amet facilisis. Elit pellentesque sed arcu enim id montes sem in. Morbi tortor habitant
                diam ornare aliquet enim lorem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-16 py-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">How do I ship with company name?</h2>
            <div className="max-w-[493px] w-full h-2 bg-[linear-gradient(90.00deg,_rgb(17,_66,_107),rgb(17,_66,_107)_44.807%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <h5 className="text-xl text-log-gray-700 font-medium pt-4">
              Send your overseas cargo with company name, save both time and prices.
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
                <h3 className="lg:text-4xl text-2xl lg:pt-0 pt-10 font-bold">Privileges</h3>
                <div className="max-w-[934px] w-full h-2 bg-[linear-gradient(90.00deg,_rgba(255,_255,_255,_0),rgb(255,_255,_255)_26.787%,rgb(255,_255,_255)_62.827%,rgba(255,_255,_255,_0)_93.51%)]"></div>
                <p className="text-xl">
                  Become a member now and get the best quality service at the most affordable prices.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-10 pt-10">
                {privileges.map((privilege, index) => (
                  <div key={index} className="w-[263px] flex flex-col items-center justify-center gap-8">
                    <div className="icon">{privilege.icone}</div>
                    <div className="text-white">
                      <h4 className="text-xl font-semibold">{privilege.title}</h4>
                      <p className="text-xl pt-2">{privilege.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-16 py-20">
          <div className="flex flex-col justify-center items-center gap-6">
            <h3 className="lg:text-4xl text-2xl lg:pt-0 pt-10 font-bold">customer feedback</h3>
            <div className="max-w-[600px] w-full h-2 bg-[linear-gradient(90.00deg,_rgba(17,_66,_107,_0),rgb(17,_66,_107)_26.787%,rgb(17,_66,_107)_62.827%,rgba(17,_66,_107,_0)_93.51%)]"></div>
            <p className="text-xl">
            Hear from our great client
            </p>
          </div>
          <div>
            <Testimonails />
          </div>
        </div>
      </section>
    </div>
  );
}
