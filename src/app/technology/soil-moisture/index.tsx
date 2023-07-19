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
import { IconContainer } from "../../../components/ui/icons";
import { NewsBar } from "../../../components/ui/newsbar";
const SoilMoister = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <HeroSection background="/temp.png">
          <HeroTitle>From Surface Level to Rootzone</HeroTitle>
          <HeroTitle secondary>Soil Moisture Monitoring Technology</HeroTitle>
        </HeroSection>
      </div>
      <div className="flex flex-col gap-8 bg-white pb-14">
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
              <div className="flex flex-col w-3/4 gap-12 font-medium xl:w-full">
                <IconContainer
                  icon={
                    <BsFillGearFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Rootzone moisture estimation accuracy with <4.0% RMS error"
                />
                <IconContainer
                  icon={
                    <RiDashboard3Fill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Rootzone moisture data for depths up to 100 centimeters"
                />
                <IconContainer
                  icon={
                    <MdCrisisAlert className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Historical soil moisture data (selected regions)"
                />
              </div>
              <div className="flex flex-col w-3/4 gap-12 xl:w-full">
                <IconContainer
                  icon={
                    <BsFillGearFill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Surface-level moisture data at up to 10-meter resolution"
                />
                <IconContainer
                  icon={
                    <RiDashboard3Fill className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Regular data updates up to hourly rootzone moisture information"
                />
                <IconContainer
                  icon={
                    <MdCrisisAlert className="flex-shrink-0 mx-2 text-5xl text-vais-pri" />
                  }
                  text="Continuous operations and global coverage"
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

        <div className="font-light">
          <NewsBar text={"Global Soil Moisture Engine Applications"}>
            <IconContainer
              className="mx-20"
              icon={
                <BsFillGearFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Irrigation scheduling and yield predication"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiDashboard3Fill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Drought monitoring and impact assessment"
            />
            <IconContainer
              className="mx-20"
              icon={
                <FaLeaf className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Water quota allocation and consumption monitoring"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiMoneyDollarCircleFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Flood prediction and monitoring"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiWaterFlashFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Regional and global food security programs"
            />

            <IconContainer
              className="mx-20"
              icon={
                <BsFillGearFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Agricultural commodity trading"
            />
            <IconContainer
              className="mx-20"
              icon={
                <RiDashboard3Fill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Crop insurance programs (especially for smallholders)"
            />
            <IconContainer
              className="mx-20"
              icon={
                <BsFillBrightnessHighFill className="flex-shrink-0 mx-2 text-4xl text-vais-pri" />
              }
              text="Climate studies and projections"
            />
          </NewsBar>
        </div>
      </div>
    </div>
  );
};

export default SoilMoister;
