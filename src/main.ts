export default function copied (text: string, cb?: (err?: Error) => void) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => cb && cb()).catch(cb)
  } else {
    const input = document.createElement('textarea')
    input.style.display = 'none'
    input.value = text
    document.body.appendChild(input)
    input.select()

    try {
      document.execCommand('copy', true)
      document.body.removeChild(input)
      cb && cb()
    } catch (err) {
      cb && cb(err as Error)
    }
  }
}
