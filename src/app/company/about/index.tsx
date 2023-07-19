import { HeroSection, HeroTitle } from "../../../components/ui/hero";
import { NewsBar } from "../../../components/ui/newsbar";
import {
  BasicSection,
  BasicSectionContent,
  BasicSectionDescription,
  BasicSectionImage,
  BasicSectionTitle,
} from "../../../components/ui/sections/basic-section";
import {
  ParallaxSection,
  ParralexSectionDescription,
  ParralexSectionTitle,
} from "../../../components/ui/sections/parallax-section";

const About = () => {
  return (
    <div>
      <div className="bg-white">
        <HeroSection background="/temp.png">
          <HeroTitle>From Surface Level to Rootzone</HeroTitle>
          <HeroTitle secondary>Soil Moisture Monitoring Technology</HeroTitle>
        </HeroSection>
      </div>
      <div className="flex flex-col gap-8 bg-white pb-14">
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>Who We Are</BasicSectionTitle>
            <BasicSectionDescription>
              Visual and AI Solutions (VAIS) is a deep-tech company that was
              founded in 2020 as the culmination of many years of advanced R&D
              and practical project experience in the areas of visual computing,
              machine learning, remote sensing and big data engineering. VAIS is
              currently one of the leaders in precision agriculture and
              geospatial intelligence in Africa and the MENA region.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <BasicSection reverse>
          <BasicSectionContent>
            <BasicSectionTitle>Our Values</BasicSectionTitle>
            <BasicSectionDescription>
              Our key differentiating values are innovation, technical
              excellence, loyalty and team spirit. We take pride in our
              competency to create game-changing technologies and capacity to
              deliver them. We have a great confidence in our team and pursue a
              unique management style with emphasis on our nearly flat
              organizational structure that encourages collaboration and
              self-development while being committed to the company's goals and
              objectives.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage reverse src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
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
      <div className="flex flex-col gap-8 bg-white pb-14">
        <BasicSection>
          <BasicSectionContent>
            <BasicSectionTitle>Our Mission</BasicSectionTitle>
            <BasicSectionDescription>
              To push the limits of artificial intelligence technologies in
              order to enable innovative solutions and unlock new opportunities
              in the precision agriculture and geospatial intelligence markets.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <BasicSection reverse>
          <BasicSectionContent>
            <BasicSectionTitle>Our Vision</BasicSectionTitle>
            <BasicSectionDescription>
              AI-based technologies will have significant impact on our modern
              society and VAIS aspires to positively contribute to this ongoing
              transformation for a brighter and more inclusive future.
            </BasicSectionDescription>
          </BasicSectionContent>
          <BasicSectionImage reverse src="/bg.png" alt="vfp showcase image" />
        </BasicSection>
        <NewsBar text="Our Partners and Collaborations">
          <img
            alt="arc"
            src="/about/ARC.png"
            className="object-contain w-40 mx-12"
          />
          <img
            alt="arc"
            src="/about/CGIAR.png"
            className="object-contain w-40 mx-12"
          />
          <img
            alt="arc"
            src="/about/ESA.png"
            className="object-contain w-40 mx-12"
          />
          <img
            alt="arc"
            src="/about/Radiant.png"
            className="object-contain w-40 mx-12"
          />
          <img
            alt="arc"
            src="/about/Zindi.png"
            className="object-contain w-40 mx-12"
          />
          <img
            alt="arc"
            src="/about/GIZ.png"
            className="object-contain w-40 mx-12"
          />
          <img
            alt="arc"
            src="/about/OAF.png"
            className="object-contain w-40 mx-12"
          />
        </NewsBar>
      </div>
    </div>
  );
};

export default About;
