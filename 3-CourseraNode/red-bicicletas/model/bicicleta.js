var Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
  return "id: " + this.id + " | color: " + this.color;
};

Bicicleta.allBicis = [];

Bicicleta.add = function (Bici) {
  Bicicleta.allBicis.push(Bici);
};

Bicicleta.findById = function (id) {
  var biciId = Bicicleta.allBicis.find((bici) => bici.id == id);
  if (biciId) return biciId;
  else throw new Error(`No hay bicicleta con el id: ${id}`);
};

Bicicleta.removeById = function(id){
    const biciId = Bicicleta.findById(id)
    for(let i = 0; i<Bicicleta.allBicis.length ; i++){
        if(Bicicleta.allBicis[i]==biciId){
            Bicicleta.allBicis.splice(i,1)
            break
        }
    }
}

var a = new Bicicleta(1, "rojo", "urbana", [51.5001, -0.09]);
var b = new Bicicleta(2, "blanca", "urbana", [51.409, -0.09]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;
