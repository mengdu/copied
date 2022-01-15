# Copied

Copy to clipboard in browser.

```sh
npm install copied
```

```js
import copied from 'copied'
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    btn.setAttribute('disabled', "true")
    copied('Hello Text !', (err) => {
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
```
