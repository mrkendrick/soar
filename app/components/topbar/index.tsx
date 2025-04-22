"use client";

import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router";
import BellIcon from "../icons/bell-icon";
import SearchIcon from "../icons/search-icon";
import TopbarSettingsIcon from "../icons/topbar-settings-icon";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { getUser } from "~/lib/api/user.api";

const Topbar = () => {
	const location = useLocation();

	const { data, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: getUser,
	});

	return (
		<header className="bg-white p-5 flex items-center justify-between">
			<h2>
				{location.pathname === "/"
					? "Overview"
					: location.pathname === "/setting"
						? "Settings"
						: ""}
			</h2>

			<div className="flex items-center space-x-4">
				<div className="flex items-center space-x-1 px-5 py-2 rounded-full bg-[#F5F7FA]">
					<SearchIcon />
					<Input
						placeholder="Search for something"
						className="border-none outline-none focus:border-none focus:outline-none shadow-none focus:shadow-none"
					/>
				</div>

				<div className="rounded-full p-2 bg-[#F5F7FA]">
					<TopbarSettingsIcon />
				</div>

				<div className="rounded-full p-2 bg-[#F5F7FA]">
					<BellIcon />
				</div>
				{isLoading && <Skeleton className="h-12 w-12 rounded-full" />}
				{data && (
					<Link to="/setting">
						<img
							src={data.data.data.profile_picture}
							width={50}
							height={50}
							alt={data.data.data.name}
						/>
					</Link>
				)}
			</div>
		</header>
	);
};

export default Topbar;
