
export function parse( html, title ) {

    const doc = new DOMParser().parseFromString( html, 'text/html' )

    const groups = [ ...doc.querySelectorAll( '.widget-header__title' ) ]

    const group = groups.filter( x => x.textContent.trim() == title )
        ?.[ 0 ]?.closest( 'section' ) ?? null

    let articles = []
    if ( group ) {
        articles = [ ...group.querySelectorAll( 'article' ) ]
            .map( x => JSON.parse( x.getAttribute( 'data-slider-props' ) ) )
    }

    return articles
}

