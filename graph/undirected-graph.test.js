const assert = require('assert');
const Graph = require('./undirecred-graph');

describe('Undirected Graph => ', function () {
    describe('default state ::: ', function () {
        let graph;
        beforeEach(() => {
            graph = new Graph();
        });
        it('should NOT have any vertex after creation', function () {
            assert.strictEqual(graph.numberOfNodes, 0);
        });
    });

    describe('addVertex ::: ', function () {
        let graph;
        let addResult;
        beforeEach(() => {
            graph = new Graph();
            addResult = graph.addVertex(1);
        });
        it('should return new number of vertexes', function () {
            assert.strictEqual(addResult, 1);
        });
        it('should update number of vertexes after addition', function () {
            assert.strictEqual(graph.numberOfNodes, 1);
        });
        it('should NOT change counter if vertex already exist', function () {
            graph.addVertex(1);
            assert.strictEqual(graph.numberOfNodes, 1);
        });
    });

    describe('removeVertex ::: ', function () {
        let graph;
        let removeResult;
        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(1);
            graph.addVertex(2);
            graph.addVertex(5);
            removeResult = graph.removeVertex(1);
        });
        it('should return new number of vertexes', function () {
            assert.strictEqual(removeResult, 2);
        });
        it('should update number of vertexes after addition', function () {
            assert.strictEqual(graph.numberOfNodes, 2);
        });
        it('should NOT do anything if vertex not exist', function () {
            graph.removeVertex(4);
            assert.strictEqual(graph.numberOfNodes, 2);
        });
    });

    describe('getNode ::: ', function () {
        let graph;
        beforeEach(() => {
            graph = new Graph();
        })
        it('should throw NOT IMPLEMENTED message', function () {
            assert.throws(graph.getNode, /NOT IMPLEMENTED$/);
        });
    });
    describe('showConnections ::: ', function () {
        let graph;
        beforeEach(() => {
            graph = new Graph();
        })
        it('should throw NOT IMPLEMENTED message', function () {
            assert.throws(graph.showConnections, /NOT IMPLEMENTED$/);
        });
    });

    describe('addEdge ::: ', function () {
        let graph;
        beforeEach(() => {
            graph = new Graph();
        })
        it('should throw NOT IMPLEMENTED message', function () {
            assert.throws(graph.addEdge, /NOT IMPLEMENTED$/);
        });
    });
});
