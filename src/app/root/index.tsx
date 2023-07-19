import React from "react";
import { HeroSection, HeroTitle } from "../../components/ui/hero";
import { Button } from "../../components/ui/buttons";
import useHoverInterval from "../../libs/hooks/useHoverInterval";
import {
  BasicSection,
  BasicSectionContent,
  BasicSectionDescription,
  BasicSectionImage,
  BasicSectionTitle,
} from "../../components/ui/sections/basic-section";
import {
  ParallaxSection,
  ParralexSectionDescription,
  ParralexSectionTitle,
} from "../../components/ui/sections/parallax-section";

const RootPage = () => {
  /**
   * @readonly Hero Section Page is used to track Hero Slider Status
   */
  const [hsp, setHsp] = React.useState<number>(0);
  const numHeaderSections = 3;
  const [handleHover, handleHoverEnd] = useHoverInterval(() => {
    if (hsp === numHeaderSections - 1) {
      setHsp(0);
    } else {
      setHsp(hsp + 1);
    }
  }, 5000);
  const HeaderSlider = () => {
    const JSX: JSX.Element[] = [];
    for (let i = 0; i < numHeaderSections; i++) {
      JSX.push(
        <Button
          variant={i === hsp ? "default" : "outline"}
          className="w-[7vw] h-2 rounded-full"
          onClick={() => {
            setHsp(i);
          }}
        ></Button>
      );
    }
    return (
      <div className="absolute bottom-0 flex items-center justify-center gap-4 -translate-x-1/2 -translate-y-full left-1/2">
        {JSX}
      </div>
    );
  };

  const Headers: JSX.Element[] = [
    <>
      <HeroSection fullHeight background="/temp.png">
        <HeroTitle>Sensor Free Exploration</HeroTitle>
        <HeroTitle secondary>Virtual Field Probing (VFP) Technology</HeroTitle>
        <div onMouseEnter={handleHover} onMouseLeave={handleHoverEnd}>
          <Button>Learn more</Button>
        </div>
        <HeaderSlider />
      </HeroSection>
    </>,
    <>
      <HeroSection fullHeight background="/temp.png">
        <HeroTitle>Welcome to Climate-Smart Agriculture</HeroTitle>
        <HeroTitle secondary>
          FarmGuru: A Comprehensive Climate-Smart Ag Platform
        </HeroTitle>
        <div onMouseEnter={handleHover} onMouseLeave={handleHoverEnd}>
          <Button>Learn more</Button>
        </div>
        <HeaderSlider />
      </HeroSection>
    </>,
    <>
      <HeroSection fullHeight background="/temp.png">
        <HeroTitle>From Surface Level to Rootzone</HeroTitle>
        <HeroTitle secondary>Soil Moisture Monitoring Technology</HeroTitle>
        <div onMouseEnter={handleHover} onMouseLeave={handleHoverEnd}>
          <Button>Learn more</Button>
        </div>
        <HeaderSlider />
      </HeroSection>
    </>,
  ];

  return (
    <main className="flex flex-col">
      <div className="bg-white">{Headers[hsp]}</div>
      <div className="flex flex-col gap-2 pb-4 bg-white">
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>
              What is Virtual Field Probing (VFP)
            </BasicSectionTitle>
            <BasicSectionDescription>
              Virtual Field Probing (VFP) is our novel, patent-pending
              satellite-enabled sensing technology where sophisticated
              artificial intelligence/deep learning models are applied to the
              plethora of complex
            </BasicSectionDescription>
            <Button className="font-light w-fit" variant={"outline"}>
              Learn more
            </Button>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <BasicSection reverse>
          <BasicSectionContent>
            <BasicSectionTitle>
              What is Virtual Field Probing (VFP)
            </BasicSectionTitle>
            <BasicSectionDescription>
              Virtual Field Probing (VFP) is our novel, patent-pending
              satellite-enabled sensing technology where sophisticated
              artificial intelligence/deep learning models are applied to the
              plethora of complex
            </BasicSectionDescription>
            <Button className="font-light w-fit" variant={"outline"}>
              Learn more
            </Button>
          </BasicSectionContent>
          <BasicSectionImage reverse src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
      </div>
      <ParallaxSection src="/temp.png">
        <ParralexSectionTitle>Lorem ipsum dolor sitx</ParralexSectionTitle>
        <ParralexSectionDescription>
          Lorem ipsum dolor sit amet consectetur. Eget quam massa odio placerat
          auctor lorem. Ornare a mi sed erat natoque habitasse morbi sed
          volutpat. Vel neque senectus nascetur dui bibendum vitae. Scelerisque
          gravida enim laoreet
        </ParralexSectionDescription>
        <Button variant={"white"}>Read more</Button>
      </ParallaxSection>
      <div className="bg-white">
        <BasicSection reverse className="mb-8">
          <BasicSectionContent>
            <BasicSectionTitle>
              What is Virtual Field Probing (VFP)
            </BasicSectionTitle>
            <BasicSectionDescription>
              Virtual Field Probing (VFP) is our novel, patent-pending
              satellite-enabled sensing technology where sophisticated
              artificial intelligence/deep learning models are applied to the
              plethora of complex
            </BasicSectionDescription>
            <Button className="font-light w-fit" variant={"outline"}>
              Learn more
            </Button>
          </BasicSectionContent>
          <BasicSectionImage reverse src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
      </div>
      <div className="bg-white">
        <section className="flex flex-col items-center justify-center w-full py-12 bg-dotted-spacing-3 bg-dotted-vais-pri/25">
          <div className="container flex flex-col p-4 bg-white">
            <BasicSectionTitle className="w-fit">Recent news</BasicSectionTitle>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-4 bg-white border-b border-gray-300">
                <h2 className="text-sm font-light text-gray-500">
                  olor sit amet consectetur.
                </h2>
                <h1 className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Faucibus cras nullam
                  tempor non mauris a senectus. Venenatis id venenatis
                  scelerisque at tincidunt morbi est.
                </h1>
              </div>
              <div className="flex flex-col gap-2 pb-4 bg-white border-b border-gray-300">
                <h2 className="text-sm font-light text-gray-500">
                  Lorem sit amet
                </h2>
                <h1 className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-sm font-light text-gray-500">
                  amet consectetur.
                </h2>
                <h1 className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Faucibus cras nullam
                  tempor non Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RootPage;
