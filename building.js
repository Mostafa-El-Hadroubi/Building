let on = document.querySelectorAll('.windows');
let aray = []

on.forEach((p)=>{
  p.addEventListener('click', (click)=>{
    console.log(click.target)
    click.target.parentElement.classList.toggle('onclick')

    if(!click.target.hasAttribute('src')){
      aray.push(click.target.parentElement)
      click.target.parentElement.classList.toggle('open')

    }
    if(aray.length>2){
      
      if(aray[0].children[0].src!=aray[1].children[0].src){
        aray[0].classList.toggle('open')
        aray[1].classList.toggle('open')
      }
      aray=[click.target.parentElement]
      
      
    }
  })
})