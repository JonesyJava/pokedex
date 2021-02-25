import { ProxyState } from "../AppState.js";
import { myPokeService } from "../Services/MyPokeService.js"

function _drawMyPokemon(){
    let pokemon = ProxyState.myPokemon
    let template = ""
    pokemon.forEach(p => template += `<li onclick="app.myPokeController.setActivePokemon('${p._id}')" > ${p.name} </li>`)
    document.getElementById("my-pokemon").innerHTML = template;
}

export default class MyPokeController{
    constructor(){
        console.log();
        ProxyState.on("myPokemon", _drawMyPokemon)
    }

    catchPokemon(){
        myPokeService.catchPokemon()
    }

    setActivePokemon(id){
        myPokeService.setActivePokemon(id)
    }

    releasePokemon(){
        myPokeService.releasePokemon()
    }
}