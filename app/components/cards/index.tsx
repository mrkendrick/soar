import { getCards } from "~/lib/api/cards.api";
import CardItem from "./card-item";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";

const Cards = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["cards"],
		queryFn: getCards,
	});

	return (
		<section className="grow flex flex-col space-y-8">
			<div className="flex items-center justify-between">
				<span className="text-xl font-semibold">My Cards</span>
				<span className="font-semibold">See All</span>
			</div>

			{isLoading && (
				<div className="flex items-center space-x-5">
					<Skeleton className="h-60 w-full bg-gray-500" />
					<Skeleton className="h-60 w-full bg-gray-500" />
				</div>
			)}

			{data && (
				<div className="flex items-center space-x-5">
					<CardItem isDark card={data.data.data[0]} />
					<CardItem card={data.data.data[1]} />
				</div>
			)}
		</section>
	);
};

export default Cards;
