import React from "react";

export default function ApiCall() {
    
    fetch('https://reddit.com/r/memes.json')
    .then(res => res.json())
    .then(data => console.log(data))
}

