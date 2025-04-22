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
		<section className="flex flex-col space-y-8">
			<span className="text-lg font-semibold">Recent Transactions</span>

			{isLoading && <Skeleton className="px-56 bg-gray-500 h-full" />}

			{data && (
				<div className="rounded-4xl p-5 bg-white">
					{data.data.data.map((trx) => (
						<div
							className="flex items-center space-x-2 justify-between"
							key={trx.id}
						>
							{trx.mode === "paypal" ? (
								<PaypalIcon />
							) : trx.mode === "card" ? (
								<CardIcon />
							) : (
								<TransferIcon />
							)}

							<div className="flex flex-col space-y-1">
								<span>{trx.description}</span>
								<span>{trx.date}</span>
							</div>

							<span>${trx.amount.toLocaleString()}</span>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default RecentTransactions;
