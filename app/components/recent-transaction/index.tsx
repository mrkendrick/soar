import { useQuery } from "@tanstack/react-query";
import { getRecentTransactions } from "~/lib/api/recent-transactions.api";
import { Skeleton } from "../ui/skeleton";
import PaypalIcon from "../icons/paypal-icon";
import CardIcon from "../icons/card-icon";
import TransferIcon from "../icons/transfer-icon";

const RecentTransactions = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["recent-transactions"],
		queryFn: getRecentTransactions,
	});

	return (
		<section className="flex flex-col space-y-8 w-full lg:w-auto">
			<span className="text-xl font-semibold">Recent Transactions</span>

			{isLoading && <Skeleton className="px-56 bg-gray-500 h-full" />}

			{data && (
				<div className="rounded-4xl p-5 bg-white flex flex-col space-y-5 h-full">
					{data.data.data.map((trx) => (
						<div
							className="flex items-center space-x-10 justify-between"
							key={trx.id}
						>
							<div className="flex items-center space-x-5">
								{trx.mode === "paypal" ? (
									<PaypalIcon />
								) : trx.mode === "card" ? (
									<CardIcon />
								) : (
									<TransferIcon />
								)}

								<div className="flex flex-col space-y-1 items-start justify-start">
									<span className="text-lg font-semibold">
										{trx.description}
									</span>
									<span className="text-[#718EBF]">{trx.date}</span>
								</div>
							</div>

							<span
								className={`text-lg ${
									trx.type === "debit" ? "text-red-500" : "text-green-500"
								}`}
							>
								{trx.type === "debit" ? "-" : ""}${trx.amount.toLocaleString()}
							</span>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default RecentTransactions;
