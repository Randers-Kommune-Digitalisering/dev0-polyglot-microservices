const Node = {
  "id": "78d4e61274c408ed",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "8809b480781b1f54",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 970,
  "y": 580,
  "wires": [
    [
      "05bdd0d0a0635c7b"
    ]
  ],
  "_order": 107
}

Node.template = `
SHOW TABLES
`

module.exports = Node;