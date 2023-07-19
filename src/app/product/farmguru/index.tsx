import { Button } from "../../../components/ui/buttons";
import { HeroSection, HeroTitle } from "../../../components/ui/hero";
import {
  BasicSection,
  BasicSectionContent,
  BasicSectionDescription,
  BasicSectionTitle,
} from "../../../components/ui/sections/basic-section";

const FarmGuru = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <HeroSection background="/temp.png">
          <HeroTitle>Welcome to Climate-Smart Agriculture</HeroTitle>
          <HeroTitle secondary>
            FarmGuru: A Comprehensive Climate-Smart Ag Platform
          </HeroTitle>
        </HeroSection>
      </div>
      <div className="flex flex-col gap-1 bg-white pb-14">
        <BasicSection>
          <BasicSectionContent className="xl:w-full">
            <BasicSectionTitle>Future Farming</BasicSectionTitle>
            <BasicSectionDescription>
              Powered by our pioneering VFP and SSM technologies, VAIS FarmGuru
              is the most comprehensive digital agriculture platform in the
              market that specifically targets climate-smart agriculture,
              offering farmers the tools and features necessary to thrive in a
              changing climate while ensuring sustainable and resilient farming
              practices.
            </BasicSectionDescription>
          </BasicSectionContent>
        </BasicSection>
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>Surface Soil Moisture Sensing</BasicSectionTitle>
            <BasicSectionDescription>
              FarmGuru enables you to save water by telling you exactly when,
              where, and how much water is needed. It will provide you with
              regular irrigation schedule and will notify you of irrigation
              times. No more ...
            </BasicSectionDescription>
            <Button variant={"outline"} className="w-fit">
              Learn More
            </Button>
          </BasicSectionContent>
          <img
            src="/farmguru/image_1.png"
            className="w-[40%]"
            alt="vfp showcase image"
          />
        </BasicSection>
        <BasicSection reverse>
          <BasicSectionContent>
            <BasicSectionTitle>Surface Soil Moisture Sensing</BasicSectionTitle>
            <BasicSectionDescription>
              FarmGuru is an advanced agricultural tool that detects crop
              stresses early, including diseases, pests, and irrigation issues.
              It offers risk indicators and daily updates to guide prompt
              action. The application assesses crop health, growth...
            </BasicSectionDescription>
            <Button variant={"outline"} className="w-fit">
              Learn More
            </Button>
          </BasicSectionContent>
          <img
            src="/farmguru/image_3.png"
            className="w-[40%]"
            alt="vfp showcase image"
          />
        </BasicSection>
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>Surface Soil Moisture Sensing</BasicSectionTitle>
            <BasicSectionDescription>
              FarmGuru generates scout maps, guiding proper farm inspections
              with GPS and daily 'scouting heatmaps.' It tracks and logs
              problems until resolution. The tool identifies...
            </BasicSectionDescription>
            <Button variant={"outline"} className="w-fit">
              Learn More
            </Button>
          </BasicSectionContent>
          <img
            src="/farmguru/image_2.png"
            className="w-[40%]"
            alt="vfp showcase image"
          />
        </BasicSection>
      </div>
    </div>
  );
};

export default FarmGuru;
