migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0v921almmyrqef1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxdmuyl8",
    "name": "titulo",
    "type": "text",
    "required": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxdmuyl8",
    "name": "titulo",
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
})
