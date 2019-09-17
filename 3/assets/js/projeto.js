document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['pai']

  let srtlink = "projeto.html?pai="+ value+ "&key={{@key}}"
  let link = document.querySelector(".linkx")
  link.href = srtlink

  let db = coDesConnect('https://entrega1-42708.firebaseio.com/')

  db.download('/', function(data) {

    context = data['portfolio'][value2]['projetos'][value]

    coDesReplace(".container1", context)

    console.log(context)

    })


  db.download('/', function(data) {
    context = data
    coDesReplace('.nav', context)
})

  })

