import { ProxyState } from "../AppState.js"
import { pokeApiService } from "../Services/PokeAPIService.js"
function _drawWildPokemon(){
    let pokemon = ProxyState.wildApiPokemon
        console.log(pokemon)
    let template = ""
    pokemon.forEach(p => template += `<li class="hoverp" onclick="app.pokeApiController.setActivePokemon('${p.name}')"> ${p.name} </li>`)
    document.getElementById("api-pokemon").innerHTML = template;
}

function _drawActivePokemon(){
    if(ProxyState.activePokemon){
        document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.ActiveTemplate
    }else {
        document.getElementById("active-pokemon").innerHTML = ""
    }
}

export default class PokeAPIController{
    constructor(){
        console.log("Poke API CONTROLLER Working")
        ProxyState.on("wildApiPokemon", _drawWildPokemon)
        ProxyState.on("activePokemon", _drawActivePokemon)
    }

    setActivePokemon(name){
        console.log(name)
        pokeApiService.setActivePokemon(name)
    }
}