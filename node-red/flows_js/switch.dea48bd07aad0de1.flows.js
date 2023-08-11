const Node = {
  "id": "dea48bd07aad0de1",
  "type": "switch",
  "z": "848072497d00f862",
  "g": "2d4e33e8ad9e6a3a",
  "name": "Kontrollér hvorvidt \\n alt data er ekskluderet",
  "property": "payload ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 600,
  "y": 520,
  "wires": [
    [
      "1b77659a1a8dfeaa"
    ],
    [
      "7338d6b97f7ece4e"
    ]
  ],
  "_order": 53
}

module.exports = Node;