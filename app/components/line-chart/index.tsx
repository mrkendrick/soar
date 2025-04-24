import type { ChartData } from "chart.js";
import { Line } from "react-chartjs-2";
import { useMediaQuery } from "~/hooks/use-media-query";

type Props = {
	data: ChartData<"line", (number | [number, number] | null)[], unknown>;
};

const LineChart = ({ data }: Props) => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<Line
			data={data}
			width={"100%"}
			height={isMobile ? "100%" : 22}
			className="lg:mt-5 p-2 lg:p-0"
			options={{
				maintainAspectRatio: !isMobile,
				scales: {
					y: {
						beginAtZero: true,
					},
				},
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

export default LineChart;
