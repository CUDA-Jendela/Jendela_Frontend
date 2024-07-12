import React, { useEffect, useRef, useState } from "react";
import chatbotIcon from "@/assets/icons/chatbot_icon.png";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ChatData, ChatResponse, Message, SendChatRequest, SendChatResponse } from "@/types";
import { SendHorizonal } from "lucide-react";
import ChatApi from "@/api/chat-api";
import useAuth from "@/contexts/AuthContext";

const ChatbotFloatingButton: React.FC = () => {
    const [chats, setChats] = useState<ChatData[]>([]);
    const { isAuthenticated } = useAuth();

    const [messages, setMessages] = useState<Message[]>([
        { type: 'bot', content: 'Hello! How can I help you today?' },
        { type: 'bot', content: 'Feel free to ask me anything.' }
    ]);
    const [input, setInput] = useState<string>("");

    const chatContainerRef = useRef<HTMLDivElement>(null);

    const fetchChats = async () => {
        try {
            const chatData: ChatResponse = await ChatApi.getChat();
            setChats(chatData.data);
        } catch (error) {
            console.error('Failed to fetch chats:', error);
        }
    };

    // useEffect(() => {
    //     // Dynamically load the CSS
    //     const link = document.createElement('link');
    //     link.rel = 'stylesheet';
    //     link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    //     document.head.appendChild(link);

    //     // Dynamically load the JS
    //     const script = document.createElement('script');
    //     script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.head.removeChild(link);
    //         document.body.removeChild(script);
    //     };
    // }, []);

    useEffect(() => {
        fetchChats();
    }, []);

    const handleSendMessage = async () => {
        if (input.trim()) {
            const userMessage: Message = { type: 'user', content: input };
            setMessages([...messages, userMessage]);
            setInput("");

            try {
                const payload: SendChatRequest = { prompt: input };
                const response: SendChatResponse = await ChatApi.sendChat(payload);
                console.log(response);

                if (response.success) {
                    console.log("success");
                    fetchChats();
                } else {
                    const errorMessage: Message = { type: 'bot', content: response.message };
                    setMessages(prevMessages => [...prevMessages, errorMessage]);
                }
            } catch (error) {
                console.error('Failed to send message:', error);
                const errorMessage: Message = { type: 'bot', content: 'Failed to send message. Please try again.' };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, chats]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        isAuthenticated && <Sheet>
            <SheetTrigger asChild>
                <Button className="fixed bottom-0 right-0 z-10 size-20 p-4 m-8 bg-secondary hover:bg-yellow-60 rounded-full shadow-lg">
                    <img src={chatbotIcon} />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-white w-1/2 max-w-3xl">
                <SheetHeader>
                    <SheetTitle className="mb-3">Dela the Chatbot✨</SheetTitle>
                </SheetHeader>
                <div
                    ref={chatContainerRef}
                    className="flex flex-col h-[87%] w-full space-y-4 py-4 bg-white overflow-y-scroll scrollbar-hide"
                >
                    <div
                        key={-1}
                        className={`px-3 py-2 -mb-3 max-w-[80%] rounded-r-xl rounded-t-xl bg-gray-200 self-start`}
                    >
                        Hello! I'm Dela, your personal AI assistant. I will guide you through Jendela platform. You can ask me anything...
                    </div>
                    {chats.map((chat, index) => (
                        <div key={index} className="flex flex-col space-y-2">
                            <div
                                ref={chatContainerRef}
                                className={`px-3 py-2 my-2 max-w-[80%] rounded-l-xl rounded-t-xl bg-primary text-white self-end`}
                            >
                                {chat.question}
                            </div>
                            <div
                                ref={chatContainerRef}
                                className={`px-3 py-2 my-2 max-w-[80%] rounded-r-xl rounded-t-xl bg-gray-200 self-start`}
                            >
                                {chat.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <SheetFooter>
                    <div className="flex w-full py-4 border-t border-gray-200 gap-1 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-grow p-2 border border-gray-300 rounded-full"
                            placeholder="Type your message..."
                        />
                        <SendHorizonal onClick={handleSendMessage} className="cursor-pointer" />
                    </div>
                </SheetFooter>
                {/* <DialogflowChatbot /> */}
            </SheetContent>
            {/* <df-messenger
                project-id="cuda-jendela-429114"
                agent-id="53c5d239-25e2-4354-8b0f-fabca3e8b4eb"
                language-code="en"
                max-query-length="-1"
                chat-title="Dela"
                style={{
                    zIndex: 999,
                    position: 'fixed',
                    '--df-messenger-font-color': '#000',
                    '--df-messenger-font-family': 'Google Sans',
                    '--df-messenger-chat-background': '#f3f6fc',
                    '--df-messenger-message-user-background': '#d3e3fd',
                    '--df-messenger-message-bot-background': '#fff',
                    bottom: '16px',
                    right: '16px',
                } as React.CSSProperties}
            /> */}
        </Sheet>
    );
};

export default ChatbotFloatingButton;
