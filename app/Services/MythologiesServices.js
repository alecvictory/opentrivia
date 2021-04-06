import { ProxyState } from "../AppState.js";
import Mythology from "../Models/Mythology.js";
import { api } from "./AxiosService.js";

class MythologiesService {
    async addMythology() {

        let response = await api.get()

        let mythology = response.data.results.map(m => new Mythology(m))

        ProxyState.mythologies = mythology
    }
}

export const mythologiesService = new MythologiesService();