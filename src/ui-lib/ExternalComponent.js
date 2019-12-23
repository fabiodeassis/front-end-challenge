export default async function ExternalComponent (component) {
  const url = component.src
  const name = url.split('/').reverse()[0].match(/^(.*?)\.umd/)[1]

  if (window[name]) return window[name]

  // Appending CSS
  if (component.style) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = component.style
    document.head.appendChild(link)
  }

  window[name] = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.addEventListener('load', () => {
      resolve(window[name])
    })
    script.addEventListener('error', () => {
      reject(new Error(`Error loading ${url}`))
    })
    script.src = url
    document.head.appendChild(script)
  })

  return window[name]
}
