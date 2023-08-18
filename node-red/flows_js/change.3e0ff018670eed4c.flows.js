const Node = {
  "id": "3e0ff018670eed4c",
  "type": "change",
  "z": "848072497d00f862",
  "g": "5058659da1be591c",
  "name": "Tæl filer",
  "rules": [
    {
      "t": "set",
      "p": "payload_count",
      "pt": "msg",
      "to": "payload ~> $count()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "excluded_count",
      "pt": "msg",
      "to": "excludedFiles ~> $count()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 480,
  "wires": [
    [
      "79a666a3900e24db",
      "9878ab3aeb4562c3"
    ]
  ],
  "_order": 62
}

module.exports = Node;