const form = document.getElementById('my-form').addEventListener('submit', (e) =>{
      e.preventDefault()
      fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target)
      }).then(() => {
            window.location.href = './fim.html'
      })
})

const form2 = document.getElementById('my-form2').addEventListener('submit', (e) =>{
      e.preventDefault()
      fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target)
      }).then(() => {
            window.location.href = './fim.html'
      })
})

function btf() {
    document.getElementById("btf").style.display = 'none';
    document.getElementById("my-form").style.display = 'none';
    document.getElementById("my-form2").style.display = 'none';
    document.getElementById("menu").style.display = 'block';


}

function bmx() {
    document.getElementById("my-form").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
    document.getElementById("my-form2").style.display = 'none';
    document.getElementById("btf").style.display = 'block';

}

function skate() {
    document.getElementById("my-form2").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
    document.getElementById("my-form").style.display = 'none';
    document.getElementById("btf").style.display = 'block';

}

