import { ProxyState } from "../AppState.js";
import { mythologiesService } from "../Services/MythologiesServices.js";

// import { mythologiesService } from "../Services/MythologiesService.js";


//Private
function _draw() {
    let mythologies = ProxyState.mythologies;
    let template = ''
    mythologies.forEach(mythology =>
        template += mythology.Template
    )

    document.getElementById('newmythology').innerHTML = template
}

//Public
export default class MythologiesController {
    constructor() {
        ProxyState.on("mythologies", _draw);
        _draw()
    }

    addMythology() {
        mythologiesService.addMythology()
        ProxyState.mythologies = ProxyState.mythologies
    }
}
