import { useQuery } from "@tanstack/react-query";
import { getUser } from "~/lib/api/user.api";
import LoaderIcon from "../icons/loader-icon";
import PencilIcon from "../icons/pencil-icon";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { updateProfileSchema } from "~/lib/schema/update-profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useMediaQuery } from "~/hooks/use-media-query";

const EditProfile = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	const { data, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: getUser,
	});

	const [image, setImage] = useState<string | null>(null);

	const form = useForm<z.infer<typeof updateProfileSchema>>({
		resolver: zodResolver(updateProfileSchema),
		defaultValues: {
			username: "",
		},
	});

	const onSubmit = (values: z.infer<typeof updateProfileSchema>) => {
		console.log(values);
	};

	useEffect(() => {
		if (!data) return;

		form.setValue("username", data?.data.data.username);
	}, [data, form]);

	return (
		<div>
			{isLoading && (
				<div className="flex items-center justify-center">
					<LoaderIcon />
				</div>
			)}

			{data && (
				<section className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-20">
					<div className="relative">
						<form>
							<label htmlFor="image">
								<img
									src={image ? image : data.data.data.profile_picture}
									alt={data.data.data.name}
									width={isMobile ? 120 : 90}
									height={isMobile ? 120 : 90}
									className="rounded-full"
								/>

								<div className="size-7 flex items-center justify-center rounded-full bg-[#232323] absolute -right-2 bottom-2">
									<PencilIcon />
								</div>
							</label>

							<Input
								type="file"
								className="hidden"
								id="image"
								multiple={false}
								accept="image/*"
								name="image"
								onChange={(e) =>
									setImage(
										e.target.files
											? URL.createObjectURL(e.target.files[0])
											: null,
									)
								}
							/>
						</form>
					</div>

					<div className="grow w-full">
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<FormField
										control={form.control}
										name="name"
										defaultValue={data.data.data.name}
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Your Name</FormLabel>
												<FormControl>
													<Input
														type="text"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter name"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="username"
										defaultValue={data.data.data.username}
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">User Name</FormLabel>
												<FormControl>
													<Input
														className="h-13 px-4 rounded-xl"
														placeholder="Enter name"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										defaultValue={data.data.data.email}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Email</FormLabel>
												<FormControl>
													<Input
														type="email"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter username"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Password</FormLabel>
												<FormControl>
													<Input
														type="password"
														className="h-13 px-4 rounded-xl"
														placeholder="***********"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										defaultValue={"1990-04-02"}
										name="dob"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Date Of Birth</FormLabel>
												<FormControl>
													<Input
														type="date"
														className="h-13 px-4 rounded-xl"
														placeholder="Select DOB"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										defaultValue={data.data.data.address}
										name="present_address"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Present Address</FormLabel>
												<FormControl>
													<Input
														type="text"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter present address"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										defaultValue={data.data.data.address}
										name="permanent_address"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">
													Permenent Address
												</FormLabel>
												<FormControl>
													<Input
														type="text"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter permanant address"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										defaultValue={data.data.data.city}
										name="city"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">City</FormLabel>
												<FormControl>
													<Input
														type="text"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter city"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="postal_code"
										defaultValue={data.data.data.postal_code}
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Postal Code</FormLabel>
												<FormControl>
													<Input
														type="text"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter postal code"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										defaultValue={data.data.data.country}
										name="country"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="mb-2">Country</FormLabel>
												<FormControl>
													<Input
														type="text"
														className="h-13 px-4 rounded-xl"
														placeholder="Enter country"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
								<div className="flex items-center lg:justify-end mt-8">
									<Button
										className="py-6 px-16 rounded-xl w-full md:w-auto text-lg"
										type="submit"
										size="lg"
										aria-label="save"
									>
										Save
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</section>
			)}
		</div>
	);
};

export default EditProfile;
