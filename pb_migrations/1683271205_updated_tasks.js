migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0v921almmyrqef1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "suo6zmiv",
    "name": "color",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0v921almmyrqef1")

  // remove
  collection.schema.removeField("suo6zmiv")

  return dao.saveCollection(collection)
})
