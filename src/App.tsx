import { useState } from "react";
import "./App.css";
import  { BedrockRuntimeClient, InvokeModelCommand, ListAsyncInvokesCommand } from "@aws-sdk/client-bedrock-runtime";

import { ChatInput } from "./components/ChatInput/ChatInput";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";

const MODEL_NAME = "Claude";
const USER_NAME = "User";

function App() {
    const [history, setHistory] = useState<{ author: string; text: string }[]>([
        { author: USER_NAME, text: "Hello!" },
        { author: MODEL_NAME, text: "How can I help you?" },
    ]);
  
  const client = new BedrockRuntimeClient({
    region: "us-east-1",
    credentials: {
      secretAccessKey: 1111,
      accessKeyId:2222
    }
  })

  const onSubmit = async (prompt: string) => {
    const response = await client.send(
      new InvokeModelCommand({
        contentType: "application/json",
        body: JSON.stringify({}),
        modelId:"testfjgo"
        })
    )
    const decodeResponseBody = new TextDecoder().decode(response.body)
    const responseBody = JSON.parse(decodeResponseBody);
    console.log({decode:responseBody})
    
    
    };

    return (
        <div className="flex flex-col h-screen p-4">
            <div className="overflow-y-scroll flex-1">
                {history.map(({ author, text }) => (
                    <ChatMessage
                        author={author}
                        reverse={author === USER_NAME}
                        text={text}
                    />
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto h-20 sticky bottom-0 left-0 right-0">
                <ChatInput onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default App;
