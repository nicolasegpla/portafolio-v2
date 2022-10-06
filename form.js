const btn = document.getElementById('button');
const inputName = document.querySelector('.container-form__form__input-name');
const inputCorreo = document.querySelector('.container-form__form__input-email');
const mensaje = document.querySelector('.container-form__form__textarea-mensaje');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_1upvurq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'enviar';
      inputName.value = '';
      inputCorreo.value = '';
      mensaje.value = '';
      alert('Mensaje enviado correctamente!');
    }, (err) => {
      btn.value = 'enviar';
      alert(JSON.stringify(err));
    });
});