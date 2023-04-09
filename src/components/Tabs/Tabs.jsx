import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
const Tabs = () => {
	const [toggle, setToggle] = useState(1);
	console.log(toggle);
	return (
		<div>
			<div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap bg-[#ededed] rounded-sm">
				<button
					onClick={() => setToggle(1)}
					className="inline-flex items-center h-10 px-4 -mb-px hover:transition hover:duration-500 hover:ease-linear text-sm text-center bg-transparent border-b-2 focus:border-blue-500 sm:text-base dark:text-blue-300 whitespace-nowrap ">
					<span className="text-sm">All Reviews</span>{" "}
				</button>

				<button
					onClick={() => setToggle(2)}
					className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:border-blue-500">
					<FcGoogle size={20} />
				</button>

				<button
					onClick={() => setToggle(3)}
					className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:border-blue-500">
					<FaFacebook fill="blue" size={20} />
				</button>
			</div>
			<div className={toggle === 1 ? "block" : "hidden"}>
				<div className="flex gap-10 px-1 justify-between">
					<div className="mt-4 w-full">
						<div className="flex items-center  gap-3">
							<div className="h-8 w-8 rounded-full bg-green-800 flex justify-center items-center text-white">
								A
							</div>
							<p className="text-xs font-semibold ">Anil Ramanatha</p>
						</div>
						<div className="mt-3 flex">
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />
							<AiFillStar fill="orange" size={18} />
						</div>
						<p className="text-xs leading-tight tracking-tight text-justify">
							Was Quick and Abhilash was really helpful. gave the correct
							details and helped with booking 5 mins.. thank you .. Abhilash and
							team from go2andam amazing.. thank you-Anil Ramanatha - BLR <br />
							<button className="text-gray-400">Read more </button>
						</p>
						<div className="flex gap-2 items-center mt-1">
							<FcGoogle size={30} />{" "}
							<div className="text-xs">
								Posted on <span className="block text-blue-700">Google</span>
							</div>
						</div>
					</div>
					<div className="mt-4 w-full">
						<div className="flex items-center  gap-3">
							<div className="h-8 w-8 rounded-full bg-green-800 flex justify-center items-center text-white">
								<img
									src="https://lh3.googleusercontent.com/a-/ACB-R5TFzVz-sjLlntNusOSBuzDZz-CcZA1IkQRhot9ummg=s240-c-c0x00000000-cc-rp-mo-br100"
									alt=""
								/>
							</div>
							<p className="text-xs font-semibold ">Anil Ramanatha</p>
						</div>
						<div className="mt-3 flex">
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />
							<AiFillStar fill="orange" size={18} />
						</div>
						<p className="text-xs leading-tight tracking-tight text-justify">
							Had great booking experience with the team. Super prompt and
							helpful. Very easy once you plan with Go2 Andaman ferry
						</p>
						<div className="flex gap-2 items-center mt-1">
							<FcGoogle size={30} />{" "}
							<div className="text-xs">
								Posted on <span className="block text-blue-700">Google</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={toggle === 2 ? "block" : "hidden"}>
				<div className="flex gap-10 px-1 justify-between">
					<div className="mt-4 w-full">
						<div className="flex items-center  gap-3">
							<div className="h-8 w-8 rounded-full bg-green-800 flex justify-center items-center text-white">
								A
							</div>
							<p className="text-xs font-semibold ">Anil Ramanatha</p>
						</div>
						<div className="mt-3 flex">
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />
							<AiFillStar fill="orange" size={18} />
						</div>
						<p className="text-xs leading-tight tracking-tight text-justify">
							Was Quick and Abhilash was really helpful. gave the correct
							details and helped with booking 5 mins.. thank you .. Abhilash and
							team from go2andam amazing.. thank you-Anil Ramanatha - BLR <br />
							<button className="text-gray-400">Read more </button>
						</p>
						<div className="flex gap-2 items-center mt-1">
							<FcGoogle size={25} />{" "}
							<div className="text-xs">
								Posted on <span className="block text-blue-700">Google</span>
							</div>
						</div>
					</div>
					<div className="mt-4 w-full">
						<div className="flex items-center  gap-3">
							<div className="h-8 w-8 rounded-full bg-green-800 flex justify-center items-center text-white">
								<img
									src="https://lh3.googleusercontent.com/a-/ACB-R5TFzVz-sjLlntNusOSBuzDZz-CcZA1IkQRhot9ummg=s240-c-c0x00000000-cc-rp-mo-br100"
									alt=""
								/>
							</div>
							<p className="text-xs font-semibold ">Anil Ramanatha</p>
						</div>
						<div className="mt-3 flex">
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />
							<AiFillStar fill="orange" size={18} />
						</div>
						<p className="text-xs leading-tight tracking-tight text-justify">
							Had great booking experience with the team. Super prompt and
							helpful. Very easy once you plan with Go2 Andaman ferry
						</p>
						<div className="flex gap-2 items-center mt-1">
							<FcGoogle size={25} />{" "}
							<div className="text-xs">
								Posted on <span className="block text-blue-700">Google</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={toggle === 3 ? "block" : "hidden"}>
				<div className="flex gap-10 px-1 justify-between">
					<div className="mt-4 w-full">
						<div className="flex items-center  gap-3">
							<div className="h-8 w-8 rounded-full overflow-hidden bg-green-800 flex justify-center items-center text-white">
								<img
									src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000"
									alt=""
									className="h-8"
								/>
							</div>
							<p className="text-xs font-semibold ">Jennifer Pelaez</p>
						</div>
						<div className="mt-3 flex">
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />
							<AiFillStar fill="orange" size={18} />
						</div>
						<p className="text-xs leading-tight tracking-tight text-justify">
							Just returned from a wonderful trip and used Go2Andaman to book
							all my ferry tickets and transportation. Darshan was so helpful
							while <br />
							<button className="text-gray-400">Read more </button>
						</p>
						<div className="flex gap-2 items-center mt-1">
							<FaFacebook size={25} fill="blue" />{" "}
							<div className="text-xs">
								Posted on <span className="block text-blue-700">Facebook</span>
							</div>
						</div>
					</div>
					<div className="mt-4 w-full">
						<div className="flex items-center  gap-3">
							<div className=" ">
								<img
									src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-1/62302215_2861178640564342_2199100603618033664_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=uKENZgcELh8AX8rlRUB&_nc_ht=scontent-sea1-1.xx&oh=00_AfC7IT2m4l96BcywNvOpxOWCZ2j8PqC8msIvJfH9bMSNfg&oe=644AB1AC"
									alt=""
									className="h-8 w-8 rounded-full"
								/>
							</div>
							<p className="text-xs font-semibold ">Tulsi Purushothaman</p>
						</div>
						<div className="mt-3 flex">
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />{" "}
							<AiFillStar fill="orange" size={18} />
							<AiFillStar fill="orange" size={18} />
						</div>
						<p className="text-xs leading-tight tracking-tight text-justify">
							Prompt and professional service. We booked Luxury ferry seats. AT
							the time of travel the ferry did not have Luxury seats. Go2Andaman
							<br />
							<button className="text-gray-400">Read more </button>
						</p>
						<div className="flex gap-2 items-center mt-1">
							<FaFacebook size={25} fill="blue" />{" "}
							<div className="text-xs">
								Posted on <span className="block text-blue-700">Facebook</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
