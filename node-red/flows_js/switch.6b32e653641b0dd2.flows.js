const Node = {
  "id": "6b32e653641b0dd2",
  "type": "switch",
  "z": "1e5470dae1365ec6",
  "name": "is CSV?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": ";",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 680,
  "y": 160,
  "wires": [
    [
      "0a5ebccb2dbacf96"
    ],
    [
      "635b49bb5c8287b5"
    ]
  ],
  "_order": 35
}

module.exports = Node;