let painting;
let showInfo = false;

async function clickedEvent(img_id, item_index, p_id) {
    let id = document.getElementsByTagName('img')[img_id].attributes[1].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['AIC-User-Agent', 'art-gallery-api (elrosien@gmail.com']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,date_display,artist_display,place_of_origin,medium_display,style_title`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);

    let my_text = document.getElementById(`${p_id}`)

    showInfo = true
    let title = response.data.title;
    let date = response.data.date_display;
    let artist = response.data.artist_display;
    let origin = response.data.place_of_origin;
    let medium = response.data.medium_display;
    let style = response.data.style_title;
    my_text.innerHTML = `<div id="test">Title: ${title}<br>Date: ${date}<br>Artist: ${artist}<br>Origin: ${origin}<br>Medium: ${medium}<br>Style: ${style}</div>`;
}

function getInfo(id, event) {
    switch(id){
        case 'img1': {
            event.stopPropagation();
            clickedEvent(0,0, "popUp1")
            break;
        }
        case 'img2': {
            event.stopPropagation();
            clickedEvent(1,0, "popUp2")
            break;
        }
        case 'img3': {
            event.stopPropagation();
            clickedEvent(2,0, "popUp3")
            break;
        }
        case 'img4': {
            event.stopPropagation();
            clickedEvent(3,0, "popUp4")
            break;
        }
        case 'img5': {
            event.stopPropagation();
            clickedEvent(4,0, "popUp5")
            break;
        }
        case 'img6': {
            event.stopPropagation();
            clickedEvent(5,0, "popUp6")
            break;
        }
    }
}
