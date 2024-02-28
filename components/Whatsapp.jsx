export const Whatsapp = () => {
  return (
    <a href='https://api.whatsapp.com/send/?phone=527776002745&app_absent=0' target="_blank">
      <img
        className="cursor-pointer fixed right-2 bottom-4 w-16"
        alt="lth logo"
        src="/WhatsApp.svg.webp"
      ></img>
    </a>
  );
};


export const cotizar = (nombre, marca) => {
  const message = `Hola, me gustaría cotizar ${nombre} de ${marca}`; // Mensaje para enviar por WhatsApp 
  const urlMessage = encodeURIComponent(message); // Mensaje codificado para la URL
  const whatsappURL = `https://api.whatsapp.com/send/?phone=${527776002745}&text=${urlMessage}&app_absent=0`;

  // Abrir la URL de WhatsApp en una nueva pestaña del navegador
  window.open(whatsappURL, "_blank");
};
