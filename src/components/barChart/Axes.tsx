import { useEffect, useRef } from "react";
import { axisBottom, axisLeft, ScaleBand, ScaleLinear, select } from "d3";

interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
  width: number;
}

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale, width }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current)
        .transition()
        .call(axisLeft(scale).tickSize(-width).ticks(5));
    }
  }, [scale, width]);

  return <g ref={ref} />;
}

export { AxisBottom, AxisLeft };
