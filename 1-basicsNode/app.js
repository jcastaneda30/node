const EventEmitter = require('events');
const miEmitter = new EventEmitter();

//Se ejecuta cuando se lanza un determinado evento y actua en consecuencia recibe tantos parametros como se le mandan desde el emit
miEmitter.on('miEvento', (mensaje) => {
  console.log('Manejador de evento ejecutado con mensaje:', mensaje);
});

// emite eventos y pasa informacion a los escuchadores de eventos
miEmitter.emit('miEvento', 'Hola, este es un mensaje asociado al evento');
//El orden es importante ya que no tiene sentido tirar un evento antes de definir los escuchadores del evento. PUeden haber tantos escuchadores como queramos de un mismo evennto