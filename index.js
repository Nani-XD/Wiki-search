let searchInputEl = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
console.log("hello")





function createAndAppend(result) {
    // 1. Div Container -- result-item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultEl.appendChild(resultItemEl)

    // 2. Anchor Title -- result-title
    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = result.title;
    resultTitleEl.href = result.link;
    resultTitleEl.target = "_blank";
    searchResultEl.appendChild(resultTitleEl);
    // 3. Title Break
    let titleBreakEl = document.createElement("br");
    searchResultEl.appendChild(titleBreakEl)
    // 4. Anchor Url -- result-url
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = result.link
    urlEl.textContent = result.link;
    searchResultEl.appendChild(urlEl)
    // 5. Line break
    let lineBreakEl = document.createElement("a");
    searchResultEl.appendChild(lineBreakEl);

    // 6. Paragraph Discription
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = result.description;
    searchResultEl.appendChild(descriptionEl);
}


function displayResults(searchResults) {
    spinnerEl.classList.toggle("d-none")
    for (let result of searchResults) {
        createAndAppend(result)
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultEl.textContent = ""
        let userInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=?" + userInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            })
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia)
