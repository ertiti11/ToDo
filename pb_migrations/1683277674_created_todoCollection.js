migrate((db) => {
  const collection = new Collection({
    "id": "cwklg72doqbgycr",
    "created": "2023-05-05 09:07:54.071Z",
    "updated": "2023-05-05 09:07:54.071Z",
    "name": "todoCollection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ykwpiqrq",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cwklg72doqbgycr");

  return dao.deleteCollection(collection);
})
