import { HeroSection, HeroTitle } from "../../../components/ui/hero";
import {
  BasicSection,
  BasicSectionContent,
  BasicSectionDescription,
  BasicSectionImage,
  BasicSectionTitle,
} from "../../../components/ui/sections/basic-section";

import { FaLeaf } from "react-icons/fa";
import { BsFillBrightnessHighFill, BsFillGearFill } from "react-icons/bs";

import {
  RiWaterFlashFill,
  RiDashboard3Fill,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import { MdCrisisAlert } from "react-icons/md";
import {
  ParallaxSection,
  ParralexSectionDescription,
  ParralexSectionTitle,
} from "../../../components/ui/sections/parallax-section";
const SoilMoister = () => {
  const bulletPoints = [
    {
      i: (
        <BsFillGearFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
      ),
      t: "ZERO in-field equipment or ground devices needed",
    },
    {
      i: (
        <RiDashboard3Fill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
      ),
      t: "Weather resilient and not hindered by rain or cloud coverage",
    },
    {
      i: (
        <MdCrisisAlert className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
      ),
      t: "Provides observations with sensor-level accuracy",
    },
    {
      i: (
        <RiMoneyDollarCircleFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
      ),
      t: "Low-cost and highly-scalable",
    },
    {
      i: (
        <RiWaterFlashFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
      ),
      t: "Enables sensor-free surface and sub-surface exploration",
    },
    {
      i: (
        <BsFillBrightnessHighFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
      ),
      t: "Works 365 days/year in any place on planet Earth",
    },
  ];

  const BulletPointIcon = ({
    icon,
    text,
  }: {
    icon?: JSX.Element;
    text: string;
  }) => {
    return (
      <div className={"flex gap-4 items-center"}>
        {icon}
        {text}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 bg-white pb-14">
        <HeroSection background="/temp.png">
          <HeroTitle>From Surface Level to Rootzone</HeroTitle>
          <HeroTitle secondary>Soil Moisture Monitoring Technology</HeroTitle>
        </HeroSection>
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>Surface Soil Moisture Sensing</BasicSectionTitle>
            <BasicSectionDescription>
              VAIS Soil Moisture Monitoring (SMM) technology is a
              satellite-based product that provides surface level SM data for
              any point on Earth by fusing active and passive microwave sensing.
              The technology employs the advanced analytics provided in VAIS
              Virtual Field Probing to deliver high-accuracy surface soil
              moisture at up to 10m resolution. Unlike existing soil moisture
              products, our high-resolution data enables us to enable valuable
              solutions that cater to the requirements of numerous farmers
              globally, particularly smallholder farmers residing in arid and
              semi-arid regions.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <BasicSection reverse>
          <BasicSectionContent>
            <BasicSectionTitle>
              Rootzone Soil Moisture Monitoring
            </BasicSectionTitle>
            <BasicSectionDescription>
              The connection between rootzone and surface level soil moisture is
              conventionally achieved through data assimilation techniques that
              extrapolate surface level information to lower depths via flow
              models, empirical models, or correlation models. The majority of
              these methods need vertically dense soil profile measurement or
              simulation, rely on prior knowledge that is hard to acquire in
              practice, or make assumptions regarding soil temperature gradients
              along the optical depth. To solve this complex problem, VAIS SMM
              technology offers a unique approach that enables accurate
              estimation of rootzone soil moisture using deep learning models
              that combine surface level moisture data with soil information,
              in-situ measurements, elevation data, hydrological models, and
              meteorological models to compute actual soil moisture at depths up
              to 100 centimeters with accuracy comparable to ground SM sensors.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage reverse src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <div className="flex items-center justify-center w-full text-xl bg-white">
          <div className="container flex flex-col items-center xl:items-start">
            <BasicSectionTitle>
              Soil Moisture Monitoring (SMM) Technology Features
            </BasicSectionTitle>
            <BasicSection className="justify-start gap-12 text-gray-600">
              <div className="flex flex-col w-3/4 gap-12 xl:w-full">
                {bulletPoints.map((point, id) => {
                  if (id >= 3) {
                    return (
                      <div
                        className="flex items-center gap-4 font-medium"
                        key={id}
                      >
                        <BulletPointIcon text={point.t} icon={point.i} />
                      </div>
                    );
                  }
                  return <></>;
                })}
              </div>
              <div className="flex flex-col w-3/4 gap-12 xl:w-full">
                {bulletPoints.map((point, id) => {
                  if (id < 3) {
                    return (
                      <div
                        className="flex items-center gap-4 font-medium"
                        key={id}
                      >
                        <BulletPointIcon text={point.t} icon={point.i} />
                      </div>
                    );
                  }
                  return <></>;
                })}
              </div>
            </BasicSection>
          </div>
        </div>
      </div>

      <ParallaxSection src="/temp.png" mini>
        <ParralexSectionTitle>Lorem ipsum dolor sitx</ParralexSectionTitle>
        <ParralexSectionDescription>
          Lorem ipsum dolor sit amet consectetur. Eget quam massa odio placerat
          auctor lorem. Ornare a mi sed erat natoque habitasse morbi sed
          volutpat. Vel neque senectus nascetur dui bibendum vitae. Scelerisque
          gravida enim laoreet
        </ParralexSectionDescription>
      </ParallaxSection>

      <div className="flex flex-col gap-8 bg-white pt-14">
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>
              Irrigation Intelligence with VAIS SMM Technology
            </BasicSectionTitle>
            <BasicSectionDescription>
              Timely prediction of irrigation requirements is crucial for
              optimizing crop yield and minimizing water and energy resources.
              The information generated by VAIS SMM technology is employed by
              sophisticated irrigation-focused analytics that model the complex
              underlying processes affecting crop water needs. These analytics
              provide farmers with hourly irrigation recommendations with exact
              water requirements (when, where and how much) that are dynamically
              changing to accommodate the varying field and crop conditions,
              thus leading to irrigation water savings of up to 40% and improved
              yield.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>

        <div className="flex flex-col items-center justify-center w-full gap-4 py-12 bg-white">
          <BasicSectionTitle className="text-center">
            Additional SMM Technology Applications and Industries
          </BasicSectionTitle>
          <div className="w-full py-6 text-2xl">
            <div className="relative flex overflow-x-hidden ">
              <div className="absolute top-0 bottom-0 z-50 w-1/3 h-full bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-0 z-50 w-1/3 h-full bg-gradient-to-l from-white to-transparent"></div>
              <div className="flex py-2 animate-marquee whitespace-nowrap">
                <div className="flex items-center gap-4 mx-10 font-light">
                  <BsFillGearFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />

                  <BulletPointIcon text={"Environmental Monitoring"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <RiDashboard3Fill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Sustainability"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <FaLeaf className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Socioeconomic Mapping"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <RiMoneyDollarCircleFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Security and Surveillance"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Oil and Gas"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <BsFillBrightnessHighFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Global SaaS products"} />
                </div>
              </div>

              <div className="absolute top-0 flex py-2 animate-marquee2 whitespace-nowrap">
                <div className="flex items-center gap-4 mx-10 font-light">
                  <BsFillGearFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Environmental Monitoring"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <RiDashboard3Fill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Sustainability"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <FaLeaf className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Socioeconomic Mapping"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <RiMoneyDollarCircleFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Security and Surveillance"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Oil and Gas"} />
                </div>
                <div className="flex items-center gap-4 mx-10 font-light">
                  <BsFillBrightnessHighFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                  <BulletPointIcon text={"Global SaaS products"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilMoister;
