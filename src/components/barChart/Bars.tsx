import { ScaleBand, ScaleLinear } from "d3";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getColor } from "../../helpers/getColor";

interface BarsProps {
  data: { label: string; values: { category: string; value: number }[] }[];
  height: number;
  scaleX: ScaleBand<string>;
  scaleY: ScaleLinear<number, number, never>;
}

function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  const { unit } = useSelector((state: RootState) => state.dataSelection);

  if (data.length === 0) return null;
  const groupSize = data[0].values.length;
  const barWidth = scaleX.bandwidth() / groupSize;

  const Bar = (
    value: number,
    label: string,
    index: number,
    category: string
  ) => {
    let trueHeight = height - scaleY(value);
    let trueY = scaleY(value);
    if (scaleY.domain()[0] < 0) {
      trueHeight =
        value < 0 ? scaleY(value) - scaleY(0) : scaleY(0) - scaleY(value);
      trueY = value < 0 ? scaleY(0) : scaleY(value);
    }
    return (
      <rect
        key={`bar-${label}`}
        x={(scaleX(label) || 0) + barWidth * index}
        y={trueY}
        width={barWidth - 1}
        height={trueHeight}
        fill={getColor(1, 0, 2, category) as any}
        style={{ transition: "all 0.5s ease", cursor: "default" }}
      />
    );
  };

  return (
    <>
      {data.map(({ values, label }) =>
        values.map(({ category, value }, index) => (
          <Tooltip title={`${value} ${unit}`} placement="top">
            {Bar(value, label, index, category)}
          </Tooltip>
        ))
      )}
    </>
  );
}

export default Bars;
