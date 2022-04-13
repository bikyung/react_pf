import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department(props) {
	const path = process.env.PUBLIC_URL;
	const [members, setMembers] = useState([]);
	const [business, setBusiness] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/department.json`).then((json) => {
			console.log(json);
			setBusiness(json.data.business);
			setMembers(json.data.data);
		});
	}, []);

	return (
		<Layout name={'department'} sub_visual={'main'}>
			<h2>Business Structure</h2>
			<div className='wrap'>
				{business.map((business, idx) => {
					return (
						<article>
							<div className='pic' key={idx}>
								<img src={`${path}/img/${business.pic}`} />
							</div>
							<div className='textInfo'>
								<h2>{business.title}</h2>
								<p>{business.text}</p>
							</div>
						</article>
					);
				})}
			</div>
			<div className='organization'>
				<div className='inner'>
					<h2>Organization</h2>
					{members.map((member, idx) => {
						return (
							<div key={idx} className='container'>
								<h2>{member.position}</h2>
								<span></span>
								<div className='wrap1'>
									<article>
										<div className='pic1'>
											<img src={`${path}/img/${member.pic}`} />
											<h2>{member.name}</h2>
										</div>
									</article>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Department;
