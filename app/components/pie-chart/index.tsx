import type { ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";

type Props = {
	data: ChartData<"pie", (number | [number, number] | null)[], unknown>;
};

const PieChart = ({ data }: Props) => {
	return (
		<Pie
			data={data}
			width={"100%"}
			height={"100%"}
			options={{
				plugins: {
					title: {
						display: false,
					},
					legend: {
						display: false,
						position: "top",
					},
				},
			}}
		/>
	);
};

export default PieChart;
