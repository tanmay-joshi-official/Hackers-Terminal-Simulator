console.log("Script is running...")

const text = [">> Initializing Hacking", ">> Reading your files", ">> Password files detected", ">> Sending all passwords and personal files to server", ">> Cleaning up"]

async function main(item, isLast = false) {
    let div = document.createElement("div")
    div.className = "content"
    div.innerText = item
    document.querySelector(".container").appendChild(div)

    let dots = 0
    return new Promise((resolve) => {
        let blinkInterval = setInterval(() => {
            dots = (dots + 1) % 4
            div.innerText = item + ".".repeat(dots)
        }, 500)

        if(!isLast){
            hacking().then(() => {
                clearInterval(blinkInterval)
                div.innerText = item
                resolve()
            })
        }
        else{
            resolve()
        }
    })
}

async function hacking() {
    return new Promise((resolve, reject) => {
        let timeout = Math.random() * 7000
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}

async function start_Hacking() {
    let firstInterval = await main(text[0], false)
    for (i = 1; i < text.length; i++) {
        clearInterval(firstInterval)
        await main(text[i], i === text.length - 1)
        
    }
}

document.querySelector(".button").addEventListener("click", () => {
    start_Hacking()
})