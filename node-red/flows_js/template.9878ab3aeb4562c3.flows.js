const Node = {
  "id": "9878ab3aeb4562c3",
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
  "y": 500,
  "wires": [
    []
  ],
  "_order": 109
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "dataset": "{{dataset}}",
        "responseUrl": "{{{responseUrl}}}",
        "http-status": {{statusCode}},
        "file-status" : "{{excluded_count}} datafiles excluded from pull, beacuse file age exceeds {{max_file_age_days}} days"
    }
}
`

module.exports = Node;