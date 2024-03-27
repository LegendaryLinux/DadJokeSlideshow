<?php
// Check if this is a GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return a random setup and punchline
    $jokes = json_decode(file_get_contents(dirname(__DIR__).'/../public/assets/dadJokes.json'), true);
    $response = json_encode($jokes[array_rand($jokes)]);
    header('Content-Type: application/json');
    header('Content-Length: '.strlen($response));
    echo $response;
    http_response_code(200);
}