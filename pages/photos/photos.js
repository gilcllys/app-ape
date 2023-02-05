var camera = document.getElementById("camera")

camera.addEventListener('click',()=>{
    const specs = {video:{width:320,heigth:0}}
    navigator.mediaDevices.getUserMedia(specs)
    .then(stream=>{
        const video = document.querySelector("#video")
        video.srcObject = stream
    }).catch(error=>{console.log(error)})
})


// toast ----------------------
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}