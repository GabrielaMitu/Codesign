document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let srtlink = "projeto.html?pai="+ value+ "&key={{@key}}"
  let link = document.querySelector(".linkx")
  link.href = srtlink


  let db = coDesConnect('https://entrega1-42708.firebaseio.com/')

  db.download('/', function(data) {

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.
      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */

    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('.csection1', context)

  })


  db.download('/', function(data) {
    context = data
    coDesReplace('.nav', context)
})

 
  db.download('/', function(data) {
    context = data
    coDesReplace('.nav2', context)
})

  })

