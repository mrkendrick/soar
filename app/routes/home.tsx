import Cards from "~/components/cards";
import RecentTransactions from "~/components/recent-transaction";

export function meta() {
	return [
		{ title: "Soar" },
		{ name: "description", content: "Created With React Router Vite" },
	];
}

export default function Home() {
	return (
		<div className="max-w-screen p-10">
			<section className="flex items-stretch space-x-5">
				<Cards />
				<RecentTransactions />
			</section>
		</div>
	);
}
