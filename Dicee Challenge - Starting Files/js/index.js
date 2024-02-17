function sortear(){
    var res = document.querySelector("h1#res");
    var img1 = document.querySelector("img.img1");
    var img2 = document.querySelector("img.img2");
    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    var n2 = Math.random();
    n2 = n2 * 6;
    n2 = Math.floor(n2) + 1;
    //console.log(n);
    switch(n){
        case 1:
            img1.src =  'images/dice1.png'
            break
        case 2:
            img1.src = 'images/dice2.png'
            break
        case 3:
            img1.src = 'images/dice3.png'
            break
        case 4:
            img1.src = 'images/dice4.png'
            break    
        case 5:
            img1.src = 'images/dice5.png'
            break      
        case 6:
            img1.src = 'images/dice6.png'
            break         
    } 

    switch(n2){
        case 1:
            img2.src =  'images/dice1.png'
            break
        case 2:
            img2.src = 'images/dice2.png'
            break
        case 3:
            img2.src = 'images/dice3.png'
            break
        case 4:
            img2.src = 'images/dice4.png'
            break    
        case 5:
            img2.src = 'images/dice5.png'
            break      
        case 6:
            img2.src = 'images/dice6.png'
            break         
    }   
    
  /*  switch(n, n2){
        case n > n2:
            res.innerHTML = "player 1 winner"
            break
        case n < n2:
            res.innerHTML = "player 2 winner"
            break
        case n === n2:
            res.innerHTML = "draw"
            break    
    }*/

    if(n > n2){
        res.innerHTML = "player 1 winner"
    }
    else if( n < n2 ){
        res.innerHTML = "player 2 winner"
    }
    else{
        res.innerHTML = "draw"
    }
}