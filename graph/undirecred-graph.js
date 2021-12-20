class Graph {
    #numberOfNodes = 0;
    #adjacentList = {};

    get numberOfNodes() {
        return this.#numberOfNodes;
    }

    addVertex(node) {
        const isNodeExist = !!this.#adjacentList[`${node}`];
        if (!isNodeExist) {
            this.#adjacentList[`${node}`] = [];
            this.#numberOfNodes += 1;
        }

        return this.#numberOfNodes;
    };

    removeVertex(node) {
        const isNodeExist = !!this.#adjacentList[`${node}`];
        if (isNodeExist) {
            delete this.#adjacentList[`${node}`];
            this.#numberOfNodes -= 1;
        }

        return this.#numberOfNodes;
    };

    addEdge(node1, node2) {
        throw new Error('NOT IMPLEMENTED');
    };

    getNode(node) {
        throw new Error('NOT IMPLEMENTED');
    }

    showConnections() {
        throw new Error('NOT IMPLEMENTED');
    };
}

module.exports = Graph;
