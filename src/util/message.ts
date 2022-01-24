export default function sendMessage(message: string) {
  return fetch(
    atob("base64encodeslackhook"),
    {
      method: "POST",
      body: `{"text":"${message.replace(/"/g, '\\"')}"}`,
    }
  );
}
