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




 //p 
const def= document.createElement('p');
def.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.getElementById('main').appendChild(def);



//h2
const ghi= document.createElement('h2');
ghi.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.getElementById('main').appendChild(ghi);


//p
const jkl= document.createElement('p');
jkl.innerText = 'IMDB Rating: 9.5';
document.getElementById('main').appendChild(jkl);


//image
const img= document.createElement('img');
img.src = "./images/robin-sparkles.jpg";
document.getElementById('main').appendChild(img);



//p
const mno= document.createElement('p');
mno.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
document.getElementById('main').appendChild(mno);



//p
const pqr= document.createElement('p');
pqr.innerText =  'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.getElementById('main').appendChild(pqr);


//link
const link = document.createElement('a')
link.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
link.innerText = "Source";
document.getElementById('main').appendChild(link);


///STYLING IN .JS

const yoyo = document.getElementsByTagName("body");
yoyo[0].style.background = 'rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg), no-repeat';
yoyo[0].style.backgroundSize= "100%";
yoyo[0].style.fontFamily = 'Playfair Display, serif';

document.getElementById("main").style.background = '#fafafa';
document.getElementById("main").styleMainborderRadius =  '4px';
document.getElementById("main").style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, .44)';
document.getElementById("main").style.minWidth =  '320px';
document.getElementById("main").style.maxWidth =  '600px';
document.getElementById("main").style.margin = '36px';
document.getElementById("main").style.padding =  '4px 32px 32px';

//mainDiv goes faster because ?

h1.style.fontFamily = 'Open Sans, sans-serif';
h1.style.textAlign = 'center'; 

h2.style.fontFamily = 'Open Sans, sans-serif';
h2.style.textAlign = 'left';

p.style.fontSize = '17px';
p.style.lineHeight =  '1.5em';

img.style.border =  '#fafafa';
img.style.borderRadius = '4px';
img.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, .4)';
img.style.width =  '100%';

a.style.color = '#174E7C';
a.style.display = 'block';
a.style.fontWeight =  '700';
a.style.marginTop = 'auto';
a.style.textAlign = 'right';
a.style.textDecoration = 'none';






