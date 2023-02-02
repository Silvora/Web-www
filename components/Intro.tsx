import React from 'react'

export default function Intro(props:any) {
	//console.log(props);
  return (
    <section className="intro-section">
		<div className="container text-center">
			<div className="row">
				<div className="col-xl-10 offset-xl-1">
					{/* <h2 className="section-title">I’m a freelance <span>digital designer</span>, with +10 years of experience</h2> */}
					<div className="section-title">
						<button type="button" className="btn btn-info btn-sm">{props.posts.from}</button>
							&nbsp;&nbsp;
						<span>{props.posts.hitokoto}<i>{props.posts.from_who?"--"+props.posts.from_who:""}</i></span> 
					</div>
					
				</div>
			</div>
		</div>
	</section>
  )
}

