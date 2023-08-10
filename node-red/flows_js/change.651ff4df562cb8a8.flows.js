const Node = {
  "id": "651ff4df562cb8a8",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Opsætning af dataset \\n antal-krydsende-cyklister-over-randers-fjord",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "antal-krydsende-cyklister-over-randers-fjord",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "400",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 330,
  "y": 340,
  "wires": [
    [
      "a00f7e1112c294b9"
    ]
  ],
  "_order": 82
}

module.exports = Node;