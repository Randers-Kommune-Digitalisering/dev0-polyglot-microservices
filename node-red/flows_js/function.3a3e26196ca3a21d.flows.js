const Node = {
  "id": "3a3e26196ca3a21d",
  "type": "function",
  "z": "5ee0ae05e3ad5b5a",
  "g": "137562721a5bbb11",
  "name": "Set Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 890,
  "y": 480,
  "wires": [
    []
  ],
  "_order": 84
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({ fill: msg.status.fill, shape: msg.status.shape, text: msg.status.text });
  return msg;
}

module.exports = Node;