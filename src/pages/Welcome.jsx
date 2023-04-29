import aptech from "../assets/aptech.svg";
import pizza from "../assets/pizza.svg";
import burger from "../assets/burger.svg";
import boy from "../assets/boy.svg";
import Button from "../components/Button";
import { useState } from "react";

const Welcome = () => {
	return (
		<div className="h-screen w-full bg-[#FFC83A] p-5 items-center flex flex-col">
			<img src={aptech} alt="" className="mr-24" />
			<h1 className="text-[#fff] text-[60px] font-extrabold ml-4 leading-none">
				Food for Everyone
			</h1>
			<div className="flex mt-7">
				<div className="flex flex-col mt-24">
					<img src={pizza} alt="" className="" />
					<img src={burger} alt="" />
				</div>
				<div>
					<img src={boy} alt="" />
				</div>
			</div>
			<Button btnTitle={"Get Started"} />
		</div>
	);
};

export default Welcome;
