const Node = {
  "id": "ceb19379fe913572",
  "type": "function",
  "z": "d4c4c4565d1e740c",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1330,
  "y": 80,
  "wires": [
    []
  ],
  "_order": 69
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;