module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'localhost',
  SECRET_TOKEN: 'mytoken'
}
