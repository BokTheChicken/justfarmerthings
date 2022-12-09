import React from "react";

export default function ApiCall() {
    
    fetch('https://www.reddit.com/r/memes.json',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'User 1'
        })
    }).then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}

