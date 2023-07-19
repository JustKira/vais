import { DottedSeparator } from "../../../components/ui/dotted-seperator";
import { HeroSection, HeroTitle } from "../../../components/ui/hero";
import {
  BasicSection,
  BasicSectionContent,
  BasicSectionDescription,
  BasicSectionImage,
  BasicSectionTitle,
} from "../../../components/ui/sections/basic-section";

import { FaLeaf, FaWarehouse } from "react-icons/fa";
import { WiTrain } from "react-icons/wi";
import { RiWaterFlashFill } from "react-icons/ri";
import {
  AiFillAlert,
  AiFillDollarCircle,
  AiFillDashboard,
} from "react-icons/AI";
const VirtualFieldProbing = () => {
  const bulletPoints = [
    {
      i: <WiTrain className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />,
      t: "ZERO in-field equipment or ground devices needed",
    },
    {
      i: (
        <AiFillDashboard className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
      ),
      t: "Weather resilient and not hindered by rain or cloud coverage",
    },
    {
      i: <AiFillAlert className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />,
      t: "Provides observations with sensor-level accuracy",
    },
    {
      i: (
        <AiFillDollarCircle className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
      ),
      t: "Low-cost and highly-scalable",
    },
    {
      i: (
        <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
      ),
      t: "Enables sensor-free surface and sub-surface exploration",
    },
    {
      i: <FaWarehouse className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />,
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
    <main className="flex flex-col space-y-8">
      <HeroSection background="/temp.png">
        <HeroTitle>Pioneering Technology</HeroTitle>
        <HeroTitle secondary>VAIS Virtual Field Probing (VFP)</HeroTitle>
      </HeroSection>
      <BasicSection>
        <BasicSectionContent>
          <BasicSectionTitle>
            What is Virtual Field Probing (VFP)
          </BasicSectionTitle>
          <BasicSectionDescription>
            Virtual Field Probing (VFP) is our novel, patent-pending
            satellite-enabled sensing technology where sophisticated artificial
            intelligence/deep learning models are applied to the plethora of
            complex, raw satellite data produced by tens of satellites to attain
            ground-level insights and facilitate reliable predictions. VFP
            intelligently exploits petabytes of heterogenous, but complementary,
            multi-modal/resolution data (electro-optical and synthetic aperture
            radar – SAR) acquired from both commercial and free satellite
            constellations (ESA, NASA, JAXA, etc.) to make accurate
            observations, produce domain-relevant decisions and recommendations,
            and empower a wide array of innovative applications.
          </BasicSectionDescription>
        </BasicSectionContent>
        <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
      </BasicSection>

      <div className="flex items-center justify-center w-full text-xl">
        <div className="container flex flex-col items-center xl:items-start">
          <BasicSectionTitle>VFP Features</BasicSectionTitle>
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

      <DottedSeparator />
      <BasicSection>
        <BasicSectionContent>
          <BasicSectionTitle>VFP in Precision Agriculture</BasicSectionTitle>
          <BasicSectionDescription>
            Existing crop monitoring technologies each suffer from a number of
            inherent limitations including the need for field devices that are
            expensive to acquire and difficult to scale (sensor-based
            approaches), complex logistics, limited operational duration and
            high cost (aircraft/drone-based approaches), and weather
            susceptibility and low spatial/temporal resolutions (satellite-based
            approaches). VFP addresses most of these limitations while providing
            highly-scalable solution for monitoring crop water needs, growth,
            biomass, stresses, nutrient distribution, and yield, among others.
          </BasicSectionDescription>
        </BasicSectionContent>
        <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
      </BasicSection>

      <div className="flex flex-col items-center justify-center w-full gap-4">
        <BasicSectionTitle>
          Additional VFP Applications and Industries
        </BasicSectionTitle>
        <div className="w-full py-2 text-2xl">
          <div className="relative flex overflow-x-hidden ">
            <div className="absolute top-0 bottom-0 z-50 w-1/3 h-full bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 z-50 w-1/3 h-full bg-gradient-to-l from-white to-transparent"></div>
            <div className="flex py-2 animate-marquee whitespace-nowrap">
              <div className="flex items-center gap-4 mx-10 font-light">
                <FaWarehouse className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                ,
                <BulletPointIcon text={"Environmental Monitoring"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <AiFillDashboard className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Sustainability"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <FaLeaf className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Socioeconomic Mapping"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <AiFillDollarCircle className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Security and Surveillance"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Oil and Gas"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <FaWarehouse className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Global SaaS products"} />
              </div>
            </div>

            <div className="absolute top-0 flex py-2 animate-marquee2 whitespace-nowrap">
              <div className="flex items-center gap-4 mx-10 font-light">
                <FaWarehouse className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                ,
                <BulletPointIcon text={"Environmental Monitoring"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <AiFillDashboard className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Sustainability"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <FaLeaf className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Socioeconomic Mapping"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <AiFillDollarCircle className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Security and Surveillance"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Oil and Gas"} />
              </div>
              <div className="flex items-center gap-4 mx-10 font-light">
                <FaWarehouse className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
                <BulletPointIcon text={"Global SaaS products"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VirtualFieldProbing;
