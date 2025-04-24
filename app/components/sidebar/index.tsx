import { NavLink } from "react-router";
import AccountsIcon from "../icons/accounts-icon";
import CreditCardIcon from "../icons/credit-card-icon";
import HomeIcon from "../icons/home-icon";
import InvestmentIcon from "../icons/investment-icon";
import LoanIcon from "../icons/loan-icon";
import PrivilegeIcon from "../icons/privileges-icon";
import ServicesIcon from "../icons/services-icon";
import SettingIcon from "../icons/setting-icon";
import SoarIcon from "../icons/soar-icon";
import TransactionIcon from "../icons/transaction-icon";
import SettingDarkIcon from "../icons/setting-dark-icon";
import HomeDarkIcon from "../icons/home-dark-icon";

export const links = [
	{
		id: crypto.randomUUID(),
		title: "Dashboard",
		href: "/",
		icon: <HomeIcon />,
		darkIcon: <HomeDarkIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Transactions",
		href: "/transactions",
		icon: <TransactionIcon />,
		darkIcon: <TransactionIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Accounts",
		href: "/accounts",
		icon: <AccountsIcon />,
		darkIcon: <AccountsIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Investments",
		href: "/investments",
		icon: <InvestmentIcon />,
		darkIcon: <InvestmentIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Credit Cards",
		href: "/credit-cards",
		icon: <CreditCardIcon />,
		darkIcon: <CreditCardIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Loans",
		href: "/loans",
		icon: <LoanIcon />,
		darkIcon: <LoanIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Services",
		href: "/services",
		icon: <ServicesIcon />,
		darkIcon: <ServicesIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "My Privileges",
		href: "/my-privileges",
		icon: <PrivilegeIcon />,
		darkIcon: <PrivilegeIcon />,
	},
	{
		id: crypto.randomUUID(),
		title: "Setting",
		href: "/setting",
		icon: <SettingIcon />,
		darkIcon: <SettingDarkIcon />,
	},
];

const Sidebar = () => {
	return (
		<aside className="hidden bg-white py-5 lg:flex flex-col space-y-6 border-r">
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
	);
};

export default Sidebar;
