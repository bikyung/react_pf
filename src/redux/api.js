import axios from 'axios';
const path = process.env.PUBLIC_URL;

export const getFlickr = async (opt) => {
	const base = 'https://www.flickr.com/services/rest/?';
	const key = '86007043f7007d67ce5b5f460ff91ac7';
	const method1 = 'flickr.interestingness.getList';
	const method2 = 'flickr.photos.search';
	const method3 = 'flickr.favorites.getList';
	const method4 = 'flickr.galleries.getPhotos';
	const username = '195311166@N04';
	const galleryId = '72157720599016444';
	const num = 50;
	let url = '';

	if (opt.type === 'interest') {
		url = `${base}method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
	}

	if (opt.type === 'search') {
		url = `${base}method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
	}

	if (opt.type === 'album') {
		url = `${base}method=${method3}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${username}&tags=${opt.tags}`;
	}
	if (opt.type === 'favorite') {
		url = `${base}method=${method4}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${username}&tags=${opt.tags}&gallery_id=${galleryId}`;
	}

	return await axios.get(url);
};

export const getYoutube = async () => {
	const key = 'AIzaSyBA0vVAYlhuCiLDSkDUi_LswCkyeB6NAoI';
	const num = 9;
	const id = 'PL92HST3Zi7rbOhNiZxBGcwmdmkYaEl72W';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	return await axios.get(url);
};

export const getMember = async () => {
	const url = path + '/DB/department.json';
	return await axios.get(url);
};

export const getNews = async () => {
	const url = path + '/DB/news.json';
	return await axios.get(url);
};
