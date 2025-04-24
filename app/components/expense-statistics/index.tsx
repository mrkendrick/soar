import { useQuery } from "@tanstack/react-query";
import { getExpenseStats } from "~/lib/api/expense-stats.api";
import { Skeleton } from "../ui/skeleton";
import type { ChartData } from "chart.js";
import { lazy, Suspense } from "react";
const PieChart = lazy(() => import("../pie-chart"));

const ExpenseStatistics = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["expense-statistics"],
		queryFn: getExpenseStats,
	});

	const pieChartData: ChartData<
		"pie",
		(number | [number, number] | null)[],
		unknown
	> = {
		labels: data ? [...data.data.data.map((d) => d.name)] : [],
		datasets: [
			{
				label: "Expenses",
				data: data ? [...data.data.data.map((d) => d.value)] : [],
				backgroundColor: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
				spacing: 5,
				rotation: -90,
			},
		],
	};
	return (
		<section className="flex flex-col space-y-8">
			<span className="text-xl font-semibold">Expense Statistics</span>

			{isLoading && <Skeleton className="px-56 bg-gray-500 h-full" />}

			{data && (
				<div className="rounded-4xl p-8 bg-white flex flex-col items-center justify-center space-y-5 h-fit lg:h-96 w-full lg:w-80">
					<Suspense>
						<PieChart data={pieChartData} />
					</Suspense>
				</div>
			)}
		</section>
	);
};

export default ExpenseStatistics;
