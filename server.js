const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()


mongoose.connect('mongodb://localhost/daily', { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test artical',
        createdAt: new Date(),
        description: 'Description text..'
    },
    {
        title: 'Test artical 2',
        createdAt: new Date(),
        description: 'Description text 2..'
    }]
    res.render('articles/index', { articles: articles })
})

app.listen(5000)