import ChipDarkIcon from "../icons/chip-dark-icon";
import ChipIcon from "../icons/chip-icon";
import MasterDarkIcon from "../icons/master-dark-icon";
import MasterIcon from "../icons/master-icon";

type Props = {
	isDark?: boolean;
};

const CardItem = ({ isDark }: Props) => {
	return (
		<div
			className={`rounded-4xl ${
				isDark
					? "bg-linear-to-r from-[#5B5A6F] to-[#000000] text-white"
					: "bg-white text-foreground border"
			} w-full flex flex-col items-stretch justify-stretch`}
		>
			<div className="grow flex flex-col p-10 pb-14 space-y-8 overflow-hidden">
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<span className="text-sm">Balance</span>
						<span className="text-xl font-semibold">$5,492</span>
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
						<span className="text-lg font-semibold">Eddy Cusuma</span>
					</div>

					<div className="flex flex-col">
						<span
							className={`text-sm ${
								isDark ? "text-white/70" : "text-[#718EBF]"
							}`}
						>
							VALID THRU
						</span>
						<span className="text-lg font-semibold">12/22</span>
					</div>
				</div>
			</div>

			<div
				className={`overflow-hidden rounded-b-4xl px-10 py-8 flex items-center justify-between ${
					isDark
						? "bg-linear-to-r from-[#686777] to-[#070708]"
						: "bg-white border-t"
				}`}
			>
				<span className="font-semibold text-xl">3778 **** **** 1234</span>

				{isDark ? <MasterIcon /> : <MasterDarkIcon />}
			</div>
		</div>
	);
};

export default CardItem;
