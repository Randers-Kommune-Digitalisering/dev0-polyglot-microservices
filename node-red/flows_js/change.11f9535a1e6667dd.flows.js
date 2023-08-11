const Node = {
  "id": "11f9535a1e6667dd",
  "type": "change",
  "z": "d4c4c4565d1e740c",
  "name": "Create status object",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "{\t   \"fill\": \"green\",\t   \"shape\":\"dot\",\t   \"text\": \"OK\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1140,
  "y": 80,
  "wires": [
    [
      "ceb19379fe913572"
    ]
  ],
  "_order": 68
}

module.exports = Node;