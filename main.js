// carregando o mapa ---------------------
navigator.geolocation.getCurrentPosition((position) => {
  var map = L.map("map").setView(
    [position.coords.latitude, position.coords.longitude],
    13
  );
  var marker = L.marker([
    position.coords.latitude,
    position.coords.longitude,
  ]).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
});
// carregando a camera-------------------------------------------------------------------------
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
