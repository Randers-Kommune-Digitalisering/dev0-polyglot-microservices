const Node = {
  "id": "88db1ccade1c4df6",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "4479b20a2bb18586",
  "name": "HTTP error?",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 890,
  "y": 140,
  "wires": [
    [
      "689271986ecb4370"
    ]
  ],
  "_order": 85
}

module.exports = Node;