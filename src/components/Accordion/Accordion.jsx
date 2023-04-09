import { Fragment, useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`${
				id === open ? "rotate-180" : ""
			} h-5 w-5 transition-transform`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	);
}

export default function Accord() {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<Fragment>
			<ul>
				<li className="list-disc">
					<Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
						<AccordionHeader
							onClick={() => handleOpen(1)}
							className="text-[#707c93] text-sm">
							How to book a ferry from Port Blair?
						</AccordionHeader>
						<AccordionBody>
							<p className="text-[#707070]">
								{" "}
								The best way to book ferries is to do it online on a platform
								like Go2andaman, so you arrive with a ticket in hand and have a
								hassle-free travel experience. If you’re already there on the
								islands and the internet is not working well, you could book a
								private ferry by visiting the Ferry Operator’s office. It can be
								a tedious task to find an operator’s office since different
								ferries have offices at different places. Moreover, you may end
								up losing precious time.
							</p>
						</AccordionBody>
					</Accordion>
				</li>
				<li className="list-disc">
					<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
						<AccordionHeader
							onClick={() => handleOpen(2)}
							className="text-[#707c93] text-sm">
							What is the distance between Port Blair airport and the jetty? How
							do I get there?
						</AccordionHeader>
						<AccordionBody>
							<p className="text-[#707070]">
								{" "}
								We recommend that you reach the jetty at-least 45 mins prior to
								the departing time so you have sufficient time for boarding. If
								travelling with children or senior citizens, 1 hour prior would
								be ideal. The boarding gates close 30 mins before departure.
							</p>
						</AccordionBody>
					</Accordion>
				</li>
				<li className="list-disc">
					<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
						<AccordionHeader
							onClick={() => handleOpen(3)}
							className="text-[#707c93] text-sm">
							What is the distance between Port Blair airport and the jetty? How
							do I get there?
						</AccordionHeader>
						<AccordionBody>
							<p className="text-[#707070]">
								{" "}
								The distance between Port Blair airport and Haddo jetty (private
								ferry boarding point) is 5 – 6 km. It takes about 15-20 mins via
								auto/taxi to get there. If travelling by government ferry, go to
								the Phoenix Bay jetty and this should be about a 10-15 minute
								ride.
								<br /> <br />
								Note: Port of boarding for ferries sometimes change, so please
								verify the jetty for boarding a day prior to your travel date.
							</p>
						</AccordionBody>
					</Accordion>
					<button className="w-full mt-3 text-orange-400 grid justify-end">
						View All
					</button>
				</li>
			</ul>
		</Fragment>
	);
}
