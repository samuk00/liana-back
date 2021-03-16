const express = require('express')
const cors = require('cors')
const app = express()
const Parser = require('rss-parser')

const parser = new Parser()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

app.get('/api/news', (req, res) => {
    parser.parseURL('https://www.lianatech.com/blog.rss', (err, feed) => {
        if (feed) {
            res.json(feed)
        } else {
            res.status(400)
        }
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})