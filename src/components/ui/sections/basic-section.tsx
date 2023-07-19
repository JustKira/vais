import { forwardRef } from "react";
import { cn } from "../../../libs/utils";

interface BasicSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  reverse?: boolean;
}

const BasicSection: React.FC<BasicSectionProps> = ({
  children,
  className,
  reverse,
  ...rest
}) => {
  return (
    <div className="flex items-center justify-center w-full py-10 bg-white">
      <section
        className={cn(
          `container flex gap-4 justify-between items-center ${
            reverse
              ? "flex-col-reverse xl:flex-row-reverse"
              : "flex-col-reverse xl:flex-row"
          }`,
          className
        )}
        {...rest}
      >
        {children}
      </section>
    </div>
  );
};

interface BasicSectionContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const BasicSectionContent: React.FC<BasicSectionContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(`flex flex-col gap-4 w-3/4 xl:w-1/2`, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

interface BasicSectionTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

const BasicSectionTitle: React.FC<BasicSectionTitleProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      className={cn(
        `text-2xl md:text-3xl xl:text-4xl font-light text-vais-pri text-start`,
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

interface BasicSectionDescriptionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}
const BasicSectionDescription: React.FC<BasicSectionDescriptionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn(
        `text-sm xl:text-lg leading-loose text-gray-500 text-start md:text-justify`,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

interface BasicSectionImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  reverse?: boolean;
}
const BasicSectionImage = forwardRef<HTMLImageElement, BasicSectionImageProps>(
  ({ children, className, reverse, ...rest }, ref) => {
    return (
      <div className="relative flex items-center justify-center">
        <img
          ref={ref}
          className={cn(
            `relative z-10 xl:w-[500px] xl:h-[350px] w-3/4 object-cover object-center text-base leading-loose text-gray-500`,
            className
          )}
          {...rest}
        >
          {children}
        </img>
        <div
          className={`xl:w-[500px] xl:h-[350px] w-3/4 absolute top-0 left-0 ${
            reverse ? "translate-x-6" : "-translate-x-6"
          } translate-y-6 bg-dotted-spacing-2 bg-dotted-vais-pri/50`}
        />
      </div>
    );
  }
);

export {
  BasicSection,
  BasicSectionTitle,
  BasicSectionDescription,
  BasicSectionContent,
  BasicSectionImage,
};
