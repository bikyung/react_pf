import React from 'react';

function Btns(props) {
	return (
		<ul className='btns'>
			<li className='on' onClick={() => props.setIndex(0)}></li>
			<li onClick={() => props.setIndex(1)}></li>
			<li onClick={() => props.setIndex(2)}></li>
			<li onClick={() => props.setIndex(3)}></li>
			<li onClick={() => props.setIndex(4)}></li>
			<li onClick={() => props.setIndex(5)}></li>
		</ul>
	);
}

export default Btns;
