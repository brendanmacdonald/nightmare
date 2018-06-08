const Nightmare = require('nightmare')
const obj = require('../utils/page_objects')

Nightmare({
        show: false,
        openDevTools: false,
        waitTimeout: 2000
    })
    .goto(obj.baseURL + '/news')
    .evaluate(storySelector => {
        var storyElements = [].slice.call(document.querySelectorAll(storySelector))
        var storyTitles = storyElements.map(storyElement => storyElement.innerText)
        return storyTitles
    }, obj.mostReadSelector)
    .end()

    .then(titles => {
        for (var title in titles) {
            console.log(`${titles[title]}`)
        }
    })
    .catch(error => console.error(error))