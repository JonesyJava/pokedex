export default class Pokemon{
    constructor(data){
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        // date.types will either be true : false within ternary
        // pokeAPI send array
        // sandboxAPI sends string
        // interate over original array via map()
        // then bring in and target internal array
        // join allows for you to bring the array data as a string without digging too deep
        this.types = typeof(data.types[0]) == 'string' ? data.types[0] : data.types.map(t => t.type.name).join(' - ')
        this.img = data.img || data.sprites.other.dream_world.front_default
        this.description = data.description
        this._id = data._id || ""

    }

    get ActiveTemplate(){
        return /*html*/`
        <div class="card">
                        <div class="card-body">
                        <h1 class="card border-dark box-title">Pokemon</h1>
                            <h3 class="card-title">Pokemon Name: ${this.name}</h3>
                                <img src="${this.img}"/>
                            <p class="card-text"><b>Height:</b> ${this.height}</p>
                            <p class="card-text"><b>Weight:</b> ${this.weight}</p>
                            <p class="card-text"><b>Type:</b> ${this.types}</p>
                            ${this.ButtonBuilder}
                        </div>
        </div> 
        `
    }

    get ButtonBuilder(){
        if(this._id){
        return `
        <button class="btn btn-danger" onclick="app.myPokeController.releasePokemon()">Release Pokemon</button>
            `
        }
        return `
        <button class="btn btn-success" onclick="app.myPokeController.catchPokemon()">Catch Pokemon</button>
        `
    }
}