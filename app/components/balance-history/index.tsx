import { useQuery } from "@tanstack/react-query";
import type { ChartData } from "chart.js";
import { lazy, Suspense } from "react";
import { getBalanceHistory } from "~/lib/api/balance-history.api";
import { Skeleton } from "../ui/skeleton";
const LineChart = lazy(() => import("../line-chart"));

const BalanceHistory = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["balance-history"],
		queryFn: getBalanceHistory,
	});

	const lineChartData: ChartData<
		"line",
		(number | [number, number] | null)[],
		unknown
	> = {
		labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
		datasets: [
			{
				label: "Balance History",
				data: data ? [...data.data.data.balance_history] : [],
				borderWidth: 3,
				borderColor: "rgba(24, 20, 243, 0.5)",
				tension: 0.4,
				fill: {
					target: "origin",
					above: "rgba(45, 96, 255, 0.5)",
					below: "rgba(45, 96, 255, 0)",
				},
				pointStyle: false,
			},
		],
	};

	return (
		<section className="grow w-full flex flex-col space-y-8">
			<span className="text-xl font-semibold">Balance History</span>

			{isLoading && <Skeleton className="bg-gray-500 w-full h-52" />}

			<div className="rounded-4xl bg-white p-6 lg:p-8 pb-5 h-80 lg:h-fit w-full">
				{data && (
					<Suspense>
						<LineChart data={lineChartData} />
					</Suspense>
				)}
			</div>
		</section>
	);
};

export default BalanceHistory;
