import React, { useState } from "react";
import chatbotIcon from "@/assets/icons/chatbot_icon.png";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Message } from "@/types";
import { SendHorizonal } from "lucide-react";

const ChatbotFloatingButton: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { type: 'bot', content: 'Hello! How can I help you today?' },
        { type: 'bot', content: 'Feel free to ask me anything.' }
    ]);
    const [input, setInput] = useState<string>("");

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { type: 'user', content: input }]);
            setInput("");
            
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'bot', content: 'Thank you for your message. We will get back to you shortly.' }
                ]);
            }, 1000);
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="fixed bottom-0 right-0 size-20 p-4 m-8 bg-secondary hover:bg-yellow-60 rounded-full shadow-lg">
                    <img src={chatbotIcon} />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-white w-1/2 max-w-3xl">
                <SheetHeader>
                    <SheetTitle>Chatbot</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-[87%] space-y-4 p-4 bg-white h-64 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`px-3 py-2 max-w-xs ${message.type === 'bot' ? 'rounded-r-xl rounded-t-xl bg-gray-200 self-start' : 'rounded-l-xl rounded-t-xl bg-primary text-white self-end'}`}
                        >
                            {message.content}
                        </div>
                    ))}
                </div>
                <SheetFooter>
                    <div className="flex w-full py-4 border-t border-gray-200 gap-1 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow p-2 border border-gray-300 rounded-full"
                            placeholder="Type your message..."
                        />
                        {/* <Button className="rounded-full text-white" onClick={handleSendMessage}>
                            Send
                        </Button> */}
                        <SendHorizonal onClick={handleSendMessage} />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default ChatbotFloatingButton;

