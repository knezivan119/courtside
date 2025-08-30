<?php

$url = "https://www.courtside1891.basketball";

# SECURITY (?)
$allowedOrigin = $_SERVER['HTTP_HOST'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ( $origin !== "https://$allowedOrigin" && $origin !== "http://$allowedOrigin" ) {
    http_response_code( 403 );
    echo "Forbidden";
    exit;
}

# FETCH
$data = @file_get_contents( $url );

if ( $data === false ) {
    http_response_code( 502 );
    echo "Failed to fetch content";
    exit;
}

# RETURN
header( "Content-Type: text/html; charset=UTF-8" );
echo $data;
