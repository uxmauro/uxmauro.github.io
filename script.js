const header = document.querySelectorAll('.p-image')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

const projectImgs = [  "https://user-images.githubusercontent.com/77753281/266791834-26edbd36-abec-4c0a-8f9d-11cecc40d802.png",
"https://user-images.githubusercontent.com/77753281/267140169-d88d643c-427c-4b0b-af30-fa592e47d435.png",
"https://user-images.githubusercontent.com/77753281/201540866-28707ba8-db6f-47b0-8523-76409b2aa81e.png",
"https://user-images.githubusercontent.com/77753281/226106683-cfeded97-12bb-4bf2-9e69-2f5e278c22a4.png",
"https://user-images.githubusercontent.com/77753281/267134859-a0104769-713d-48c6-b6f9-4f33cf120276.png",
"https://user-images.githubusercontent.com/77753281/267138526-7d219301-e6d9-42b6-bbf9-21ecb96d87d1.png"

]

document.addEventListener('mousemove', (e) => {
  const customCursor = document.querySelector('.custom-cursor');
  customCursor.style.left = e.clientX - 16 + 'px'; // Use clientX for relative to the window or pageX for relative to the document
  customCursor.style.top = e.clientY - 4 +'px';
});


const projectTitles = ['Do It - Todo App','Tic Tac Toe','Library','Restaurant Page','Calculator','Rock, Paper, Scissors']

setTimeout(getData, 1000)

function getData() {
  header.forEach((headerElement,idx) => {
    const imgTag = document.createElement('img');
    imgTag.src = projectImgs[idx];
    imgTag.alt = 'project image';

    headerElement.innerHTML = '';

    // Append the imgTag to the header element
    headerElement.appendChild(imgTag);
});


  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((textEl, idx) => {
    textEl.classList.remove('animated-bg-text')
    textEl.innerText = projectTitles[idx]
})
}