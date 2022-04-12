import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department(props) {
	const path = process.env.PUBLIC_URL;
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/department.json`).then((json) => {
			setMembers(json.data.data);
		});
	}, []);

	return (
		<Layout
			name={'Department'}
			sub_visual={'main'}
			sub_title1={'Organization'}
			sub_title2={'Business Structure'}>
			<h2>{props.sub_title1}</h2>
			<div className='wrap1'>
				<article className='common container'>
					{members.map((member, idx) => {
						return (
							<div key={idx} className='pic1'>
								<img src={`${path}/img/${member.pic}`} />
								<h2>{member.position}</h2>
								<span>{member.name}</span>
							</div>
						);
					})}
				</article>
			</div>
		</Layout>
	);
}

export default Department;
