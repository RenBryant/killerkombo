const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }
  # Both the type Game and Genre need to be refactored to... 
  # ...include the keys to be return depending on the query.
  # =======================================================
  type Game {
    id: ID
    name: String
    background_image: String
    released: String
    rating: String
    genres: [Genre]
    platforms: [Platform]
    short_screenshots: [Screenshots]
  }
  type Screenshots {
    image: String
  }
  type Genre {
    id: ID
    name: String
  }
  type Platform {
    name: String
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    getAllGames: [Game]
    getGameById(id: ID!): [Game]
    getGenres:[Genre]
    getGenreById(id: ID!): [Genre]
    getGamesBySearch(game: String!): [Game]
    getTopGames: [Game]
    # WORKING QUERY
    # =======================================================
    getPeople: [People]
    # =======================================================
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
