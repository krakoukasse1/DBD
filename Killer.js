//Création de la class Survivor
class Survivor{
    constructor(idKiller,nameKiller,Perk1,Perk2,Perk3,imgKiller){
        this.idKiller=idKiller
        this.nameKiller=nameKiller
        this.Perk1=Perk1
        this.Perk2=Perk2
        this.Perk3=Perk3
        this.imgKiller=imgKiller
    }

    get idKiller(){
        return this.getidKiller
    }

    get nameKiller(){
        return this.getNameKiller
    }

    get Perk1(){
        return this.getPerk1
    }

    get Perk2(){
        return this.getPerk2
    }

    get Perk3(){
        return this.getPerk3
    }

    get imgKiller(){
        return this.getImageKiller
    }

    


}

//console.log("Hello From Killer")
