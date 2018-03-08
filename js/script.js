
var Persons = [{
        name: 'John',
     surname: 'Doe',
        age: 30,
        myPhoto: "img/a1.jpg",	
        likes: 550,
        id: 1,
        sex: "man"
    },{
        name: 'natacha',
        surname: 'sam',
         age: 40,
        myPhoto: "img/a4.jpg",	
        likes: 600,
        id: 2,
        sex: "weman"
    },{
        name: 'ahmed',
        surname: 'melad',
        age: 21,
        myPhoto: "img/a2.jpg",	
        likes: 999,
        id: 3,
        sex: "man"
    },{
        name: 'sma',
        surname: 'seco',
        age: 28,
        myPhoto: "img/a5.jpg",	
        likes: 888,  
        id: 4,
        sex: "weman"
    }]
var i = 0,
x = 1

for (i = 0; i < Persons.length; i++) {
    document.getElementById("a").innerHTML += ('<div class="box_a all '+Persons[i].sex+'"><div class="img"><img src="'+ Persons[i].myPhoto  +'" alt="Persons"></div><div class="date"><h3 class="name">' + Persons[i].name + '</h3><h4 class="surname">Name: ' + Persons[i].surname + '</h4><p>Age: ' + Persons[i].age   + '</details><button id="button'+Persons[i].id+'"><i id="heart'+Persons[i].id+'" class="fa fa-heart-o" aria-hidden="true"> Like</i><span id="likenu'+Persons[i].id+'"> ' + Persons[i].likes + '</span></button></div></div>'); 
        
    }

$(document).ready(function(){
    $("#all").on("click", function(){
        $(".all").show();
    });
    
    $("#man").click(function(){
        $(".man").show();
        $(".woman").hide();
    });
    
    $("#woman").click(function(){
        $(".woman").show();
        $(".man").hide();
    });
});  

