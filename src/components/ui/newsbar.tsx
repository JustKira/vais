import { BasicSectionTitle } from "./sections/basic-section";

const NewsBar = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 py-10 bg-dotted-spacing-3 bg-dotted-vais-pri/50">
      <div className="absolute top-0 bottom-0 left-0 z-50 w-1/3 h-full bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 z-50 w-1/3 h-full bg-gradient-to-l from-white to-transparent"></div>
      <div className="flex flex-col items-center justify-center w-full gap-4 py-4 bg-white">
        <BasicSectionTitle className="text-center">{text}</BasicSectionTitle>
        <div className="w-full py-6 text-2xl">
          <div className="relative flex overflow-x-hidden ">
            <div className="flex py-2 animate-marquee whitespace-nowrap">
              {children}
            </div>

            <div className="absolute top-0 flex py-2 animate-marquee2 whitespace-nowrap">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsBar };
