import { useState, useRef, useEffect } from 'react';
import { IoChatbubbleEllipsesSharp, IoCloseSharp, IoSendSharp } from 'react-icons/io5';
import { askChatbot } from '../utils/askChatBot';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'สวัสดีครับ! ฉันคือ F.R.I.D.A.Y. ผู้ช่วยของ Keingkrai ยินดีต้อนรับเข้าสู่ Portfolio ครับ มีอะไรอยากสอบถามเกี่ยวกับประวัติหรือผลงานของ Keingkrai พิมพ์ถามมาได้เลย!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // สั่งให้หน้าต่างแชทเลื่อนลงล่างสุดทุกครั้งที่มีข้อความใหม่
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsLoading(true);

    // ยิงคำถามไปหา Gemini API 
    const botResponse = await askChatbot(userText);
    
    setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. ปุ่มทรงกลมสำหรับเปิดหน้าต่างแชท (จะโชว์ตอนปิดแชทอยู่) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-teal-400 text-slate-900 rounded-full shadow-lg hover:bg-teal-300 transition-all duration-200 transform hover:scale-105 cursor-pointer"
        >
          <IoChatbubbleEllipsesSharp size={26} />
        </button>
      )}

      {/* 2. ตัวกล่องหน้าต่างแชท (โชว์เมื่อ isOpen == true) */}
      {isOpen && (
        <div className="flex flex-col w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Header หน้าต่างแชท */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-sm text-slate-200">F.R.I.D.A.Y AI Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              <IoCloseSharp size={20} />
            </button>
          </div>

          {/* ช่องแสดงข้อความแชท */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] px-3.5 py-2 rounded-lg text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-teal-400 text-slate-900 rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700/40'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* โชว์สถานะกำลังพิมพ์ตอนที่รอ API */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 px-4 py-2 rounded-lg rounded-bl-none border border-slate-700/40 text-sm">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ฟอร์มพิมพ์ข้อความส่ง */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Keingkrai..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-teal-400 text-slate-900 rounded-md hover:bg-teal-300 disabled:bg-slate-800 disabled:text-slate-600 transition-colors flex items-center justify-center cursor-pointer"
            >
              <IoSendSharp size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}