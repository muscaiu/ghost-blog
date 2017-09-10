
    var path = require('path'),
        config;

    config = {
        production: {
            url: 'http://54.229.207.126:2368',
            mail: {},
            database: {
                client: 'sqlite3',
                connection: {
                    filename: path.join(__dirname, '/content/data/ghost.db')
                },
                debug: false
            },

            server: {
                host: '0.0.0.0',
                port: '2368'
            }
        },
        development: {
            url: 'http://127.0.0.1:2368',
            database: {
                client: 'sqlite3',
                connection: {
                    filename: path.join(__dirname, '/content/data/ghost-dev.db')
                },
                debug: false
            },
            server: {
                host: '127.0.0.1',
                port: '2368'
            },
            paths: {
                contentPath: path.join(__dirname, '/content/')
            }
        },
        testing: {
            url: 'http://127.0.0.1:2369',
            database: {
                client: 'sqlite3',
                connection: {
                    filename: path.join(__dirname, '/content/data/ghost-test.db')
                },
                pool: {
                    afterCreate: function (conn, done) {
                        conn.run('PRAGMA synchronous=OFF;' +
                        'PRAGMA journal_mode=MEMORY;' +
                        'PRAGMA locking_mode=EXCLUSIVE;' +
                        'BEGIN EXCLUSIVE; COMMIT;', done);
                    }
                },
                useNullAsDefault: true
            },
            server: {
                host: '127.0.0.1',
                port: '2369'
            },
            logging: false
        },
        'testing-mysql': {
            url: 'http://127.0.0.1:2369',
            database: {
                client: 'mysql',
                connection: {
                    host     : '127.0.0.1',
                    user     : 'root',
                    password : '',
                    database : 'ghost_testing',
                    charset  : 'utf8'
                }
            },
            server: {
                host: '127.0.0.1',
                port: '2369'
            },
            logging: false
        },

        // ### Testing pg
        // Used by Travis - Automated testing run through GitHub
        'testing-pg': {
            url: 'http://127.0.0.1:2369',
            database: {
                client: 'pg',
                connection: {
                    host     : '127.0.0.1',
                    user     : 'postgres',
                    password : '',
                    database : 'ghost_testing',
                    charset  : 'utf8'
                }
            },
            server: {
                host: '127.0.0.1',
                port: '2369'
            },
            logging: false
        }
    };

    module.exports = config;
