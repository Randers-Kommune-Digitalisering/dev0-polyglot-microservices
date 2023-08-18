const Node = {
  "id": "7023b4fd6de8be22",
  "type": "change",
  "z": "848072497d00f862",
  "g": "2d4e33e8ad9e6a3a",
  "name": "Datafilter ↓\\n Ekskludér filer oprettet tidligere \\n end max_file_age_days siden",
  "rules": [
    {
      "t": "set",
      "p": "excludedFiles",
      "pt": "msg",
      "to": "(\t/* Udregner millis for max_file_age_days tilbage i tiden */\t$maxAge := $millis() - (max_file_age_days * 24 * 60 * 60 * 1000) ~> $number;\t\t/* Find datasæt fra payload som er oprettet før $maxAge */\tpayload [ created ~> $toMillis() <= $maxAge ]\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $filter( function($v)\t{\t    excludedFiles ?\t        $not( $v in excludedFiles )   /* Fjern fra payload hvis filen er ekskluderet */\t        :\t        true                  /* Inkluder alle filer hvis ingen excludedFiles findes */\t})",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 500,
  "wires": [
    [
      "dea48bd07aad0de1",
      "eefc4d981f3a4c01"
    ]
  ],
  "_order": 59
}

module.exports = Node;