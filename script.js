const resultContainer = document.querySelector('.search-results-container');

let page = 1;

function queryHandler (e) {

    e.preventDefault();

    console.log(e.target);

    if (!(e.target.classList.contains('show-more'))) {
        resultContainer.innerHTML = '';
    }

    page += 1;

    const inputQuery = document.querySelector('#query').value;

    const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputQuery}&client_id=qQv2-atfVHL0yMBC2wGHHNf86Q5uXDA_tC2pSDjcdNc`;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', apiURL);

    xhr.send();

    xhr.onload = () => {

        const parsedData = JSON.parse(xhr.response);
        console.log(xhr.response);

        const result = parsedData.results;
        console.log(parsedData.result);

        for (let i=0; i<result.length; i++) {

            const imgURL = result[i].urls.raw;

            const items = document.createElement('div');
            items.classList.add('search-result');

            const image = document.createElement('img');
            image.setAttribute('src', imgURL);

            items.append(image);

            resultContainer.append(items);

        }

    };

    xhr.onerror = () => ('error');

};