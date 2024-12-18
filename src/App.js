// import logo from "./logo.svg";
import { useState } from "react";
import ChatInput from "./components/ChatInput/ChatInput";
import ChatMessage from "./components/ChatMessage/ChatMessage";
import "./App.css";

const MODEL_NAME = "Claude";
const USER_NAME = "User";

const App = () => {
  const [history, setHistory] = useState([
    { author: USER_NAME, text: "Hello!" },
    { author: MODEL_NAME, text: "How can I help you?" }
  ]);

  const onSubmit = async prompt => {};

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
};

export default App;
