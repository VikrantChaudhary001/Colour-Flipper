let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow', 'pink'];

button.addEventListener('click', function(){
   
 let index = parseInt(Math.random()*colors.length);
  
  canvas.style.background = colors[index]
})