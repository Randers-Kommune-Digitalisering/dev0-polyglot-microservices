const Node = {
  "id": "41548cc85d4a21f4",
  "type": "change",
  "z": "848072497d00f862",
  "g": "adaaced64d6ee0e2",
  "name": "Opsætning af forespørgsel ↓ \\n Hent metadata for \\n msg.dataset",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://admin.opendata.dk/api/3/action/package_show",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "flow",
      "to": "url",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"id\":\"\",\"include_tracking\":false,\"include_tracking_children\":false,\"sort\":\"resources.metadata_created asc\"}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.id",
      "pt": "msg",
      "to": "dataset",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 120,
  "wires": [
    [
      "3279cc4f911d02a4"
    ]
  ],
  "info": "",
  "_order": 53
}

Node.info = `
https://www.opendata.dk/randers-kommune/antal-krydsende-cyklister-over-randers-fjord
`

module.exports = Node;