import { cn } from "../../libs/utils";

interface HeroSectionProps {
  background: string;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

/**
 * @param background - image path in plugic folder /path/image @type string
 *
 * @param fullHeight - will use full height of screen if set to true @type boolean
 *
 * @returns JSX Starting Section with big customizable background size with dotted grad bellow section
 *
 */

const HeroSection: React.FC<HeroSectionProps> = ({
  background,
  children,
  fullHeight,
}) => {
  return (
    <div className="bg-white">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={`flex flex-col space-y-4  bg-cover bg-no-repeat justify-center items-center text-white ${
          fullHeight ? "h-screen" : "h-[75vh]"
        }`}
      >
        {children}
      </div>
      <div className="relative w-full h-16 bg-dotted-spacing-2 bg-dotted-vais-pri">
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white via-white/75 to-white/50" />
      </div>
    </div>
  );
};

interface HeroHeader1Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  secondary?: boolean;
}

/**
 * Styled H1 for Header usage
 */

const HeroTitle: React.FC<HeroHeader1Props> = ({
  children,
  className,
  secondary,
  ...rest
}) => {
  if (secondary) {
    return (
      <h2
        className={cn(`text-lg xl:text-2xl font-light text-center`, className)}
        {...rest}
      >
        {children}
      </h2>
    );
  }
  return (
    <h1
      className={cn(`text-3xl xl:text-5xl font-medium text-center`, className)}
      {...rest}
    >
      {children}
    </h1>
  );
};

export { HeroSection, HeroTitle };
