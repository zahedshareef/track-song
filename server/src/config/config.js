module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tracksong',
        user: process.env.DB_USER || 'tracksong',
        password: process.env.DB_PASS || 'tracksong',
        option: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tracksong.sqlite',
        }
    }
}