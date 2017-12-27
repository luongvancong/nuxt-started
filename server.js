const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = require('express')()

const env = require('./env')
const port = env.port

// Cookie parser
app.use(cookieParser())

// Body parser, to access `req.body`
app.use(bodyParser.json())

// Sessions to create `req.session`
app.use(session({
  secret: 'zxcvbnmasdfghjklqwertyuiop1234567890!@#$%%^&*()ZXCVBNMASDFGHJKLQWERTYUIOP',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// We instantiate Nuxt.js with the options
const nuxt = new Nuxt(config)

// No build in production
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)
app.listen(port)
console.log('Server is listening on http://localhost:' + port)