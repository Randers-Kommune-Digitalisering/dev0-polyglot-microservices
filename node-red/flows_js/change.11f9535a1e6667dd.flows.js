const Node = {
  "id": "11f9535a1e6667dd",
  "type": "change",
  "z": "848072497d00f862",
  "name": "Create status object",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "{\t   \"fill\": \"yellow\",\t   \"shape\":\"ring\",\t   \"text\": statusCode & \" \" & payload.error.message\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1500,
  "wires": [
    [
      "ceb19379fe913572"
    ]
  ],
  "_order": 43
}

module.exports = Node;