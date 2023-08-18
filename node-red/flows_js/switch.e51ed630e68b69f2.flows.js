const Node = {
  "id": "e51ed630e68b69f2",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "c1aa3745a7e96636",
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
  "x": 991,
  "y": 160,
  "wires": [
    [
      "142bbec1ecf1cc34",
      "509681d373ab71cc"
    ]
  ],
  "_order": 118
}

module.exports = Node;