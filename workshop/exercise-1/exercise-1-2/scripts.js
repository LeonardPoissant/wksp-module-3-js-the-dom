console.log('...crickets...');

//CSS LINK
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
head[0].appendChild(stylesheet);


myTitle = document.querySelector('title');
myTitle = 'EXAMPLE';
// h1

const abc = document.createElement('h1');
abc.innerText = 'The best How I Met Your Mother episode (according to fans)';
document.getElementById('main').appendChild(abc);
abc.classList.add('h1')



 //p 
const def= document.createElement('p');
def.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.getElementById('main').appendChild(def);
def.classList.add('p')


//h2
const ghi= document.createElement('h2');
ghi.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.getElementById('main').appendChild(def);
ghi.classList.add('h2')

//p
const jkl= document.createElement('p');
jkl.innerText = 'IMDB Rating: 9.5';
document.getElementById('main').appendChild(jkl);
jkl.classList.add('p')

//image
const img= document.createElement('img');
img.src = "./images/robin-sparkles.jpg";
document.getElementById('main').appendChild(img);
img.classList.add('img')


//p
const mno= document.createElement('p');
mno.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
document.getElementById('main').appendChild(mno);
mno.classList.add('p')


//p
const pqr= document.createElement('p');
pqr.innerText =  'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.getElementById('main').appendChild(pqr);
pqr.classList.add('p')

//link
const link = document.createElement('a')
link.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
link.innerText = "Source";
document.getElementById('main').appendChild(link);
link.classList.add('a')


