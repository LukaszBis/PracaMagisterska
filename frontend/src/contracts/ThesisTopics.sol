// ThesisTopics.sol
pragma solidity ^0.8.0;

contract ThesisTopics {
    struct Topic {
        uint id;
        string name;
    }

    Topic[] public topics;
    uint public nextId;

    function addTopic(string memory name) public {
        topics.push(Topic(nextId, name));
        nextId++;
    }

    function getTopic(uint id) public view returns (uint, string memory) {
        require(id < nextId, "Topic does not exist.");
        return (topics[id].id, topics[id].name);
    }

    function getTopics() public view returns (Topic[] memory) {
        return topics;
    }
}