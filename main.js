console.log('hello')

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(event){
    //console.log(event)
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //const {offsetWidth: width, offsetHeight: height} = hero; equal to code above
    let x = event.offsetX;
    let y = event.offsetY;
    //const {offsetX: x, offsetY: y} = hero;

    if (this !== event.target){
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }
    const xWalk = Math.round(x / width * walk) - walk / 2
    const yWalk = Math.round(y / height * walk) - walk / 2

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red` ;
    console.log(x,y)
}


hero.addEventListener('mousemove',shadow)