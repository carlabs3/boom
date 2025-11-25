const input = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartBtn = document.getElementById('restart');

input.addEventListener('change', () => {
  const numeroUsuario = Number(input.value);

  if (numeroUsuario < 1 || numeroUsuario > 3) {
    result.textContent = 'Error, tienes que introducir un número entre 1 y 3.';
    return;
  }

  input.disabled = true;
  result.textContent = '';

  let numeroRandom = Math.floor(Math.random() * 3) + 1;

  let segundos = 5;
  const promesaCuentaAtras = new Promise((resolve) => {
    function cuentaAtras() {
      countdown.textContent = `Cuenta atrás: ${segundos} s`;

      if (segundos === 0) {
        countdown.textContent = '';
        resolve();
      } else {
        setTimeout(() => {
          segundos = segundos - 1;
          cuentaAtras();
        }, 1000);
      }
    }
    cuentaAtras();
  });
  promesaCuentaAtras.then(() => {
    if (numeroUsuario === numeroRandom) {
      result.innerHTML = `<strong>¡Has salvado el mundo!</strong><br>
                          Tu numero, ${numeroUsuario}, es el mismo que el aleatorio, ${numeroRandom}`;
    } else {
      result.innerHTML = `<strong>La bomba ha estallado </strong><br>
                          Tu numero, ${numeroUsuario}, es diferente al aleatorio, ${numeroRandom}`;
    }

    input.disabled = false;
  });
});

restartBtn.addEventListener('click', () => {
  input.disabled = false;
  input.value = '';
  countdown.textContent = '';
  result.textContent = '';
});
