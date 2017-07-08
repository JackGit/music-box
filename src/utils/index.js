export function checkEnv () {
  window.AudioContext = window.AudioContext || window.webkitAudioContext
}

export function loadAndDecodeAudio (context, url, onSuccess, onError) {
  let request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.responseType = 'arraybuffer'
  request.onload = function () {
    context.decodeAudioData(request.response, onSuccess, onError)
  }
  request.send()
}
