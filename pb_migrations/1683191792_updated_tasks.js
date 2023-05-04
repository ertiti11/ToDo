migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0v921almmyrqef1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l3lgskpk",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/heic-sequence",
        "image/heif",
        "image/avif",
        "image/svg+xml",
        "image/vnd.mozilla.apng"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0v921almmyrqef1")

  // remove
  collection.schema.removeField("l3lgskpk")

  return dao.saveCollection(collection)
})
