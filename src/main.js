import { loadHtml } from './lib/fetch.js'
import { parse } from './lib/parser.js'

const url = 'https://www.courtside1891.basketball'
const proxy = '/proxy.php'
const title = 'FIBA EuroBasket 2025 | Full Games'

const target = document.querySelector( '#target' )
const template = document.querySelector( '#video-template' )

async function start() {
    const content = await loadHtml( proxy )
    // const content = await loadHtml( url )
    const articles = parse( content, title )

    articles.forEach( x => {
        const clone = template.content.cloneNode( true )
        clone.querySelector( '.title' ).textContent = x.title
        clone.querySelector( '.description' ).textContent = x.description
        clone.querySelector( '.videoUrl' ).textContent = 'Watch ' + x.title
        clone.querySelector( '.videoUrl' ).href = url + x.videoUrl
        clone.querySelector( '.videoUrl' ).target = url + x.videoId

        target.appendChild( clone )
    } )
}

start()
