import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class PokeAPIService{
    constructor(){
        console.log("Poke API SERVICE Controller Working");
        this.getWildApiPokemon()
    }

    async getWildApiPokemon(){
        try {
            const res = await pokemonApi.get("pokemon?limit=151")
            console.log(res)
            ProxyState.wildApiPokemon = res.data.results
        } catch (error) {
            console.error(error)
        }
    }

    async setActivePokemon(name){
        try {
            let res = await pokemonApi.get("pokemon/" + name)
            console.log(res)
            ProxyState.activePokemon = new Pokemon(res.data)
        
        } catch (error) {
            console.error(error)
        }
    }
}

export const pokeApiService = new PokeAPIService();