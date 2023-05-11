const form = document.getElementById('my-form').addEventListener('submit', (e) =>{
      e.preventDefault()
      fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target)
      }).then(() => {
            window.location.href = 'https://uniao-skate-bmx-scooter-inline.github.io/inscricao-maio-2023/inscricao/'
      })
})
