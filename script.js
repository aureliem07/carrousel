$(document).ready(function(){
    
let $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0; // on initialise un compteur image
    
function affImg(){ //fonction d'affichage des images
    $img.css('display', 'none'); // on cache les images
    $currentImg = $img.eq(i); // on définit la nouvelle image
    $currentImg.css('display', 'block'); // puis on l'affiche
}

var intervalId = null; //déclaration de ma variable intervalId contenant la fonction setInterval, sera stoppée via la fonction clearInterval

function finish(){ //définition de la fonction finish
    clearInterval(intervalId); //fonction qui va stopper intervalId
}

function newImage(){ //fonction de remplacer l'ancienne image par une nouvelle image
      
        if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
        
        }
        else{ // sinon, on le remet à 0 (première image), permet le défilement infini
            i = 0;
        }
        affImg();//affiche image
}

function start(){ //fonction lançant l'autoslider
  intervalId = setInterval(newImage, 3000); //attend 2 secondes avant de lancer la fonction newImage puis se répète indéfiniment
}


affImg();//on affiche la premiere image

$('.prec').click(function(){ // image précédente
    if(i > 0){ // si le compteur est supérieur à l'index de départ
            i--; // on décremente
            
        }
        else{ // sinon, on le remet à index maximum (dernière image), permet le défilement infini
            i = indexImg;
        }
            affImg();//affiche image
            //finish(); //stop l'autoslider
            //start(); //relance l'autoslider en remettant à zéro le délai, sans ces deux lignes, l'autoslider "saute" en défilement manuel
});

$('.suiv').click(function(){ // image suivante
    if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
        
        }
        else{ // sinon, on le remet à 0 (première image), permet le défilement infini
            i = 0;
        }
            affImg();//affiche image
            //finish(); //stop l'autoslider
           //start(); // relance l'autoslider en remettant à zéro le délai, sans ces deux lignes, l'autoslider "saute" en défilement manuel
});

start(); //lance une première fois l'autoslider

});


