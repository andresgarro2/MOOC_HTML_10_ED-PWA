'use strict';

let deferredInstallPrompt = null;
// GUARDO EL DOM DE BOTON BUINSTALL
const installButton = document.getElementById('butInstall');

//AÑADO UN EVENTO AL BOTON INSTALL BUTTON
installButton.addEventListener('click', installPWA);

//AÑADO UN EVENTO ANTES DE INSTALAR LA APP
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

//DEFINO LA FUNCION DE SALVAR
function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}
//DEFINO LA FUNCION INSTALAR LA PWA
function installPWA(evt) {
  defferedInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("aceptado")
    } else {
      console.log("No aceptado")
    }
    deferredInstallPrompt = null;
  })
}

//AÑADO UN EVENTO CUANDO SE INSTALA
window.addEventListener('appinstalled', logAppInstalled);
//DEFINO LA FUNCiON CUANDO SE INSTALA
function logAppInstalled(evt) {
  console.log("Game shooter app instalado");
}
