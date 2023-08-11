const Node = {
  "id": "d4c4c4565d1e740c",
  "type": "subflow",
  "name": "Database connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 60,
      "y": 140,
      "wires": [
        {
          "id": "3576edeecbbb87af"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1110,
      "y": 140,
      "wires": [
        {
          "id": "076ff355c5b536f3",
          "port": 0
        },
        {
          "id": "ad90e5fdf572ba80",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1060,
    "y": 300,
    "wires": [
      {
        "id": "076ff355c5b536f3",
        "port": 0
      },
      {
        "id": "9ca16ae19abcd889",
        "port": 0
      }
    ]
  },
  "_order": 3
}

module.exports = Node;