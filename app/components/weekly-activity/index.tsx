import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { getWeeklyActivities } from "~/lib/api/weekly-activity.api";
import { lazy, Suspense } from "react";
import type { ChartData } from "chart.js";
const BarChart = lazy(() => import("../bar-chart"));

const WeeklyActivity = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["weekly-activity"],
		queryFn: getWeeklyActivities,
	});

	const barChartData: ChartData<
		"bar",
		(number | [number, number] | null)[],
		unknown
	> = {
		labels: data ? [...data.data.data.map((d) => d.weekday)] : [],
		datasets: [
			{
				label: "Withdraw",
				data: data ? [...data.data.data.map((d) => d.withdraw)] : [],
				backgroundColor: "#232323",
				borderWidth: 1,
				borderRadius: 50,
			},
			{
				label: "Deposit",
				data: data ? [...data.data.data.map((d) => d.deposit)] : [],
				backgroundColor: "#396AFF",
				borderWidth: 1,
				borderRadius: 50,
			},
		],
	};

	return (
		<section className="grow w-full flex flex-col space-y-8">
			<span className="text-xl font-semibold">Weekly Activity</span>

			{isLoading && <Skeleton className="bg-gray-500 w-full h-52" />}

			{data && (
				<div className="rounded-4xl bg-white p-6 lg:p-8 pb-5 h-80 lg:h-fit w-full">
					<div className="flex items-center justify-end space-x-10">
						<div className="flex items-center space-x-3">
							<div className="bg-[#396AFF] size-5 rounded-full" />
							<span className="text-[#718EBF]">Deposit</span>
						</div>
						<div className="flex items-center space-x-3">
							<div className="bg-[#232323] size-5 rounded-full" />
							<span className="text-[#718EBF]">Withdraw</span>
						</div>
					</div>

					{data && (
						<Suspense>
							<BarChart data={barChartData} />
						</Suspense>
					)}
				</div>
			)}
		</section>
	);
};

export default WeeklyActivity;
