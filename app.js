const generateButton = document.querySelector('#generatebtnId');
const quotedText = document.querySelector("#jsQuote");


generateButton.addEventListener(
    "click",CallAPI
)
const APIURL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

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
        quotedText.innerHTML = json.message;
    }
    catch(err) {
        alert("Failed to fetch API URL: " + JSON.stringify(err));
    }

}

