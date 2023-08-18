const Node = {
  "id": "81659ac2ddcd0093",
  "type": "template",
  "z": "e9a2ad4ac092842f",
  "g": "2db8e6e0b96e0411",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 910,
  "y": 580,
  "wires": [
    [
      "974d0cfb24c28e45"
    ]
  ],
  "_order": 93
}

Node.template = `
SHOW TABLES
`

module.exports = Node;