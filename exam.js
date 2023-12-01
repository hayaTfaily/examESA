var listoffruits=document.getElementById('lf');
var listoflegumes=document.getElementById('lg');
var listoffandl=document.getElementById('lfg');
var toadd=document.getElementById('toadd');
var addspecific=document.getElementById('add1');
var addgeneral=document.getElementById('add2');
var forsearch=document.getElementById('forsearch');
var search=document.getElementById('search');
var deleted=document.getElementById('deleted');

//header buttons
addspecific.addEventListener('click',(e)=>{
    e.preventDefault();
    if(document.getElementById('fruit').checked)
    {
       
        listoffruits.innerHTML+=`
        <div class="alert alert-success" role="alert">
                        Fruits! -${toadd.value}
                      </div>
        `
    }
    else if(document.getElementById('legume').checked)
    {
       
        listoflegumes.innerHTML+=`
        <div class="alert alert-warning" role="alert">
                        Legumes! -${toadd.value}
                      </div>
        `
    }
})
addgeneral.addEventListener('click',(e)=>{
    e.preventDefault();
    if(document.getElementById('fruit').checked)
    {
       
        listoffandl.innerHTML+=`
        <div class="alert alert-danger" role="alert">
                        Fruits! -${toadd.value}
                      </div>
        `
    }
    else if(document.getElementById('legume').checked)
    {
       
        listoffandl.innerHTML+=`
        <div class="alert alert-danger" role="alert">
                        Legumes! -${toadd.value}
                      </div>
        `
    }
})

//body buttons
deleted.addEventListener('click', (e)=> {
    e.preventDefault();
    var filterValue = forsearch.value.toLowerCase();
    var cards1 = listoffruits.querySelectorAll('div');
    var cards2=listoflegumes.querySelectorAll('div');
    var cards3=listoffandl.querySelectorAll('div');
    cards1.forEach(card => {
        console.log(card);
        var cardname = card.textContent.toLowerCase();
        if (cardname.includes(filterValue)) {
            card.parentNode.removeChild(card);
        }
    });
    cards2.forEach(card => {
        console.log(card);
        var cardname = card.textContent.toLowerCase();
        if (cardname.includes(filterValue)) {
            card.parentNode.removeChild(card);
        }
    });
    cards3.forEach(card => {
        console.log(card);
        var cardname = card.textContent.toLowerCase();
        if (cardname.includes(filterValue)) {
            card.parentNode.removeChild(card);
        }
    });
});
search.addEventListener('click', (e)=> {
    e.preventDefault();
    var filterValue = forsearch.value.toLowerCase();
    var cards1 = listoffruits.querySelectorAll('div');
    var cards2=listoflegumes.querySelectorAll('div');
    var cards3=listoffandl.querySelectorAll('div');

    cards1.forEach(card => {
        var cardname = card.textContent.toLowerCase();
        if (cardname.includes(filterValue)) {
            card.style.background='red';
        }
    });
    cards2.forEach(card => {
        var cardname = card.textContent.toLowerCase();
        if (cardname.includes(filterValue)) {
            card.style.background='red';
        }
    });
    cards3.forEach(card => {
        var cardname = card.textContent.toLowerCase();
        if (cardname.includes(filterValue)) {
            card.style.background='red';
        }
    });
});

listoffandl.addEventListener('click', (event)=> {
    event.preventDefault();
    var clickedItem = event.target;

    if (clickedItem.classList.contains('alert-danger')) {
        var content = clickedItem.textContent.trim();

        if (content.startsWith('Fruits!')) {
            listoffruits.innerHTML+=`
            <div class="alert alert-success" role="alert">
                           ${content}
                          </div>`;
        } else if (content.startsWith('Legumes!')) {
            listoflegumes.innerHTML+=`
            <div class="alert alert-warning" role="alert">
                            ${content}
                          </div>
            `
        }
    }
});

