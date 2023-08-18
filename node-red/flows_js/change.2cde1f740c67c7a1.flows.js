const Node = {
  "id": "2cde1f740c67c7a1",
  "type": "change",
  "z": "848072497d00f862",
  "g": "516826cdc611d4f0",
  "name": "Hent resultat",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.result.resources",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "url",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 280,
  "wires": [
    [
      "157fdbe08551e47f"
    ]
  ],
  "_order": 58
}

module.exports = Node;