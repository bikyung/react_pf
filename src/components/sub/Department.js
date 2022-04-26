import Layout from '../common/Layout';
import { useSelector } from 'react-redux';

function Department() {
	const path = process.env.PUBLIC_URL;
	const members = useSelector((state) => state.memberReducer.members);

	return (
		<Layout name={'Department'}>
			<h2>Business Structure</h2>
			<div className='wrap'>
				<div className='txtBox'>
					<div className='txt1'>
						<h2>Become a part of our professional team</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Fugiat ipsa natus dolore repellat officia quasi?
						</p>
						<h3>Lorem, ipsum dolor.</h3>
					</div>
					<div className='txt2'>
						<h2>n</h2>
						<h3>New job</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Obcaecati, doloremque?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<h4>members</h4>
					</div>
				</div>
				<div className='empty'>
					<div className='emp'></div>
					<div className='between'></div>
				</div>
				<div className='empty1'>
					<div className='emp1'></div>
					<h3>Lorem, ipsum dolor.</h3>
				</div>
			</div>
			<div className='container'>
				{members.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic1'>
								<img src={`${path}/img/${member.pic}`} />
								<div className='desc'>
									<h2>{member.name}</h2>
									<h3>{member.position}</h3>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Department;
