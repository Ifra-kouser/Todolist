let ele = document.getElementById('root');



let h1 = document.createElement('h1');
let input = document.createElement('input');
let btn = document.createElement('button');
let btn2 = document.createElement('button');
let list = document.createElement('ul');



h1.innerHTML = 'Todo List';
btn.innerHTML = 'Add ';
btn2.innerHTML = 'ClearAll';


input.setAttribute('type', 'text' );
input.setAttribute('placeholder', 'Add your new to-do list');
input.setAttribute('id','box');
btn.setAttribute('onclick','adding()');
btn2.setAttribute('onclick','clearall()');
list.setAttribute('id','itemlist');

ele.appendChild(h1);
ele.appendChild(input);
ele.appendChild(btn);
ele.appendChild(btn2);
ele.appendChild(list);






function adding(){
    
       let listitems = document.getElementById('itemlist');
       
      if(input.value !=''){
      let makeli = document.createElement('li');
        makeli.innerHTML = input.value +' '+ '!';
        listitems.appendChild(makeli);
        input.value='';

        makeli.onclick = function(){
            listitems.removeChild(makeli);
        }
       
    }

}

function clearall(){
    let listitems = document.getElementById('itemlist');
    listitems.innerHTML = '';
    input.value = '';
    
}

