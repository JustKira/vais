import { cn } from "../../libs/utils";

interface IconContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: JSX.Element;
  text: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
  icon,
  text,
  className,
  ...rest
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...rest}>
      {icon}
      <h1 className="text-lg xl:text-xl ">{text}</h1>
    </div>
  );
};

export { IconContainer };
