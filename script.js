
function tabuada() {
  
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    
    if (num.value.length == 0) {
        window.alert('Por favor, insira um número válido.')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while ( c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}

function toggleTema() {
    body = document.body;
    btn = document.querySelector('.btn');

    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        btn.textContent = 'Tema claro';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        btn.textContent = 'Tema escuro';
    }
}
