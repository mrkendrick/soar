type Props = {
	setTab: (tab: "edit-profile" | "preferences" | "security") => void;
	tab: "edit-profile" | "preferences" | "security";
};
const SettingTab = ({ setTab, tab }: Props) => {
	return (
		<div className="flex items-center justify-stretch lg:justify-start space-x-5 lg:space-x-12 border-b border-gray-200">
			<button
				className={`lg:text-lg w-full lg:w-auto ${
					tab === "edit-profile" ? "text-foreground" : "text-[#718EBF]"
				} hover:bg-gray-100 cursor-pointer relative ease-in-out duration-300 rounded-xl pt-1 font-medium px-5 flex flex-col space-y-3`}
				type="button"
				onClick={() => setTab("edit-profile")}
			>
				<span>Edit Profile</span>
				<div
					className={`absolute left-0 right-0 bottom-0 h-1 ${
						tab === "edit-profile" ? "bg-primary" : "bg-transparent"
					} rounded-t-lg ease-in-out duration-300`}
				/>
			</button>

			<button
				className={`lg:text-lg w-full lg:w-auto ${
					tab === "preferences" ? "text-foreground" : "text-[#718EBF]"
				} hover:bg-gray-100 cursor-pointer relative ease-in-out duration-300 rounded-xl pt-1 font-medium px-5 flex flex-col space-y-3`}
				type="button"
				onClick={() => setTab("preferences")}
			>
				<span>Preferences</span>
				<div
					className={`absolute left-0 right-0 bottom-0 h-1 ${
						tab === "preferences" ? "bg-primary" : "bg-transparent"
					} rounded-t-lg ease-in-out duration-300`}
				/>
			</button>

			<button
				className={`lg:text-lg w-full lg:w-auto ${
					tab === "security" ? "text-foreground" : "text-[#718EBF]"
				} hover:bg-gray-100 cursor-pointer relative ease-in-out duration-300 rounded-xl pt-1 font-medium px-5 flex flex-col space-y-3`}
				type="button"
				onClick={() => setTab("security")}
			>
				<span>Security</span>
				<div
					className={`absolute left-0 right-0 bottom-0 h-1 ${
						tab === "security" ? "bg-primary" : "bg-transparent"
					} rounded-t-lg ease-in-out duration-300`}
				/>
			</button>
		</div>
	);
};

export default SettingTab;
