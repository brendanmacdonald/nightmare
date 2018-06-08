const Nightmare = require('nightmare')
const baseURL = 'http://www.bbc.co.uk/news'
const mostReadSelector = '.nw-c-most-read__items .gs-o-media__body';

Nightmare({
        show: false,
        openDevTools: false,
        waitTimeout: 2000
    })
    .goto(baseURL)
    .evaluate(storySelector => {
        var storyElements = [].slice.call(document.querySelectorAll(storySelector))
        var storyTitles = storyElements.map(storyElement => storyElement.innerText)
        return storyTitles
    }, mostReadSelector)
    .end()
    .then(titles => {
        for (var title in titles) {
            console.log(`${titles[title]}`)
        }
    })
    .catch(error => console.error(error))