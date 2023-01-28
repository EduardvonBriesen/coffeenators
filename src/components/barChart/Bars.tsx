import { ScaleBand, ScaleLinear } from "d3";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface BarsProps {
  data: { label: string; values: number[] }[];
  height: number;
  scaleX: ScaleBand<string>;
  scaleY: ScaleLinear<number, number, never>;
}

function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  const { unit } = useSelector((state: RootState) => state.dataSelection);

  if (data.length === 0 ) return null;
  const groupSize = data[0].values.length;
  const barWidth = scaleX.bandwidth() / groupSize;

  const Bar = (value: number, label: string, index: number) => {
    if (scaleY.domain()[0] < 0) {
      return (
        <rect
          key={`bar-${label}`}
          x={(scaleX(label) || 0) + barWidth * index}
          y={value < 0 ? scaleY(0) : scaleY(value)}
          width={barWidth -1}
          height={
            value < 0 ? scaleY(value) - scaleY(0) : scaleY(0) - scaleY(value)
          }
          fill={value < 0 ? "#1A6079" : "#A81F0D"}
          style={{ transition: "all 0.5s ease" }}
        />
      );
    } else {
      return (
        <rect
          key={`bar-${label}`}
          x={(scaleX(label) || 0) + barWidth * index}
          y={scaleY(value)}
          width={barWidth-1}
          height={height - scaleY(value)}
          fill="#A81F0D"
          style={{ transition: "all 0.5s ease" }}
        />
      );
    }
  };

  return (
    <>
      {data.map(({ values, label }) =>
        values.map((value, index) => (
          <Tooltip title={`${value} ${unit}`} placement="top">
            {Bar(value, label, index)}
          </Tooltip>
        ))
      )}
    </>
  );
}

export default Bars;
