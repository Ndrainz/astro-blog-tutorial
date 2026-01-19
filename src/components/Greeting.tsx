import { useState, useEffect } from "preact/hooks"

export default function Greeting({ messages }: { messages: Array<string> }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)]
  const [greeting, setGreeting] = useState(messages[0])

  useEffect(() => {
    console.log(greeting)
  }, [greeting])

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  )
}
