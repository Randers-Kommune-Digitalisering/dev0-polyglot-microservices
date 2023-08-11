const Node = {
  "id": "0caf8ad2b50ae1c3",
  "type": "switch",
  "z": "848072497d00f862",
  "g": "d55b505a1b703e47",
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
  "x": 640,
  "y": 940,
  "wires": [
    [
      "dc4a2cad05fa37fd"
    ],
    [
      "347225c3ce5b1d27"
    ]
  ],
  "_order": 57
}

module.exports = Node;