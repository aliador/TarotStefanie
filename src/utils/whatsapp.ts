export const WHATSAPP_NUMBER = "5511969649635";

interface BookingData {
  name?: string;
  date?: string;
  time?: string;
  service?: string;
}

export const generateWhatsAppLink = (data?: BookingData) => {
  let message = `Olá!\n\nGostaria de agendar uma consulta de Tarot.\n`;

  if (data && (data.name || data.date || data.time || data.service)) {
    if (data.name) message += `\nNome:\n${data.name}\n`;
    if (data.date) message += `\nData desejada:\n${data.date}\n`;
    if (data.time) message += `\nHorário desejado:\n${data.time}\n`;
    if (data.service) message += `\nLeitura desejada:\n${data.service}\n`;
  }

  message += `\nAguardo seu retorno.\n\nObrigado!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
