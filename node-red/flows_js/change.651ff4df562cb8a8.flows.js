const Node = {
  "id": "651ff4df562cb8a8",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Opsætning af OpenData dataset \\n antal-krydsende-cyklister-over-randers-fjord",
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
  "x": 250,
  "y": 160,
  "wires": [
    [
      "38fdf4a6a295ebdc"
    ]
  ],
  "_order": 77
}

module.exports = Node;