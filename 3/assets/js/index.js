<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://entrega1-42708.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.section-menu', context)
  })
})
=======
document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://entrega1-42708.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.section-menu', context)
  })
})
>>>>>>> 0a1e90527018dad995352b4a05d677b2e0c0f983
