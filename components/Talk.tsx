import React, { useEffect, useState } from 'react'
import { SendEmail } from '../api/email';
import { getToken } from '../utils/token';

export default function Talk() {

	const [name,setName] = useState("");
	const [email,setEmail]=useState("");
	const [message,setMessage]= useState("");

	const handleSendEmail=(e:any)=>{
		e.preventDefault();
		let data = {
			"name":name,
			"email":email,
			"message":message
		} 

		SendEmail(data).then((res:any)=>{
			console.log(res);
			if(res.isEmail){
				setName("")
				setMessage("")
			}
		}).catch(err=>{
			console.log(err)
		})
		
	}

	useEffect(()=>{
		let email = getToken("Admin-Email");
		setEmail(email?email:"");
	},[])

  return (
    <section className="page-section">
		<div className="container">
			<form className="contact-form">
				<div className="row">
					<div className="col-md-6">
						<input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
					</div>
					<div className="col-md-6">
						<input type="text" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					</div>
					<div className="col-md-12">
						<textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
					</div>
				</div>
				<div className="text-center">
					<button className="site-btn" onClick={handleSendEmail}>Send</button>
				</div>
			</form>
		</div>
	</section>
  )
}
