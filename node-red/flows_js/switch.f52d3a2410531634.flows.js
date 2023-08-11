const Node = {
  "id": "f52d3a2410531634",
  "type": "switch",
  "z": "848072497d00f862",
  "g": "516826cdc611d4f0",
  "name": "Check statusCode for sucess",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 580,
  "y": 300,
  "wires": [
    [
      "2cde1f740c67c7a1"
    ],
    [
      "acc89417ed0174bb"
    ]
  ],
  "_order": 44
}

module.exports = Node;