{
  $jsonSchema: {
    bsonType: "object",
    required: [
      "_id",
      "titulo",
      "autor",
      "ano",
      "preco",
    ],
    properties: {
      _id: {
        bsonType: "int",
        description:
          "deve ser um inteiro e é obrigatório",
      },
      titulo: {
        bsonType: "string",
        description:
          "deve ser uma string e é obrigatória",
      },
      autor: {
        bsonType: "string",
        description:
          "deve ser uma string e é obrigatória",
      },
      ano: {
        bsonType: "int",
        minimum: 1800,
        maximum: 2023,
        description:
          "deve ser um inteiro entre [1800, 2023] e é obrigatório",
      },
      preco: {
        bsonType: "double",
        description:
          "deve ser um double e é obrigatório",
      },
    },
  },
}