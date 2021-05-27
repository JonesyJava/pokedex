import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";
import NotificationService from "../Utils/NotificationService.js";
import CaughtNote from "../Utils/CaughtNote.js";

class MyPokeService{
    constructor(){
        this.getMyPokemon()
    }

    async getMyPokemon(){
    try {
        let res = await sandboxApi.get("")
        ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
    } catch (error) {
        console.error(error)
        }
    }

async catchPokemon(){
    try {
        delete ProxyState.activePokemon._id
        if(await CaughtNote.confirmNote("GREAT WORK!", "success")){
        let res = await sandboxApi.post("", ProxyState.activePokemon)
        console.log(res)
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
        this.getMyPokemon()
        }
    } catch (error) {
        console.error(error)
    }
}

    setActivePokemon(id){
        let activePokemon = ProxyState.myPokemon.find(p => p._id == id)
      
        ProxyState.activePokemon = activePokemon
    }

    async releasePokemon(_id){
        try {
            if(await NotificationService.confirmNote("Are you sure you want to RELEASE your Pokemon?", "error")){
            const res = await sandboxApi.delete(ProxyState.activePokemon._id)
            this.getMyPokemon()
            ProxyState.activePokemon = null
        }
        } catch (error) {
            console.error(error)
        }
    }

}

export const myPokeService = new MyPokeService();