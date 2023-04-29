import React from "react";

const Button = ({ btnTitle }) => {
	return (
		<button className="mt-8 cursor-pointer mx-auto w-[300px] h-[70px] bg-[#fff] text-[#FFC83A] text-lg font-semibold rounded-3xl">
			{btnTitle}
		</button>
	);
};

export default Button;
