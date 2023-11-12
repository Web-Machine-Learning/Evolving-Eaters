import { Input, NeuralNetwork, Output } from "./neuralNetwork/network"
import { networkManager } from "./neuralNetwork/networkManager"

export function init() {

    window.addEventListener('load', main)
}

function main() {

    networkManager.initVisuals()

    const inputs = [
        new Input(
            'X', 
            [
                10,
            ],
            [
                '1'
            ],
        ),
        new Input(
            'Y', 
            [
                8,
            ],
            [
                '2'
            ],
        ),
        ],
        outputs = [
            new Output('Z'),
            new Output('X'),
        ]
    
    startNetworks(inputs, outputs)
    setInterval(() => { runNetworks(inputs) }, 1000)
}

function startNetworks(inputs: Input[], outputs: Output[]) {
    
    const firstNetwork = new NeuralNetwork()
    firstNetwork.init(inputs, outputs.length)
    firstNetwork.clone()

    for (const ID in networkManager.networks) {

        const network = networkManager.networks[ID]

        network.createVisuals(inputs, outputs)
    }
}

function runNetworks(inputs: Input[]) {

    for (const networkID in networkManager.networks) {

        const network = networkManager.networks[networkID]

        network.forwardPropagate(inputs)

        network.updateVisuals(inputs)

        network.mutate()
    }
}