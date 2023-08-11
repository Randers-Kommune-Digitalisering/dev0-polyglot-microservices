const Node = {
  "id": "edfceee49ce1c89d",
  "type": "change",
  "z": "848072497d00f862",
  "g": "984ea664dfd63f17",
  "name": "Opsætning af forespørgsel ↓ \\n Hent datafil på url \\n msg.payload.url",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "payload.url",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "GET",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metadata",
      "pt": "msg",
      "to": "{ \"id\" : payload.id }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 740,
  "wires": [
    [
      "5507c0dccf748293"
    ]
  ],
  "_order": 57
}

module.exports = Node;