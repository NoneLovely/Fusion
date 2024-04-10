url = "https://script.google.com/macros/s/AKfycbxxeiQtzE8-huOMuAuOZNbCrITgRxQm5t9QBtAJdPTMl_eC3l8TNjM2tDP_MvEY5jJECw/exec"

$.get(url, function (data, status) {
    result = data["result"]
    for (var i = 0; i < result.length; i++){
        if (result[i][0] != ""){
            store = document.createElement('div');
            store.className = "justify-center w-full"

            store.innerHTML = `
            <div class="mt-10 border-emerald-300 items-center shadow-2xl py-5 bg-black bg-opacity-25 rounded-t-xl flex w-full h-full">
                <img src="https://i.postimg.cc/JhWTHRxd/logo.png" class="w-20"/>
                <p class="-ml-4 text-white text-3xl">` + result[i][0] +`</p>
                <a class="ml-auto mr-2 py-2.5 px-3 text-white rounded-xl text-xl hover:text-emerald-400 hidden sm:block" href="` + result[i][2] +`"> купить билет <i class="fi fi-sr-shopping-cart"></i></a>
                <a class="ml-auto mr-2 py-2.5 px-3 text-white rounded-xl text-xl hover:text-emerald-400 sm:hidden" href="` + result[i][2] +`"><i class="fi fi-sr-shopping-cart"></i></a>
            </div>
            <div class="mt-5 border-emerald-300 items-center shadow-2xl px-5 py-5 bg-black bg-opacity-25 rounded-b-xl flex w-full h-full">
                <p class="text-white text-xl">` + result[i][1] +`</p>
            </div>`
                      
            document.getElementById("store").appendChild(store)

        }
    }
})

document.getElementById("btnsend").onclick = function (){
    url = "https://api.telegram.org/bot6962450898:AAGVlccatwEMfaJpma4SdFI3uwjfYsS2RIU/sendMessage?"

    name = document.getElementById("name").value
    text = document.getElementById("text").value

    message_text = name + "\n---\n" + text 

    Http = new XMLHttpRequest()

    data = {
        "chat_id": "5454780283",
        "text": message_text
    }

    Http.open("POST", url)
    Http.setRequestHeader("Content-Type", "application/json")
    Http.send(JSON.stringify(data))

    document.getElementById("name").value = ""
    document.getElementById("text").value = ""
}
