import React from 'react'

import Image from 'next/image'
import about from "../public/img/about.jpg"
export default function Introduce() {



  return (
	
    <section className="page-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
				<p>
				新技术永远在源源不断的革新，但本质并没有太多变化，只是使用它解决问题的形式变的越来越多样化、多元化。</p>

				<p>不要局限于一种编码语言，不要把自己定位在一个方向或岗位，一专永远不会耽误你的多能。</p>

				<p>学习能力，永远是衡量程序员亘古不变的指标。</p>

				<p>永远保持一个疑问：技术真正是什么？
				</p>


					{/* <p>1</p>
					<p>2</p>
					<p>3</p> */}
					{/* <div className="row mt-5">
						<div className="col-md-4">
							<div className="milestone">
								<h2>56<span>Clients</span></h2>
							</div>
						</div>
						<div className="col-md-4">
							<div className="milestone">
								<h2>112<span>Projects</span></h2>
							</div>
						</div>
						<div className="col-md-4">
							<div className="milestone">
								<h2>25<span>Collabs</span></h2>
							</div>
						</div>
					</div> */}
					{/* <figure className="mt-5">
						<img src="/img/sign.png" alt=""/>
					</figure> */}
				</div>
				<div className="col-lg-5 offset-lg-1">
					<figure className="pic-frame">
						<Image src={about}
						alt="about.jpg" style={{width:"auto",height:"auto"}}></Image>
					</figure>
				</div>
			</div>
		</div>
	</section>
  )
}
