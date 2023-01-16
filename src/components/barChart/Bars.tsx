import { ScaleBand, ScaleLinear } from "d3";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface BarsProps {
  data: { label: string; value: number }[];
  height: number;
  scaleX: ScaleBand<string>;
  scaleY: ScaleLinear<number, number, never>;
}

function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  const { unit } = useSelector((state: RootState) => state.dataSelection);

  const Bar = (value: number, label: string) => {
    if (scaleY.domain()[0] < 0) {
      return (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={value < 0 ? scaleY(0) : scaleY(value)}
          width={scaleX.bandwidth()}
          height={
            value < 0
              ? scaleY(value) - scaleY(0)
              : height - scaleY(value) - scaleY(0)
          }
          fill={value < 0 ? "#1A6079" : "#A81F0D"}
          style={{ transition: "all 0.5s ease" }}
        />
      );
    } else {
      return (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="#A81F0D"
          style={{ transition: "all 0.5s ease" }}
        />
      );
    }
  };

  return (
    <>
      {data.map(({ value, label }) => (
        <Tooltip title={`${value} ${unit}`} placement="top">
          {Bar(value, label)}
        </Tooltip>
      ))}
    </>
  );
}

export default Bars;
