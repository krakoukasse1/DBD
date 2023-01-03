//Création de la classe Perk
//Contient le nom de la perkn sa description, une image valide, le personnage et le type
//Type: 0 = Survivant, 1= Tueur
class Perk{
    constructor(idPerk,nom,description,img,personnage,type,wikipage){
        this.idPerk= idPerk
        this.nom = nom
        this.description = description
        this.img= img
        this.personnage= personnage
        this.type=type
        this.wikipage
    }
    //Création des getter
    /*get idPerk(){
        return this.getIdPerk
    }
    get nom(){
        return this.getName
    }

    get description(){
        return this.getDescription

    }

    get img(){
        return this.getImg
    }

    get personnage(){
        return this.getPersonnage
    }
    
    get type(){
        return this.getType
    }
    */

}
//Création des perk en se basant sur le modèle de la class Perk (Survivant)
let liste_perkSurv= []
let Sentiments_Obscur = new Perk(1,"Sentiment Obscur","L aura du tueur vous est revelé pendant 10s après avoir reparé un génerateur","perk/survivor/SentimentsObscure.png","Global",0,"https://deadbydaylight.fandom.com/fr/wiki/Sentiment_Obscur")
let DéjàVu = new Perk(2,"Déjà-Vu","L aura des generateurs vous est revelé au début pendant 60s, puis 5s après l'avoir reparé","perk/survivor/DejaVu.png","Global",0,"https://deadbydaylight.fandom.com/fr/wiki/Déjà-Vu")
let Adrenaline= new Perk(3,"Adrenaline","Permet a son utilisateur d obtenir le statut Rapidité et de regagner un segment de santé une fois les generateur reparé","perk/survivor/Adrenaline.png","Meg",0,"https://deadbydaylight.fandom.com/fr/wiki/Adrénaline?so=search")
let Abandonne= new Perk (4,"Abandonne","Lorsque vous êtes le dernier survivant, l aura de la trappe vous est revelé a 32m","perk/survivor/Abandonne.png","Bill",0,"https://deadbydaylight.fandom.com/fr/wiki/Abandonné")
let AccrochezVous= new Perk(5,"Accrochez-Vous","Vous pouvez determiner la progression a terre de récuperation d un survivant, et voyez l aura du tueur quelque seconde apres l avoir releve","perk/survivor/AccrochezVous.png","Ash",0,"https://deadbydaylight.fandom.com/fr/wiki/Accrochez-Vous")
let AllianceRefoulee= new Perk(6,"Alliance Refoulée","Permet de bloquer un générateur pendant 30s, l aura du générateur apparait a tous les survivant en blanc","perk/survivor/AllianceRefoule.png","Cheryl",0,"https://deadbydaylight.fandom.com/fr/wiki/Alliance_Refoulée")
let Assurance= new Perk(7,"Assurance","Vous ne laissez aucune marque pendant 8s après avoir reparé un générateur","perk/survivor/Assurance.png","Jane",0,"https://deadbydaylight.fandom.com/fr/wiki/Assurance")
let AtoutManche= new Perk(8,"Atout dans la Manche","Augmente vos chance de trouver des objet rare dans les coffres equipé d un accesoire","perk/survivor/AtoutManche.png","Ace",0,"https://deadbydaylight.fandom.com/fr/wiki/Atout_dans_la_Manche")
let Atterisage= new Perk(9,"Atterrissage Équilibré","Vous procure un boost de vitesse quand vous tombez de haut, provoque épuisement","perk/survivor/Atterisage.png","Nea",0,"https://deadbydaylight.fandom.com/fr/wiki/Atterrissage_Équilibré")
let AugmenterMise= new Perk(10,"Augmenter la Mise","Augmente votre chance de 9% maximum en fonction du nombre de survivant en vie","perk/survivor/AugmenterLaMise.png","Ace",0,"https://deadbydaylight.fandom.com/fr/wiki/Augmenter_la_Mise")









console.log(liste_perkSurv)
liste_perkSurv.push(Sentiments_Obscur,DéjàVu,Adrenaline,Abandonne,AccrochezVous,AllianceRefoulee,Assurance,AtoutManche,Atterisage,AugmenterMise)

let counter =0

function DrawRandom(){
    
    let rand1 = Math.floor(Math.random() * count) +1
    let rand2 = Math.floor(Math.random() * count) +1
    let rand3 = Math.floor(Math.random() * count) +1
    let rand4 = Math.floor(Math.random() * count) +1
    if(rand1 != rand2 & rand1 != rand3 & rand1 != rand4 & rand2 != rand3 & rand2 != rand4 & rand3 !=rand4) {
        Perk1= liste_perkSurv[rand1 -1]
        Perk2= liste_perkSurv[rand2 -1]
        Perk3= liste_perkSurv[rand3 -1]
        Perk4= liste_perkSurv[rand4 -1]
    } else {
        counter=counter+11
        DrawRandom()
    }
    console.log(rand1,rand2,rand3,rand4)
    console.log(Perk1,Perk2,Perk3,Perk4)
   // console.log(counter)
   console.log("J ai tiré: ",Perk1.nom,"",Perk2.nom,"",Perk3.nom,"",Perk4.nom)
}

let count = liste_perkSurv.length

DrawRandom()

//On récupere les instance des p présent et on les change par le nom randomizé
const Pperk1=document.querySelector("#p1")
Pperk1.innerHTML=Perk1.nom

const Pperk2=document.querySelector("#p2")
Pperk2.innerHTML=Perk2.nom

const Pperk3=document.querySelector("#p3")
Pperk3.innerHTML=Perk3.nom

const Pperk4=document.querySelector("#p4")
Pperk4.innerHTML=Perk4.nom

//On récupère les image
ImgPerk1= document.querySelector("#img1perk")
ImgPerk1.src=Perk1.img

ImgPerk2= document.querySelector("#img2perk")
ImgPerk2.src=Perk2.img

ImgPerk3= document.querySelector("#img3perk")
ImgPerk3.src=Perk3.img

ImgPerk4= document.querySelector("#img4perk")
ImgPerk4.src=Perk4.img
























//Création Perk Killer

console.log("Hello")

//Corps