import type { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "~/hooks/use-media-query";

type Props = {
	data: ChartData<"bar", (number | [number, number] | null)[], unknown>;
};

const BarChart = ({ data }: Props) => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<Bar
			data={data}
			width={"100%"}
			height={isMobile ? "100%" : 25}
			className="lg:mt-5 p-2 lg:p-0"
			options={{
				maintainAspectRatio: !isMobile,
				plugins: {
					title: {
						display: false,
					},
					legend: {
						display: false,
					},
				},
			}}
		/>
	);
};

export default BarChart;
