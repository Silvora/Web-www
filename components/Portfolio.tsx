import React, { useEffect } from "react";

import Image from "next/image";
//import img from "../public/img/portfolio/1.jpg"
export default function Portfolio() {
	let imgList = [
		{
			id: 1,
			class: "mix col-lg-6 col-md-6 web",
			url: "/img/portfolio/1.jpg",
		},
		{
			id: 2,
			class: "mix col-lg-6 col-md-6 digital",
			url: "/img/portfolio/2.jpg",
		},
		{
			id: 3,
			class: "mix col-lg-4 col-md-6 web",
			url: "/img/portfolio/3.jpg",
		},
		{
			id: 4,
			class: "mix col-lg-4 col-md-6 digital",
			url: "/img/portfolio/4.jpg",
		},
		{
			id: 5,
			class: "mix col-lg-4 col-md-6 rened",
			url: "/img/portfolio/5.jpg",
		},
		{
			id: 6,
			class: "mix col-lg-12 col-md-6 brand",
			url: "/img/portfolio/6.jpg",
		},
		{
			id: 7,
			class: "mix col-lg-6 col-md-6 rened",
			url: "/img/portfolio/7.jpg",
		},
		{
			id: 8,
			class: "mix col-lg-6 col-md-6 brand",
			url: "/img/portfolio/8.jpg",
		},
	];
	// useEffect(()=>{
	//     console.log("object");
	//     // let img = document.querySelectorAll("data['setbg']");
	//     // console.log(img)
	// },[])

	return (
		<section className='portfolio-section'>
			<div className='container-fluid p-md-0 '>
				<div className='row portfolios-area'>
					{imgList.map((item) => {
						return (
							<div key={item.id} className={item.class}>
								<a href={item.url} className='portfolio-item set-bg' data-setbg={item.url}>
									<div
										className='pi-inner'
                                      
										style={{
											backgroundImage: `url(${item.url})`,
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
                                            zIndex:9
										}}
									>
                                        <div className="portfolio-hover"></div>
										<h2>+ See Look</h2>
									</div>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
