const Nightmare = require('nightmare')
const HACKER_NEWS_URL = 'https://news.ycombinator.com/'
const storyLinkSelector = '.storylink'

Nightmare()
    .goto('http://www.bbc.co.uk/news')
    .evaluate(() => Array.from(document.querySelectorAll('.nw-c-most-read__items .gs-o-media__body')).map(el => el.innerText))
    .end()
    .then(result => {
        for (var i = 0; i < result.length; i++) {
            console.log(`\n${result[i]}`)
        }
    })

Nightmare({
        show: false,
        openDevTools: false,
        waitTimeout: 2000
    })
    .goto(HACKER_NEWS_URL)
    .evaluate(storySelector => {
        var storyElements = [].slice.call(document.querySelectorAll(storySelector))
        var storyTitles = storyElements.map(storyElement => storyElement.innerText)
        return storyTitles
    }, storyLinkSelector)
    .end()
    .then(result => console.log(result))
    .catch(error => console.error(error))