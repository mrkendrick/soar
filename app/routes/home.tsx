import BalanceHistory from "~/components/balance-history";
import Cards from "~/components/cards";
import ExpenseStatistics from "~/components/expense-statistics";
import QuickTransfer from "~/components/quick-transfer";
import RecentTransactions from "~/components/recent-transaction";
import WeeklyActivity from "~/components/weekly-activity";

export function meta() {
	return [
		{ title: "Soar" },
		{ name: "description", content: "Created With React Router Vite" },
	];
}

export default function Home() {
	return (
		<div className="lg:px-10 py-6 flex flex-col space-y-10">
			<div className="flex lg:hidden flex-col space-y-8">
				<div className="flex items-center justify-between px-10 lg:pr-0">
					<span className="text-xl font-semibold">My Cards</span>
					<span className="font-semibold cursor-pointer">See All</span>
				</div>

				<section className="flex flex-col lg:flex-row items-stretch pl-10 space-x-10 overflow-x-scroll">
					<Cards />
				</section>

				<div className="px-10">
					<RecentTransactions />
				</div>
			</div>

			<section className="hidden lg:flex flex-row items-stretch space-x-10">
				<Cards />
				<RecentTransactions />
			</section>

			<div className="flex flex-col lg:flex-row px-10 lg:px-0 items-stretch space-y-10 lg:space-y-0 lg:space-x-10 h-fit">
				<WeeklyActivity />
				<ExpenseStatistics />
			</div>

			<section className="flex flex-col space-y-5 lg-space-y-0 lg:flex-row px-10 lg:px-0 items-stretch lg:space-x-10">
				<QuickTransfer />
				<BalanceHistory />
			</section>
		</div>
	);
}
