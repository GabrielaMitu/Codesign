document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let strlink = "projeto.html?pai="+ value+ "&key={{@key}}"
  let link = document.querySelector(".linkx")
  link.href = strlink

  console.log(strlink)
  let db = coDesConnect('https://entrega1-42708.firebaseio.com/')

  db.download('/', function(data) {

    context = data['portfolio'][value]

    console.log(context)
    /*coDesReplace('.cimg1', context)
    coDesReplace('.csection1', context)*/
    coDesReplace('.ctext1', context)
    coDesReplace('.ctitle1', context)

    
  })
})


