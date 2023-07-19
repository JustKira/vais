import { cn } from "../../../libs/utils";

interface ParallaxSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  src: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  src,
  ...rest
}) => {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-transparent min-h-[500px] text-white">
        <section
          className={cn(
            `container flex flex-col gap-4 justify-between items-center `,
            className
          )}
          {...rest}
        >
          {children}
        </section>
      </div>
      <img
        className="fixed top-0 left-0 object-cover w-screen h-screen -z-10"
        alt="parralex image"
        src={src}
      />
    </>
  );
};

interface ParralexSectionTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

const ParralexSectionTitle: React.FC<ParralexSectionTitleProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1 className={cn(`text-5xl font-light text-center`, className)} {...rest}>
      {children}
    </h1>
  );
};

interface ParralexSectionDescriptionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}
const ParralexSectionDescription: React.FC<ParralexSectionDescriptionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn(`text-base text-center font-extralight`, className)}
      {...rest}
    >
      {children}
    </p>
  );
};
export { ParallaxSection, ParralexSectionTitle, ParralexSectionDescription };
