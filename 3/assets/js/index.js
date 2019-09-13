document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://entrega1-42708.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.section-menu', context)
  })
})