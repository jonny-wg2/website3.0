export default function sendMessage(message: string) {
  return fetch(
    atob("$SLACK_WEBHOOK"),
    {
      method: "POST",
      body: `{"text":"${message.replace(/"/g, '\\"')}"}`,
    }
  );
}
