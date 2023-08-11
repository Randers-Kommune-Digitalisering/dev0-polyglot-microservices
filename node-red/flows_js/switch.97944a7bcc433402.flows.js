const Node = {
  "id": "97944a7bcc433402",
  "type": "switch",
  "z": "848072497d00f862",
  "g": "984ea664dfd63f17",
  "name": "Flere filer?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "istype",
      "v": "array",
      "vt": "array"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 230,
  "y": 720,
  "wires": [
    [
      "4fb7f06c913eb126"
    ],
    [
      "4f626308b56adf03"
    ]
  ],
  "_order": 58
}

module.exports = Node;