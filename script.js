function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar.jpg')
    img.setAttribute('alt', 'Foto de perfil clara')
  } else {
    img.setAttribute('src', './assets/avatar-2.jpg')
    img.setAttribute('alt', 'Foto de perfil escura')
  }
}