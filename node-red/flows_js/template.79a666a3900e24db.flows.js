const Node = {
  "id": "79a666a3900e24db",
  "type": "template",
  "z": "848072497d00f862",
  "g": "5058659da1be591c",
  "name": "build metrics",
  "field": "metrics",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 1110,
  "y": 460,
  "wires": [
    []
  ],
  "_order": 108
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "dataset": "{{dataset}}",
        "responseUrl": "{{{responseUrl}}}",
        "http-status": {{statusCode}},
        "file-status" : "{{payload_count}} datafiles eligible for pull, because file age is within {{max_file_age_days}} days"
    }
}
`

module.exports = Node;