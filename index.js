const process = require('process')
const dotenv = require('dotenv')
const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./src/schemas')
const resolvers = require('./src/resolvers')

const processId = process.pid
dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers })

try {
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.info(`🚀  Server ready at ${url} (PID: ${processId})`)
  })
} catch (error) {
  console.error('✗ Unable to start server:', error)
  throw error
}
