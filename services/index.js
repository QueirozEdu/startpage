document.onreadystatechange = clock();

function clock() {
    const time = new Date();
    document.getElementById("time").innerText = time.toLocaleTimeString();
    console.log(time);


    if (time.getHours < 5 || time.getHours >= 18) {
        document.getElementById("greeting").innerHTML = "Good evening."
    }
    else if (time.getHours < 12) {
        document.getElementById("greeting").innerText = "Good morning."
    }
    else {
        document.getElementById("greeting").innerText = "Good afternoon."
    }
}
setInterval(clock, 1000);

function onSearch() {
    console.log("clicou");
    const query = document.getElementById('search_box').value;
    console.log(document.getElementById("tool_selector").value);
     switch (document.getElementById("tool_selector").value) {
        case 'google':
            window.location.href = `https://www.google.com/search?q=${query}`
            break;
        case 'duckduckgo':
            window.location.href = `https://www.duckduckgo.com/?q=${query}`
    }
}

const searchInput = document.getElementById("search_box")
searchInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("search_button").click();
    }
});