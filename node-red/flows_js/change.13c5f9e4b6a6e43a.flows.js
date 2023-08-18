const Node = {
  "id": "13c5f9e4b6a6e43a",
  "type": "change",
  "z": "e9a2ad4ac092842f",
  "g": "da355f990a7721e4",
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
  "x": 367,
  "y": 140,
  "wires": [
    [
      "b42415706ceeb5c0"
    ]
  ],
  "_order": 96
}

module.exports = Node;