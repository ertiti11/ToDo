migrate((db) => {
  const collection = new Collection({
    "id": "0v921almmyrqef1",
    "created": "2023-05-03 10:40:27.681Z",
    "updated": "2023-05-03 10:40:27.681Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "tdlfpgpy",
        "name": "descripcion",
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
  const collection = dao.findCollectionByNameOrId("0v921almmyrqef1");

  return dao.deleteCollection(collection);
})
