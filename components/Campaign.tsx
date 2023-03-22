import React from 'react'

export default function Campaign() {

    let imgList = [
        {
          id:1,
          class:"mix col-md-6 col-lg-3 rened",
          url:"/img/portfolio/3.jpg"
        },
        {
          id:2,
          class:"mix col-md-6 col-lg-3 digital",
          url:"img/portfolio/4.jpg"
        },
        {
            id:3,
            class:"mix col-md-6 col-lg-3 rened",
            url:"/img/portfolio/5.jpg"
          },
          {
            id:4,
            class:"mix col-md-6 col-lg-3 digital",
            url:"img/portfolio/6.jpg"
          },
          {
            id:5,
            class:"mix col-md-6 col-lg-3 rened",
            url:"/img/portfolio/7.jpg"
          },
          {
            id:6,
            class:"mix col-md-6 col-lg-3 digital",
            url:"img/portfolio/8.jpg"
          },
          {
            id:7,
            class:"mix col-md-6 col-lg-3 rened",
            url:"/img/portfolio/9.jpg"
          },
          {
            id:8,
            class:"mix col-md-6 col-lg-3 digital",
            url:"img/portfolio/10.jpg"
          },
      ]

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
										}}
									>
                                        <div className="portfolio-hover"></div>
										<h4>→ 查看</h4>
									</div>
								</a>
                                <div className="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
							</div>
						);
					})}


				{/* <div className="mix col-md-6 col-lg-3 rened">
					<a href="img/portfolio/3.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/3.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 digital">
					<a href="img/portfolio/4.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/4.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 rened">
					<a href="img/portfolio/5.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/5.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>A cup of tea please</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 brand">
					<a href="img/portfolio/6.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/6.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 brand">
					<a href="img/portfolio/9.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/9.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>Brand Identity for Company</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 rened">
					<a href="img/portfolio/10.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/10.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 digital">
					<a href="img/portfolio/7.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/7.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>A cup of tea please</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div className="mix col-md-6 col-lg-3 brand">
					<a href="img/portfolio/8.jpg" className="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/8.jpg">
						<div className="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div className="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div> */}
			</div>
		</div>
	</section>
  )
}
