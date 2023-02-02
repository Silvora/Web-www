import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { clearToken, getToken } from '../utils/token'
import Router from 'next/router';
export default function Header() {

	const [email,setEmail]= useState("");

	useEffect(()=>{
		let email = getToken("Admin-Email")
		if(email){
			setEmail(email)
		}else{
			Router.push("/login")
		}
		
	},[])

	const handleClearStor=()=>{
		clearToken("ZJS-7579-Admin-Token")
		clearToken("Admin-Email")
		Router.push("/login")
	}
  return (
    <header className="header-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-3">
					<div className="logo">
						<h2 className="site-logo">Zjs-7579</h2>
					</div>
				</div>
				<div className="col-lg-8 col-md-9">
					<p className="site-btn header-btn">{email} ｜ <span onClick={handleClearStor}>退出</span></p>
					<nav className="main-menu">
						<ul>
							<li><Link href="/">首页</Link></li>
							<li><Link href="/about">关于</Link></li>
							<li><Link href="/work">工作</Link></li>
							<li><Link href="/contact">联系</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<div className="nav-switch">
			<i className="fa fa-bars"></i>
		</div>
	</header>
  )
}
