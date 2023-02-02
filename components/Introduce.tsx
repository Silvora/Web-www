import React from 'react'

import Image from 'next/image'
import about from "../public/img/about.jpg"
export default function Introduce() {
  return (
    <section className="page-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet pharetra nisl. Vestibulum sollicitudin leo non purus vestibulum placerat. Curabitur ac erat sollicitudin, blandit quam vitae, rutrum diam. Aenean non gravida velit, eu consectetur neque. Nullam in volutpat massa. Duis scelerisque urna non lectus fringilla suscipit. Phasellus lacinia facilisis massa, pellentesque consectetur nunc. Nullam elit metus, condimentum nec libero quis, dapibus malesuada enim. Morbi semper condimentum pellentesque. </p>
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
