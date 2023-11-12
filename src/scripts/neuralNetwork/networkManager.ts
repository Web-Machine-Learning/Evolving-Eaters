import { NeuralNetwork } from "./network"


class NetworkManager {
    activationColor = 'rgb(0, 137, 236)'
    negativeColor = 'rgb(241, 0, 19)'
    learningRate = 1
    bias = 0
    hiddenLayersCount = 5
    hiddenPerceptronCount = 5

    IDIndex: number
    networks: {[ID: string]: NeuralNetwork}
    visualsParent: Partial<HTMLElement>

    constructor() {

        const networkManager = this

        networkManager.networks = {}
        networkManager.IDIndex = 0
    }
    newID() {

        networkManager.IDIndex += 1
        return networkManager.IDIndex.toString()
    }
    
    initVisuals() {
    
        networkManager.visualsParent = document.getElementById('networkManagerParent')
    
        document.getElementById('colorGuideActivation').style.background = networkManager.activationColor;
        document.getElementById('colorGuideNegative').style.background = networkManager.negativeColor
    }
}

export const networkManager = new NetworkManager()