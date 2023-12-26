var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);



$.ajax({
    dataType:"json",
    url:'http://localhost:3000/api/bicicletas',
    success:function(result){
        console.log(result)
        result.bicicletas.forEach(element => {
            L.marker(element.ubicacion,{title:element.id}).addTo(map)
        });
    }
})