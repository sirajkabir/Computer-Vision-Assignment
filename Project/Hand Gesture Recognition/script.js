const video = document.getElementById('video')
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
navigator.mediaDevices.getUserMedia({
    video: true}).then(stream => {
        video.srcObject = stream;
    })
