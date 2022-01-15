import copied from '../src/main'

function main () {
  const btn = document.getElementById('btn')
  const input = document.getElementById('input') as HTMLInputElement

  btn.addEventListener('click', () => {
    btn.setAttribute('disabled', "true")
    copied(input.value, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Copied !')
        btn.innerText = 'Copied !'
        setTimeout(() => {
          btn.innerText = 'Copy'
          btn.removeAttribute('disabled')
        }, 500)
      }
    })
  })
}

window.addEventListener('load', main)
