import React from 'react';

const Table = () => {
    return (
			<div className="flex flex-col ">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full justify-between text-left text-xs font-light">
								<thead className="border-b bg-blue-800 text-white font-medium">
									<tr>
										<th scope="col" className="px-8 py-1">
											Ferry Operator
										</th>
										<th scope="col" className="px-12 py-1">
											Timings
										</th>
										<th scope="col" className="px-1 py-1">
											Open Booking Window
										</th>
									</tr>
								</thead>
								<tbody className="text-blue-700">
									<tr className="border-b bg-white text-[#01b46c] font-semibold">
										<td className="whitespace-nowrap px-6 py-0.5"></td>
										<td className="whitespace-nowrap px-8 py-1">
											Port Blair to Havelock
										</td>
										<td className="whitespace-nowrap px-6 py-0.5"></td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">
											Green Ocean
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											07:00 AM to 09:15 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											30th April 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">Nautika</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											08:00 AM to 09:30 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">
											ITT Majestic
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											08:30 AM to 10:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											10.45 AM to 12.15 PM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white ">
										<td className="whitespace-nowrap px-6 py-1">Nautika</td>
										<td className="whitespace-nowrap px-6 py-1">
											11:45 AM to 01:15 PM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th April 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">
											Green Ocean
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											07:00 AM to 09:15 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											30th April 2023
										</td>
									</tr>

									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">
											ITT Majestic
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											08:30 AM to 10:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											08:00 AM to 09:30 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white text-[#01b46c] font-semibold">
										<td className="whitespace-nowrap px-6 py-0.5"></td>
										<td className="whitespace-nowrap px-8 py-1">
											Havelock To Neil Island
										</td>
										<td className="whitespace-nowrap px-6 py-0.5"></td>
									</tr>

									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Nautika</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											07:00 AM to 09:15 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											30th April 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">Green Ocean</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											08:00 AM to 09:30 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">
											ITT Majestic
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-3"></td>
										<td className="whitespace-nowrap px-6 py-3"></td>
										<td className="whitespace-nowrap px-6 py-3"></td>
									</tr>
									<tr className="border-b bg-white text-[#01b46c] font-semibold">
										<td className="whitespace-nowrap px-6 py-0.5"></td>
										<td className="whitespace-nowrap px-8 py-1">
											Neil Island to Port Blair
										</td>
										<td className="whitespace-nowrap px-6 py-0.5"></td>
									</tr>

									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Nautika</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											07:00 AM to 09:15 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											30th April 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">Green Ocean</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											08:00 AM to 09:30 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">
											ITT Majestic
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-3"></td>
										<td className="whitespace-nowrap px-6 py-3"></td>
										<td className="whitespace-nowrap px-6 py-3"></td>
									</tr>
									<tr className="border-b bg-white text-[#01b46c] font-semibold">
										<td className="whitespace-nowrap px-6 py-0.5"></td>
										<td className="whitespace-nowrap px-8 py-1">
											Havelock to Port Blair
										</td>
										<td className="whitespace-nowrap px-6 py-0.5"></td>
									</tr>

									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Nautika</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											07:00 AM to 09:15 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											30th April 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">Green Ocean</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											08:00 AM to 09:30 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">
											ITT Majestic
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											04:00 PM to 05:30 PM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white ">
										<td className="whitespace-nowrap px-6 py-3"></td>
										<td className="whitespace-nowrap px-6 py-3"></td>
										<td className="whitespace-nowrap px-6 py-3"></td>
									</tr>
									<tr className="border-b bg-neutral-200 text-[#01b46c] font-semibold">
										<td className="whitespace-nowrap px-2 py-0.5"></td>
										<td className="whitespace-nowrap px-1 py-1">
											Havelock to Port Blair ( via Neil Island )
										</td>
										<td className="whitespace-nowrap px-6 py-0.5"></td>
									</tr>
									<tr className="border-b bg-white  dark:bg-neutral-600">
										<td className="whitespace-nowrap px-6 py-1">
											ITT Majestic
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											07.30 AM to 09:00 AM
										</td>
										<td className="whitespace-nowrap px-6 py-1">
											30th June 2023
										</td>
									</tr>
									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Makruzz</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											04:00 PM to 05:30 PM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											31st March 2023
										</td>
									</tr>
									<tr className="border-b bg-white text-[#01b46c] font-semibold">
										<td className="whitespace-nowrap px-6 py-0.5"></td>
										<td className="whitespace-nowrap px-8 py-1">
											Port Blair to Neil Island
										</td>
										<td className="whitespace-nowrap px-6 py-0.5"></td>
									</tr>

									<tr className="border-b bg-neutral-200 ">
										<td className="whitespace-nowrap px-6 py-0.5">Nautika</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											07:00 AM to 09:15 AM
										</td>
										<td className="whitespace-nowrap px-6 py-0.5">
											30th April 2023
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Table;