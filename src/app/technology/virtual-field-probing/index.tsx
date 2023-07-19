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
import { NewsBar } from "../../../components/ui/newsbar";
import { IconContainer } from "../../../components/ui/icons";
const VirtualFieldProbing = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <HeroSection background="/temp.png">
          <HeroTitle>Pioneering Technology</HeroTitle>
          <HeroTitle secondary>VAIS Virtual Field Probing (VFP)</HeroTitle>
        </HeroSection>
      </div>
      <div className="flex flex-col gap-8 bg-white pb-14">
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>
              What is Virtual Field Probing (VFP)
            </BasicSectionTitle>
            <BasicSectionDescription>
              Virtual Field Probing (VFP) is our novel, patent-pending
              satellite-enabled sensing technology where sophisticated
              artificial intelligence/deep learning models are applied to the
              plethora of complex, raw satellite data produced by tens of
              satellites to attain ground-level insights and facilitate reliable
              predictions. VFP intelligently exploits petabytes of heterogenous,
              but complementary, multi-modal/resolution data (electro-optical
              and synthetic aperture radar – SAR) acquired from both commercial
              and free satellite constellations (ESA, NASA, JAXA, etc.) to make
              accurate observations, produce domain-relevant decisions and
              recommendations, and empower a wide array of innovative
              applications.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <div className="flex items-center justify-center w-full text-xl bg-white">
          <div className="container flex flex-col items-center xl:items-start">
            <BasicSectionTitle>VFP Features</BasicSectionTitle>
            <BasicSection className="justify-start gap-12 text-gray-600">
              <div className="flex flex-col w-3/4 gap-12 font-medium xl:w-full">
                <IconContainer
                  icon={
                    <BsFillGearFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="ZERO in-field equipment or ground devices needed"
                />
                <IconContainer
                  icon={
                    <RiDashboard3Fill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Weather resilient and not hindered by rain or cloud coverage"
                />
                <IconContainer
                  icon={
                    <MdCrisisAlert className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Provides observations with sensor-level accuracy"
                />
              </div>
              <div className="flex flex-col w-3/4 gap-12 xl:w-full">
                <IconContainer
                  icon={
                    <RiMoneyDollarCircleFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Low-cost and highly-scalable"
                />
                <IconContainer
                  icon={
                    <RiWaterFlashFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Enables sensor-free surface and sub-surface exploration"
                />
                <IconContainer
                  icon={
                    <BsFillBrightnessHighFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Works 365 days/year in any place on planet Earth"
                />
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
            <BasicSectionTitle>VFP in Precision Agriculture</BasicSectionTitle>
            <BasicSectionDescription>
              Existing crop monitoring technologies each suffer from a number of
              inherent limitations including the need for field devices that are
              expensive to acquire and difficult to scale (sensor-based
              approaches), complex logistics, limited operational duration and
              high cost (aircraft/drone-based approaches), and weather
              susceptibility and low spatial/temporal resolutions
              (satellite-based approaches). VFP addresses most of these
              limitations while providing highly-scalable solution for
              monitoring crop water needs, growth, biomass, stresses, nutrient
              distribution, and yield, among others.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>

        <div className="font-light">
          <NewsBar text={"Additional VFP Applications and Industries"}>
            <IconContainer
              className="mx-20"
              icon={
                <BsFillGearFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Environmental Monitoring"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiDashboard3Fill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Sustainability"
            />
            <IconContainer
              className="mx-20"
              icon={
                <FaLeaf className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Socioeconomic Mapping"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiMoneyDollarCircleFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Security and Surveillance"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Oil and Gas"
            />
            <IconContainer
              className="mx-20"
              icon={
                <BsFillBrightnessHighFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Global SaaS products"
            />
          </NewsBar>
        </div>
      </div>
    </div>
  );
};

export default VirtualFieldProbing;
