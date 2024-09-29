"use client";

// import { scrollToBottom, initialMessages, getSources } from "@/lib/utils";
import { ChatBubble } from "./ChatBubble";
import { useChat} from "ai/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
// import { Spinner } from "./ui/spinner";
import { useEffect, useRef } from "react";
import { Message } from "ai/react";
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
//     useChat({
//       initialMessages,
//     });

//   useEffect(() => {
//     setTimeout(() => scrollToBottom(containerRef), 100);
//   }, [messages]);
export function Chat() {
    const messages: Message[]=[
        {role: "assistant", content: "Hello, how are you?", id: "1"},
        {role: "user", content: "I am fine, thank you!", id: "2"},
    ];

//   return (
//     <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
//       <div className="p-6 overflow-auto" ref={containerRef}>
//         {messages.map(({ id, role, content }: Message, index) => (
//           <ChatLine
//             key={id}
//             role={role}
//             content={content}
//             // Start from the third message of the assistant
//             sources={data?.length ? getSources(data, role, index) : []}
//           />
//         ))}
//       </div>

//       <form onSubmit={handleSubmit} className="p-4 flex clear-both">
//         <Input
//           value={input}
//           placeholder={"Type to chat with AI..."}
//           onChange={handleInputChange}
//           className="mr-2"
//         />

//         <Button type="submit" className="w-24">
//           {isLoading ? <Spinner /> : "Ask"}
//         </Button>
//       </form>
//     </div>
//   );
    const sources= ["I am source one ", "I am source two"];
    return (
        <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
            <div className="p-6 overflow-auto">
                {messages.map(({id, role, content}: Message, index) => (
                    <ChatBubble key={id} role={role} content={content} sources={role !=="assistant" ?[]:sources} />
                ))}
            </div>
            <form className="p-4 flex clear-both">
                <Input placeholder="Type to chat with AI..." className="mr-2"/>
                <Button type="submit" className="w-24">
                    Ask

                </Button>

            </form>
        </div>
    );

}