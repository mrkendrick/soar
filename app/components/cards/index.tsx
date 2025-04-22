import CardItem from "./card-item";

const Cards = () => {
	return (
		<section className="grow flex flex-col space-y-8">
			<div className="flex items-center justify-between">
				<span className="text-xl font-semibold">My Cards</span>
				<span className="font-semibold">See All</span>
			</div>

			<div className="flex items-center space-x-5">
				<CardItem isDark />
				<CardItem />
			</div>
		</section>
	);
};

export default Cards;
