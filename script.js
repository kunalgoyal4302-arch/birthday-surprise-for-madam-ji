const text=`Happy Birthday Madam Ji ❤️
Pata nhi kaha se start karu... bas itna bolna tha ki thank you meri life me aane ke liye. ❤️
Aaj ka din mere liye bhi special hai, kyuki aaj meri favourite insaan ka birthday hai. 🥹
Mujhe pata hai mai kabhi kabhi bahot pareshan karta hu, faltu ki baate karta hu aur overthink bhi kar leta hu 😅, par jo bhi karta hu dil se karta hu.
Bas ek hi wish hai ki tum hamesha khush raho. Tumhari smile dekh ke sach me acha lagta hai. ❤️
Bhagwan se bas itni dua hai ki tumhari har wish puri ho aur tumhe life me wo sab mile jo tum deserve karti ho.
Aur haan Madam Ji... ek promise karna, chahe kitni bhi ladai ho ya kitni bhi doori aa jaye, mera haath kabhi mat chhodna. 🤍
Thank you for being in my life. Tum mere liye bahot special ho.
Happy Birthday once again, Madam Ji. 🐼🎂
I love you so much. ❤️`;
let i=0;
function start(){overlay.style.display='none';main.classList.remove('hidden');type();}
function type(){if(i<text.length){typing.innerHTML+=text[i++];setTimeout(type,35);}}
function hearts(){for(let j=0;j<40;j++){let h=document.createElement('div');h.className='heart';h.innerHTML='💖';h.style.left=Math.random()*100+'vw';h.style.top='90vh';document.body.appendChild(h);setTimeout(()=>h.remove(),3000);}}
