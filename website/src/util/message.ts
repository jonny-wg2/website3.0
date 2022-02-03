export default function sendMessage(message: string) {
  const slackWebHook = process.env.SLACK_WEBHOOK
  return fetch(
    atob({slackWebHook}),
    {
      method: "POST",
      body: `{"text":"${message.replace(/"/g, '\\"')}"}`,
    }
  );
}
