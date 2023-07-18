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
    <div className="flex items-center justify-center w-full py-12 bg-white">
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
      className={cn(`flex flex-col space-y-4 w-3/4 xl:w-1/2`, className)}
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
      className={cn(`text-4xl font-light text-vais-pri `, className)}
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
        `text-base leading-loose text-gray-500 text-justify`,
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
  > {}
const BasicSectionImage = forwardRef<HTMLImageElement, BasicSectionImageProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(
          `xl:w-[500px] xl:h-[350px] w-3/4 object-cover object-center text-base leading-loose text-gray-500`,
          className
        )}
        {...rest}
      >
        {children}
      </img>
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
