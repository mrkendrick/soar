import { AlignJustify } from "lucide-react";
import { NavLink } from "react-router";
import SoarIcon from "../icons/soar-icon";
import { links } from "../sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";

const MobileSidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="lg:hidden" aria-label="open sidebar">
				<AlignJustify size={30} />
			</SheetTrigger>
			<SheetContent side="left" className="lg:hidden">
				<aside className="bg-white py-5 flex flex-col space-y-6 border-r mt-5">
					<div className="flex items-center space-x-3 pl-10">
						<SoarIcon />
						<h2 className="font-extrabold">Soar Task</h2>
					</div>

					<nav className="flex flex-col space-y-2">
						{links.map((link) => (
							<NavLink
								to={link.href}
								end
								key={link.id}
								onClick={() => setOpen(false)}
								className={({ isActive }) =>
									[
										isActive
											? "px-12 py-4 relative text-stone-800"
											: "px-12 py-4 relative text-stone-400",
									].join(" ")
								}
							>
								{({ isActive }) => (
									<>
										{isActive ? (
											<div className="absolute left-0 top-0 bottom-0 w-2 bg-primary rounded-r-lg" />
										) : (
											<div className="absolute left-0 top-0 bottom-0 w-2 bg-white rounded-r-2" />
										)}
										<div className="flex items-center space-x-3">
											<div>{isActive ? link.darkIcon : link.icon}</div>
											<span className="text-lg font-medium text-inherit hover:text-stone-800 ease-in-out duration-200">
												{link.title}
											</span>
										</div>
									</>
								)}
							</NavLink>
						))}
					</nav>
				</aside>
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
