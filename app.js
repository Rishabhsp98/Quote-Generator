const generateButton = document.querySelector('#generatebtnId');
const quotedText = document.querySelector("#jsQuote");
const author = document.querySelector("#author");


generateButton.addEventListener(
    "click",CallAPI
)
const APIURL = "https://api.quotable.io/random"

async function CallAPI() {
    
    
    // quotedText.innerHTML = "Hi there I am generated Text!"
    // console.log(response);
    try{
        const response  = await fetch(APIURL)
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json =await response.json();
        quotedText.innerHTML = json.content;
        author.innerHTML = "~ By " + json.authorSlug;
    }
    catch(err) {
        alert("Failed to fetch API URL: " + JSON.stringify(err));
    }

}

