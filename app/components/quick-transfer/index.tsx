import { useQuery } from "@tanstack/react-query";
import { getQuickUsers } from "~/lib/api/users.api";
import { Skeleton } from "../ui/skeleton";
import RightChevronIcon from "../icons/right-chevron-icon";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SendIcon from "../icons/send-icon";
import { useState } from "react";
import type { QuickUser } from "~/lib/types/quick-users.type";

const QuickTransfer = () => {
	const [selectedUser, setSelectedUser] = useState<QuickUser | null>(null);

	const { data, isLoading } = useQuery({
		queryKey: ["quick-users"],
		queryFn: getQuickUsers,
	});

	return (
		<section className="lg:w-1/2 flex flex-col space-y-8">
			<span className="text-xl font-semibold">Quick Transfer</span>

			{isLoading && <Skeleton className="bg-gray-500 w-full h-52" />}

			{data && (
				<div className="rounded-4xl bg-white p-8 pb-5 h-fit w-full flex flex-col space-y-8">
					<div className="flex items-center justify-between">
						<div className="flex space-x-5 items-start justify-between">
							{data.data.data.map((d) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<div
									key={d.id}
									className="flex flex-col items-center justify-center space-y-3 cursor-pointer"
									onClick={() => setSelectedUser(d)}
								>
									<img
										src={d.profile_picture}
										width={70}
										height={70}
										alt={d.name}
										className="rounded-full"
									/>

									<div className="flex flex-col items-center justify-center space-y-1">
										<span
											className={`text-center text-lg ${
												selectedUser?.id === d.id ? "font-bold" : ""
											}`}
										>
											{d.name}
										</span>
										<span
											className={`text-center text-[#718EBF] ${
												selectedUser?.id === d.id ? "font-bold" : ""
											} `}
										>
											{d.position}
										</span>
									</div>
								</div>
							))}
						</div>

						<div className="bg-white size-14 flex items-center justify-center rounded-full shadow cursor-pointer">
							<RightChevronIcon />
						</div>
					</div>
					<div className="flex items-center justify-between space-x-5">
						<span className="text-[#718EBF]">Write Amount</span>

						<div className="rounded-full flex items-stretch bg-[#EDF1F7] overflow-hidden">
							<Input
								placeholder="525.50"
								size={20}
								className="rounded-full px-5 lg:px-10 py-7 border-none outline-none focus:border-none placeholder:text-lg text-lg focus:outline-none shadow-none focus:shadow-none"
							/>
							<Button
								aria-label="send"
								size={"lg"}
								className="rounded-full px-8 lg:px-10 py-7"
							>
								<span className="text-lg">Send</span>
								<span>
									<SendIcon />
								</span>
							</Button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default QuickTransfer;
