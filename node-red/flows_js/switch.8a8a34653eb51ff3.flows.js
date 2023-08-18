const Node = {
  "id": "8a8a34653eb51ff3",
  "type": "switch",
  "z": "e9a2ad4ac092842f",
  "g": "bbfe787f7ad92a3c",
  "name": "HTTP error?",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 927,
  "y": 160,
  "wires": [
    [
      "3cef2d6f6210e270",
      "32c382d224800fe0"
    ]
  ],
  "_order": 90
}

module.exports = Node;