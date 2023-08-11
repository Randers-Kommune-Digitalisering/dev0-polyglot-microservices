const Node = {
  "id": "848072497d00f862",
  "type": "subflow",
  "name": "OpenData.dk - Randers org. - Connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 60,
      "y": 120,
      "wires": [
        {
          "id": "b4b3d92eaab216fb"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1340,
      "y": 480,
      "wires": [
        {
          "id": "9878ab3aeb4562c3",
          "port": 0
        },
        {
          "id": "79a666a3900e24db",
          "port": 0
        }
      ]
    },
    {
      "x": 1330,
      "y": 620,
      "wires": [
        {
          "id": "535bf4442ec048f3",
          "port": 0
        }
      ]
    },
    {
      "x": 1330,
      "y": 760,
      "wires": [
        {
          "id": "1b77659a1a8dfeaa",
          "port": 0
        },
        {
          "id": "37b4c7ba2833bbcd",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#E9967A",
  "outputLabels": [
    "metrics",
    "retry",
    "data"
  ],
  "icon": "node-red/inject.svg",
  "status": {
    "x": 1360,
    "y": 100,
    "wires": [
      {
        "id": "5f972c010995566f",
        "port": 0
      }
    ]
  },
  "_order": 2
}

module.exports = Node;