
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL,{method:'GET'});
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const catBtn = document.getElementById('change-cat');


// const getCat = async () => {
//     try {
//        const data = await fetch(BASE_URL);
//        const json = await data.json();
//        return json.webpurl;
//     }
//     catch(e) {
//       console.log('deu erro ',e.message);
//     }


// } 

// const loadImg =  async() => {
//     const catImg = document.getElementById('cat');
//     catImg.src = await getCat();
//  }

//  catBtn.addEventListener('click', loadImg);

//  loadImg();