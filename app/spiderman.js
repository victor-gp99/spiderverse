class spiderman {
    constructor(nombre, edad, actor, num_peliculas, estudio_cine){
        this.actor = actor;
        this.edad = edad;
        this.nombre = nombre;
        this.num_peliculas = num_peliculas;
        this.estudio_cine = estudio_cine;
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.estudio_cine}`
    }
}

module.exports = spiderman