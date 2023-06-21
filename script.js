// Valiables
let bannedUrls = ["vidkidz.tistory.com"]
let bannedIds = ["waflashCanvas"]
let punished = false

// Functions
function punishPage(){
    if(punished == false){
        punished = true
        
        let collection = document.querySelectorAll("html").item(0).children

        for(let i=0; i<collection.length; i++){
            collection[i].remove()
        }

        $("html").append(`<head class="deremove">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            .igonan{
                display: flex; justify-content: center; align-items: center;
            }
    
            .material-symbols-outlined{
                font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 48
            }
        </style>
    
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body class="deremove">
        <div class="igonan" style="width: 100%; height: 97vh;">
            <div class="igonan" style="width: 70%; height: 40%; background-color: crimson; color: #fff; font-size: 500%; flex-direction: column;">
                <span class="material-symbols-outlined igonan" style="color: white; font-size: 300%;"">warning</span>
                <b>사이트 차단됨</b>
            </div>
        </div>
    </body>`)
    }
}

function detectPage(){
    $.each(bannedUrls, function(_, value){
        if(location.href.match(value) && punished == false){
            punishPage()
        }
    })
}

// Run
detectPage()