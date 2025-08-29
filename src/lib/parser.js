export function h2TextsFromHtml( html ) {
    const doc = new DOMParser().parseFromString( html, 'text/html' )
    return [ ...doc.querySelectorAll( 'h2' ) ].map( el => el.textContent.trim() )
}
