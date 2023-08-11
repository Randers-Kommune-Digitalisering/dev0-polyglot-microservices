const Node = {
  "id": "ceb19379fe913572",
  "type": "function",
  "z": "848072497d00f862",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1150,
  "y": 1500,
  "wires": [
    []
  ],
  "_order": 102
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;