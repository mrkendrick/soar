import type { Card } from "~/lib/types/cards.type";
import ChipDarkIcon from "../icons/chip-dark-icon";
import ChipIcon from "../icons/chip-icon";
import MasterDarkIcon from "../icons/master-dark-icon";
import MasterIcon from "../icons/master-icon";
import { maskCreditCard } from "~/lib/utils";

type Props = {
	isDark?: boolean;
	card: Card;
};

const CardItem = ({ isDark, card }: Props) => {
	return (
		<div
			className={`rounded-4xl ${
				isDark
					? "bg-linear-to-r from-[#5B5A6F] to-[#000000] text-white"
					: "bg-white text-foreground border"
			} w-full flex flex-col items-stretch justify-stretch`}
		>
			<div className="grow flex flex-col p-8 pb-12 space-y-8 overflow-hidden">
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<span className="text-sm">Balance</span>
						<span className="text-xl font-semibold">
							${card.balance.toLocaleString()}
						</span>
					</div>

					{isDark ? <ChipIcon /> : <ChipDarkIcon />}
				</div>

				<div className="w-2/3 flex items-center justify-between">
					<div className="flex flex-col">
						<span
							className={`text-sm ${
								isDark ? "text-white/70" : "text-[#718EBF]"
							}`}
						>
							CARD HOLDER
						</span>
						<span className="text-lg font-semibold">{card.card_holder}</span>
					</div>

					<div className="flex flex-col">
						<span
							className={`text-sm ${
								isDark ? "text-white/70" : "text-[#718EBF]"
							}`}
						>
							VALID THRU
						</span>
						<span className="text-lg font-semibold">{card.valid_through}</span>
					</div>
				</div>
			</div>

			<div
				className={`overflow-hidden rounded-b-4xl px-8 py-8 flex items-center justify-between ${
					isDark
						? "bg-linear-to-r from-[#686777] to-[#070708]"
						: "bg-white border-t"
				}`}
			>
				<span className="font-semibold text-xl">
					{maskCreditCard(card.card_number)}
				</span>

				{isDark ? <MasterIcon /> : <MasterDarkIcon />}
			</div>
		</div>
	);
};

export default CardItem;
