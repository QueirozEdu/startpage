document.onreadystatechange = clock();

function clock() {
    const time = new Date();
    document.getElementById("time").innerText = time.toLocaleTimeString();
    var hour = time.getHours();

    if (hour < 5 || hour >= 18) {
        document.getElementById("greeting").innerText = "Good evening."
    }
    else if (hour < 12) {
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