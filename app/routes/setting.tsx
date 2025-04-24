import { useState } from "react";
import EditProfile from "~/components/edit-profile";
import SettingTab from "~/components/settings-tab";

export function meta() {
	return [
		{ title: "Setting | Soar" },
		{ name: "description", content: "Created With React Router Vite" },
	];
}

export default function Home() {
	const [tab, setTab] = useState<"edit-profile" | "preferences" | "security">(
		"edit-profile",
	);

	return (
		<div className="max-w-screen px-10 py-6 flex flex-col space-y-10">
			<section className="bg-white rounded-4xl p-5 lg:p-10 pt-6 min-h-[40rem] flex flex-col space-y-8">
				<SettingTab tab={tab} setTab={setTab} />

				<div className="px-5">{tab === "edit-profile" && <EditProfile />}</div>
			</section>
		</div>
	);
}
