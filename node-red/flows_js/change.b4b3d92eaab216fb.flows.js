const Node = {
  "id": "b4b3d92eaab216fb",
  "type": "change",
  "z": "848072497d00f862",
  "g": "adaaced64d6ee0e2",
  "name": "Konfigurér \\n periode for datatræk",
  "rules": [
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "max_file_age_days ? max_file_age_days : 0 \t/* Sætter værdien til 0 hvis max_file_age_days er NULL eller ikke eksisterer */",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "delay",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 120,
  "wires": [
    [
      "41548cc85d4a21f4"
    ]
  ],
  "_order": 40
}

module.exports = Node;