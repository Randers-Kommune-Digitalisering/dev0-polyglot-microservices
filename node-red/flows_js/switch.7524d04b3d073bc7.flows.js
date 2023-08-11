const Node = {
  "id": "7524d04b3d073bc7",
  "type": "switch",
  "z": "848072497d00f862",
  "name": "is 404 / 409?",
  "property": "status.text",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "404",
      "vt": "str"
    },
    {
      "t": "cont",
      "v": "409",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1070,
  "y": 1320,
  "wires": [
    [
      "689271986ecb4370"
    ],
    [
      "11151f3d0b552755"
    ]
  ],
  "_order": 98
}

module.exports = Node;