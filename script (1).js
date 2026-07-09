const text=`Happy Birthday, Madam Ji! ❤️
You are the most beautiful part of my life.
Thank you for every smile, every memory and every moment.
I hope this year brings you endless happiness.
Always remember... no matter the distance, you'll always have a home in my heart.
I love you. 💖`;
let i=0;
function start(){overlay.style.display='none';main.classList.remove('hidden');type();}
function type(){if(i<text.length){typing.innerHTML+=text[i++];setTimeout(type,35);}}
function hearts(){for(let j=0;j<40;j++){let h=document.createElement('div');h.className='heart';h.innerHTML='💖';h.style.left=Math.random()*100+'vw';h.style.top='90vh';document.body.appendChild(h);setTimeout(()=>h.remove(),3000);}}