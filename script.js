var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var today = yyyy+'-'+mm+'-'+dd;
document.getElementById('data').setAttribute('value', today)

document.getElementById("myForm").onsubmit = function() {armazenar()};
if (localStorage.getItem('sdata')){
    reload()
}
var rglocador = document.getElementById('rglocad')
var rglocatario = document.getElementById('rglocat')
var cpflocador = document.getElementById('cpflocad')
var cpflocatario = document.getElementById('cpflocat')
var formatadoArray = []
var formatadoString = ''
rglocador.addEventListener("change", function() {
    formatadoArray = acertaRG(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('rglocad').setAttribute('type', 'text')
    document.getElementById('rglocad').value = formatadoString.replace(/,/g, "")
  });
rglocatario.addEventListener("change", function() {
    formatadoArray = acertaRG(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('rglocat').setAttribute('type', 'text')
    document.getElementById('rglocat').value = formatadoString.replace(/,/g, "")
  });
cpflocador.addEventListener("change", function() {
    formatadoArray = acertaCPF(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('cpflocad').setAttribute('type', 'text')
    document.getElementById('cpflocad').value = formatadoString.replace(/,/g, "")
  });
cpflocatario.addEventListener("change", function() {
    formatadoArray = acertaCPF(this);
    formatadoString = formatadoArray.join()
    console.log(formatadoString.replace(/,/g, ""))
    document.getElementById('cpflocat').setAttribute('type', 'text')
    document.getElementById('cpflocat').value = formatadoString.replace(/,/g, "")
  });

function armazenar(){
   
    var vistoriador = document.getElementById('vistoriador').value
    localStorage.setItem("svistoriador" , vistoriador)
    var data = document.getElementById('data').value
    localStorage.setItem("sdata" , data)

    var locador = document.getElementById('locador').value
    localStorage.setItem("slocador" , locador)
    var endlocad = document.getElementById('endlocad').value
    localStorage.setItem("sendlocad" , endlocad)
    var rglocad = document.getElementById('rglocad').value
    localStorage.setItem("srglocad" , rglocad)
    var cpflocad = document.getElementById('cpflocad').value
    localStorage.setItem("scpflocad" , cpflocad)

    var locatario = document.getElementById('locatario').value
    localStorage.setItem("slocatario" , locatario)
    var endlocat = document.getElementById('endlocat').value
    localStorage.setItem("sendlocat" , endlocat)
    var rglocat = document.getElementById('rglocat').value
    localStorage.setItem("srglocat" , rglocat)
    var cpflocat = document.getElementById('cpflocat').value
    localStorage.setItem("scpflocat" , cpflocat)

    var endereco = document.getElementById('endereco').value
    localStorage.setItem("sendereco" , endereco)
    var tipoimovel = document.getElementById('tipoimovel').value
    localStorage.setItem("stipoimovel" , tipoimovel)
    var tipovist = document.getElementById('tipo').value
    localStorage.setItem("stipovist" , tipovist)
}

function step1() {
    //localStorage.removeItem('IsThisFirstTime_Log_From_LiveServer')
    vistoriador = localStorage.getItem('svistoriador')
    data = localStorage.getItem('sdata')
    
    locador = localStorage.getItem('slocador')
    endlocad = localStorage.getItem('sendlocad')
    rglocad = localStorage.getItem('srglocad')
    cpflocad = localStorage.getItem('scpflocad')

    locatario = localStorage.getItem('slocatario')
    endlocat = localStorage.getItem('sendlocat')
    rglocat = localStorage.getItem('srglocat')
    cpflocat = localStorage.getItem('scpflocat')

    endereco = localStorage.getItem('sendereco')
    tipoimovel = localStorage.getItem('stipoimovel')
    tipovist = localStorage.getItem('stipovist')

    dadosvist1.innerHTML = `<b> Vistoriador: </b> ${vistoriador} <p> <b>Data:</b> ${data} </p><br/>`
    dadoslocad1.innerHTML = `<p><b>Nome do Locador:</b> ${locador}</p> <p><b>Endereço do Locador:</b> ${endlocad}</p><p><b>RG do Locador:</b> ${rglocad}</p><p><b>CPF do Locador:</b> ${cpflocad}</p><br/>`
    dadoslocat1.innerHTML = `<p><b>Nome do Locatário:</b> ${locatario}</p><p><b>Endereço do Locatário:</b> ${endlocat}</p><p><b>RG do Locatário:</b>${rglocat}</p><p><b>CPF do Locatário:</b> ${cpflocat}</p><br/>`
    dadosimovel1.innerHTML = `<p><b>Endereço do imóvel:</b>${endereco}</p><p><b>Tipo de imóvel:</b> ${tipoimovel}</p><p><b>Tipo de Vistoria:</b>${tipovist}</p>`
    

}


/*function back() {
    
    location.replace('index.html')
    
    var vistoriadorPreenchido = localStorage.getItem("svistoriador")
    if (vistoriadorPreenchido =! "") {
        vistoriador.setAttribute('value', vistoriadorPreenchido)
        
    }
    
   document.getElementById('mostrar').setAttribute('value', 'oi')
*/

function nxtdados() {
    location.assign('vistoria.html')
}

function acertaRG(input) {
    var tamanho = input.value.length
    var auxiliar = []
    if (tamanho == 9) {
        auxiliar[11] = input.value[8]
        auxiliar[10] = '-'
        auxiliar[9] = input.value[7]
        auxiliar[8] = input.value[6]
        auxiliar[7] = input.value[5]
        auxiliar[6] = '.'
        auxiliar[5] = input.value[4]
        auxiliar[4] = input.value[3]
        auxiliar[3] = input.value[2]
        auxiliar[2] = '.'
        auxiliar[1] = input.value[1]
        auxiliar[0] = input.value[0]
    }
    return auxiliar
}

function acertaCPF(input) {
    var tamanho = input.value.length
    var auxiliar = []
    if (tamanho == 11) {
        auxiliar[13] = input.value[10]
        auxiliar[12] = input.value[9]
        auxiliar[11] = '-'
        auxiliar[10] = input.value[8]
        auxiliar[9] = input.value[7]
        auxiliar[8] = input.value[6]
        auxiliar[7] = '.'
        auxiliar[6] = input.value[5]
        auxiliar[5] = input.value[4]
        auxiliar[4] = input.value[3]
        auxiliar[3] = '.'
        auxiliar[2] = input.value[2]
        auxiliar[1] = input.value[1]
        auxiliar[0] = input.value[0]
    }
    return auxiliar
}

function reload(){
    document.getElementById('vistoriador').value = localStorage.getItem('svistoriador')
    document.getElementById('data').value =  localStorage.getItem('sdata')
    document.getElementById('locador').value = localStorage.getItem('slocador')
    document.getElementById('endlocad').value = localStorage.getItem('sendlocad')
    document.getElementById('rglocad').value = localStorage.getItem('srglocad')
    document.getElementById('cpflocad').value = localStorage.getItem('scpflocad')
    document.getElementById('locatario').value = localStorage.getItem('slocatario')
    document.getElementById('endlocat').value = localStorage.getItem('sendlocat')
    document.getElementById('rglocat').value = localStorage.getItem('srglocat')
    document.getElementById('cpflocat').value = localStorage.getItem('scpflocat')
    document.getElementById('endereco').value = localStorage.getItem('sendereco')
    document.getElementById('tipoimovel').value = localStorage.getItem('stipoimovel')
    document.getElementById('tipovist').value = localStorage.getItem('stipovist')
}

/*navigator.mediaDevices.getUserMedia({video: true})
.then(function (mediaStream) { 
  var video = document.querySelector('#video'); 
     video.srcObject = mediaStream; 
     video.play();
})
.catch(function (err) {
  console.log('Não há permissões para acessar a webcam')
})

document.querySelector('#capture').addEventListener('click', function (e) {
    var canvas = document.querySelector("#canvas");  
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0)
  })*/



