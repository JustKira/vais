import { useState, useEffect, useRef, MouseEventHandler } from "react";

type CallbackFunction = () => void;

export default function useHoverInterval(
  callback: CallbackFunction,
  intervalTime: number
): [MouseEventHandler<HTMLDivElement>, MouseEventHandler<HTMLDivElement>] {
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    function handleInterval() {
      if (!isHovered) {
        callback();
      }
    }

    intervalRef.current = window.setInterval(handleInterval, intervalTime);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [callback, intervalTime, isHovered]);

  const handleHover: MouseEventHandler<HTMLDivElement> = () => {
    setIsHovered(true);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  const handleHoverEnd: MouseEventHandler<HTMLDivElement> = () => {
    setIsHovered(false);
    intervalRef.current = window.setInterval(callback, intervalTime);
  };

  return [handleHover, handleHoverEnd];
}
