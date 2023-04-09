import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Tabs from "../../components/Tabs/Tabs";
import Accordion from "../../components/Accordion/Accordion";
import Accord from "../../components/Accordion/Accordion";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
const BookFerry = () => {
	const [count, setCount] = useState(1);
	const [count2, setCount2] = useState(0);
	const incrementCount = () => {
		if (count < 20) {
			setCount((prev) => prev + 1);
		}
	};
	const decrementCount = () => {
		if (count > 1) {
			setCount((prev) => prev - 1);
		}
	};
	const incrementCount2 = () => {
		if (count2 < 10) {
			setCount2((prev) => prev + 1);
		}
	};
	const decrementCount2 = () => {
		if (count2 > 0) {
			setCount2((prev) => prev - 1);
		}
	};
	return (
		<div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-10 lg:px-16 ">
			<div className="relative w-full">
				<div className="lg:sticky top-0 z-10">
					<h1 className="text-2xl font-bold mt-5 mb-5">
						Book Your Andaman Ferry
					</h1>
					<img
						src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/banner_01.jpg?dpr=1.0&q=70&compress=true&quality=90&w=1536"
						alt=""
						className="md:hidden mb-10 rounded"
					/>
					<div className="bg-white p-3 shadow-md rounded-lg">
						<div className="flex items-start flex-col md:flex-row justify-between ">
							<div className="">
								<h5 className="text-[16px] leading-[25px] font-[500] text-[#373737]">
									Select Passengers
								</h5>
							</div>
							<div className="flex gap-5">
								<div>
									<h3 className="text-[#b4b4b4] text-[14px] h-[20px] font-bold">
										Adults
										<small className="text-[10px] ml-0.5 font-light text-[#c2c2c2]">
											(Above 1 Year)
										</small>
									</h3>
									<div className="flex justify-between items-center border border-[#c4c4c4] rounded-[3px] mt-4 max-w-lg w-44 h-[44px] overflow-hidden">
										<button
											className="text bg-[#f9f9f9] w-14 pl-3  text-[#8f8f8f] hover:text-black h-full"
											onClick={decrementCount}>
											<AiOutlineMinus className="font-bold text-[30px]" />
										</button>
										<div>{count}</div>
										<button
											className="text bg-[#f9f9f9] w-14 pl-3 h-full  text-[#8f8f8f] hover:text-black"
											onClick={incrementCount}>
											<AiOutlinePlus className="font-bold text-[30px]" />
										</button>
									</div>
								</div>{" "}
								<div>
									<h3 className="text-[#b4b4b4] text-[14px] h-[20px] font-bold">
										Infants
										<small className="text-[10px]  ml-0.5 font-light text-[#c2c2c2]">
											(Below 12 months)
										</small>
									</h3>
									<div className="flex justify-between items-center border border-[#c4c4c4] rounded-[3px] mt-4 w-44 h-[44px] overflow-hidden">
										<button
											className="text bg-[#f9f9f9] w-14 pl-3  text-[#8f8f8f] hover:text-black h-full"
											onClick={decrementCount2}>
											<AiOutlineMinus className="font-bold text-[30px]" />
										</button>
										<div>{count2}</div>
										<button
											className="text bg-[#f9f9f9] w-14 pl-3 h-full text-[#8f8f8f] hover:text-black"
											onClick={incrementCount2}>
											<AiOutlinePlus className="font-bold text-[30px]" />
										</button>
									</div>
								</div>
							</div>
						</div>
						<hr className="mt-2" />
						<div className="mt-2">
							<h5 className="text-[16px] leading-[25px] font-[500] text-[#373737]">
								Select Trip(s)
							</h5>
							<div className="px-2">
								<div className="flex gap-1 h-5 w-full">
									<span>Trip1</span>
									<div className=" w-full border-b" />
								</div>
								<div className="flex flex-col md:flex-row gap-2 mt-3">
									<div>
										<label htmlFor="from" className="text-[#b4b4b4]">
											From
										</label>

										<div>
											<select
												id="from"
												className="border rounded border-stone-200 max-w-lg w-full h-10 text-xs focus:border-border-stone-200">
												<option value="port">PORT BLAIR</option>
												<option value="volvo">HAVELOCK (SWARAJ DWEEP)</option>
												<option value="neil">Neil Island</option>
											</select>
										</div>
									</div>
									<div>
										<label htmlFor="to" className="text-[#b4b4b4]">
											To
										</label>

										<div>
											<select
												id="to"
												className="border rounded border-stone-200 max-w-lg w-full h-10 text-xs focus:border-border-stone-200">
												<option value="port">PORT BLAIR</option>
												<option value="volvo" selected>
													HAVELOCK (SWARAJ DWEEP)
												</option>
											</select>
										</div>
									</div>
									<div>
										<label htmlFor="date" className="text-[#b4b4b4]">
											Date of Journey
										</label>
										<input
											type="date"
											name="date"
											id="date"
											className="border rounded border-stone-200 max-w-lg w-full h-10 p-2 text-sm text-[#e9e9e9] focus:border-border-stone-200"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="my-5 flex gap-1 justify-center items-center hover:-translate-y-1 transition duration-300 ">
							<AiOutlinePlus className="bg-[#01b46c] text-white w-5 h-5 p-0.5 rounded-full" />{" "}
							<p className="text-[#01b46c] text-[10px] font-semibold">
								ADD ROUND TRIP
							</p>
						</div>
						<div className=" text-center -mb-[30px]">
							<Link to={"/online"}>
								<button className="py-3 px-16 transition-all duration-300 ease-linear hover:scale-[1.01] bg-[#01b46c]  hover:shadow-lg uppercase rounded text-white text-md font-semibold">
									Search
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-5 w-full">
				<img
					src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/banner_01.jpg?dpr=1.0&q=70&compress=true&quality=90&w=1536"
					alt=""
					className=" hidden md:block my-6 rounded-sm"
				/>
				<div className="px-3 py-10 md:py-5">
					<h2 className="text-md md:text-2xl font-bold text-[#707070]">
						Andaman Ferry Booking Process
					</h2>
					<div className="flex flex-wrap mt-5">
						<div className="w-[50%] md:max-w-[25%] relative">
							<div className="flex justify-center ">
								<img
									src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/research.svg?dpr=1.0&q=70&compress=true&quality=90&w=1536"
									alt=""
									className=" w-11"
								/>
							</div>
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2021/10/Group-2072.png?quality=90&compress=true"
								alt=""
								className="hidden md:block absolute top-0 -right-5 w-9"
							/>
							<div className="text-center">
								<h5 className="text-lg text-[#f7772d] font-semibold pt-6 ">
									Search
								</h5>
								<p className="text-sm ">
									and compare <br /> ferries from a large selection
								</p>
							</div>
						</div>
						<div className="w-[50%] md:max-w-[25%] relative pl-3">
							<div className="flex justify-center ">
								<img
									src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/ticket-1.svg?dpr=1.0&q=70&compress=true&quality=90&w=1536"
									alt=""
									className=" w-12"
								/>
							</div>
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2021/10/Group-2072.png?quality=90&compress=true"
								alt=""
								className="hidden md:block absolute top-0 -right-5 w-9"
							/>
							<div className="text-center">
								<h5 className="text-lg text-[#f65e73] font-semibold pt-6 ">
									Order
								</h5>
								<p className="text-sm">
									tickets by securely paying only ₹ 200 per ticket{" "}
								</p>
							</div>
						</div>
						<div className="w-[50%] md:max-w-[25%] relative pl-3">
							<div className="flex justify-center ">
								<img
									src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/ticket.svg?dpr=1.0&q=70&compress=true&quality=90&w=1536"
									alt=""
									className=" w-12"
								/>
							</div>
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2021/10/Group-2072.png?quality=90&compress=true"
								alt=""
								className="hidden md:block absolute top-0 -right-5 w-9"
							/>
							<div className="text-center">
								<h5 className="text-lg text-[#5e7cf6] font-semibold pt-6 ">
									Receive
								</h5>
								<p className="text-sm">
									your confirmed ticket in 3-4 working hours
								</p>
							</div>
						</div>
						<div className="w-[50%] md:max-w-[25%] relative pl-3">
							<div className="flex justify-center ">
								<img
									src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/pay.svg?dpr=1.0&q=70&compress=true&quality=90&w=1536"
									alt=""
									className=" w-16"
								/>
							</div>

							<div className="text-center">
								<h5 className="text-lg text-[#01b46c] font-semibold pt-6 ">
									Pay
								</h5>
								<p className="text-sm">
									the balance money in the next 24 hours & enjoy your trip
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<img
						src="https://ocean.go2andaman.com/wp-content/uploads/2022/05/MobiKwik-Promo.png?dpr=1.0&q=70&compress=true&quality=90&w=1536"
						alt=""
					/>
				</div>
				<Tabs />
				<img
					src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/confirmation-banner_02.jpg?compress=true&quality=90&w=1536&dpr=1.3"
					alt=""
					className="my-5"
				/>
				<div className="mx-5">
					<Accord />
				</div>
				<div className="bg-[#ecf5f2] p-4 rounded-[3px] my-10">
					<h5 className="text-[#707070] text-lg font-semibold">
						We provide ferry tickets for all hi-speed ferry companies in Andaman
					</h5>
					<div className="flex gap-10 mt-5">
						<div className="text-center">
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/Makruzz-Logos.png?compress=true&quality=90&w=1536&dpr=1.3"
								alt=""
							/>
							<p className="text-[#000000b3] font-bold pt-2">Makruzz</p>
						</div>
						<div className="text-center">
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/SL-Logos.png?compress=true&quality=90&w=1536&dpr=1.3"
								alt=""
							/>
							<p className="text-[#000000b3] font-bold pt-2">Nautika</p>
						</div>
						<div className="text-center">
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/GO-Logos.png?compress=true&quality=90&w=1536&dpr=1.3"
								alt=""
							/>
							<p className="text-[#000000b3] font-bold pt-2">Green Ocean</p>
						</div>
						<div className="text-center">
							<img
								src="https://ocean.go2andaman.com/wp-content/uploads/2022/02/ITT-Logos.png?compress=true&quality=90&w=1536&dpr=1.3"
								alt=""
							/>
							<p className="text-[#000000b3] font-bold pt-2">ITT Majestic</p>
						</div>
					</div>
				</div>
				<div className="p-4">
					<h1 className="text-2xl font-semibold text-[#707070]">
						Why Book Ferries with Go2andaman
					</h1>
					<ol className="mt-4 space-y-3 text-[#4a4a4a]">
						<li>
							<span className="w-8 h-8 inline-flex justify-center items-center text-[#f65e73] font-bold rounded-full border-2 border-[#f65e73]">
								1
							</span>{" "}
							Pay in Full only after receiving Confirmed Tickets
						</li>
						<hr />
						<li>
							<span className="w-8 h-8 inline-flex justify-center items-center text-[#f65e73] font-bold rounded-full border-2 border-[#f65e73]">
								2
							</span>{" "}
							Simplest Ferry Booking Experience
						</li>
						<hr />
						<li>
							<span className="w-8 h-8 inline-flex justify-center items-center text-[#f65e73] font-bold rounded-full border-2 border-[#f65e73]">
								3
							</span>{" "}
							Easy Refunds
						</li>
						<hr />
						<li>
							<span className="w-8 h-8 inline-flex justify-center items-center text-[#f65e73] font-bold rounded-full border-2 border-[#f65e73]">
								5
							</span>{" "}
							International & Domestic Payments Accepted
						</li>
						<hr />
						<li>
							<span className="w-8 h-8 inline-flex justify-center items-center text-[#f65e73] font-bold rounded-full border-2 border-[#f65e73]">
								6
							</span>{" "}
							Money Safe Guarantee
						</li>
					</ol>
				</div>
				<div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default BookFerry;
