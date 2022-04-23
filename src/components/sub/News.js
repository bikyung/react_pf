import { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';

function News() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const getLocalData = () => {
		let data = localStorage.getItem('posts');
		data = JSON.parse(data);
		return data;
	};

	const [posts, setPosts] = useState(getLocalData);

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요!!');
			return;
		}

		setPosts([{ title: inputVal, content: textareaVal }, ...posts]);
		resetPost();
	};

	const deletePost = (index) => {
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	const updatePost = (index) => {
		const inputVal = editInput.current.value.trim();
		const textareaVal = editTextarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요!!');
			return;
		}
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	const enableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'News'}>
			<div className='con'>
				<article>
					<h2>Need a help?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Officiis dignissimos explicabo corrupti accusantium
						reprehenderit eligendi!
					</p>
				</article>
				<article>
					<h2>Slow life, Easy living</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Labore quasi minus autem voluptatem ducimus cupiditate dicta.
					</p>
				</article>
				<article>
					<h2>service Center</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Alias, quos illum. Nisi voluptatem dolorem temporibus nemo
						architecto.
					</p>
				</article>
			</div>
			<div className='wrap'>
				<div className='inputBox'>
					<h2>Lorem ipsum dolor sit amet.</h2>
					<input type='text' placeholder='제목을 입력하세요' ref={input} />
					<br />
					<textarea
						cols='30'
						rows='10'
						placeholder='본문을 입력하세요.'
						ref={editTextarea}></textarea>
					<br />
					<div className='newsBtns'>
						<button onClick={resetPost}>CANCEL</button>
						<button onClick={createPost}>CREATE</button>
					</div>
				</div>

				<div className='showBox'>
					{posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableUpdate ? (
									<>
										<input
											type='text'
											defaultValue={post.title}
											ref={editInput}
										/>
										<br />
										<textarea
											defaultValue={post.content}
											ref={editTextarea}></textarea>

										<div className='btn'>
											<button onClick={() => disableUpdate(idx)}>
												CANCEL
											</button>
											<button onClick={() => updatePost(idx)}>
												SAVE
											</button>
										</div>
									</>
								) : (
									<>
										<h2>{post.title}</h2>
										<p>{post.content}</p>

										<div className='btn'>
											<button onClick={() => enableUpdate(idx)}>
												EDIT
											</button>
											<button onClick={() => deletePost(idx)}>
												DELETE
											</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default News;
