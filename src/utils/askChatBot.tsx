import Groq from "groq-sdk";
import { knowledgeData } from "../data/knowledge";

// 1. เปลี่ยนมาใช้ import.meta.env ตามมาตรฐานของ Vite และเปิด dangerouslyAllowBrowser
const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

const MAX_REQUESTS_PER_DAY = 5;

const systemInstruction = `
You are F.R.I.D.A.Y., a friendly and professional female AI Assistant. Your sole purpose is to help recruiters and tech leads learn about Keingkrai (Tang), the owner of this portfolio.

Strict Rules for F.R.I.D.A.Y.:
1. CONTEXT ONLY: Answer questions strictly based on the provided Knowledge Base. Do NOT make up, assume, or hallucinate any facts, links, or contact details.
2. SCOPE: Only answer queries related to Keingkrai's skills, projects, education, and professional background.
3. OFF-TOPIC HANDLING: If a user asks about unrelated topics (e.g., weather, cooking, politics, general chat), politely decline and skillfully redirect the conversation back to Keingkrai's portfolio.
4. LANGUAGE MATCHING: Always respond in the SAME language that the user used to ask the question. If they ask in Thai, reply in Thai. If they ask in English, reply in English.
5. TONE & STYLE: Be polite, professional, yet approachable. Keep answers concise, scannable, and easy to read using bullet points if necessary.
6. BEAUTIFUL FORMATTING: When presenting lists, contact info, or project details, ALWAYS use clean Markdown bullet points (*), bold headers, or line breaks. Do NOT lump everything into a single, ugly paragraph.
7. DOUBLE LINE BREAKS FOR NEW SECTIONS: When answering with multiple topics, sections, or paragraphs, ALWAYS insert an empty line (double line break) between each section to make the text clean, airy, and easy to read.
`;

const knowledgeBase = `${systemInstruction}\n\nnHere is Keingkrai's official Knowledge Base you must use:\n\n${knowledgeData}`;

export async function askChatbot(userMessage: string): Promise<string> {
  // 1. ดึงประวัติการใช้งานวันนี้จาก LocalStorage
  const today = new Date().toDateString();
  const storedDate = localStorage.getItem("chat_date");
  let currentUsage = parseInt(localStorage.getItem("chat_usage") || "0", 10);

  if (storedDate !== today) {
    localStorage.setItem("chat_date", today);
    localStorage.setItem("chat_usage", "0");
    currentUsage = 0;
  }

  // 2. ตรวจสอบว่าใช้งานเกินโควตาที่กำหนดหรือยัง
  if (currentUsage >= MAX_REQUESTS_PER_DAY) {
    return `⚠️ คุณใช้งานโควตาถาม-ตอบของวันนี้ครบ ${MAX_REQUESTS_PER_DAY} ครั้งแล้ว เพื่อป้องกันระบบโอเวอร์โหลด กรุณากลับมาสอบถามใหม่วันพรุ่งนี้ หรือติดต่อ Keingkrai โดยตรงผ่านฟอร์ม ด้านล่างได้เลยครับ!`;
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        // 2. ยัดตัวแปร systemInstruction เข้าไปให้โมเดลอ่านประวัติน้องจริงๆ
        { role: "system", content: knowledgeBase },
        { role: "user", content: userMessage }
      ],
      // 3. ปรับมาใช้โมเดลรุ่นที่ฉลาดขึ้นเพื่อความเนี้ยบในการตอบบทบาท
      model: "llama-3.3-70b-versatile",
    });
    
    // 3. ถ้าผ่านและได้คำตอบกลับมา ให้บวกคะแนนการใช้งานไป 1 แต้ม
    localStorage.setItem("chat_usage", (currentUsage + 1).toString());

    return chatCompletion.choices[0]?.message?.content || "บอทไม่มีคำตอบกลับมา ลองใหม่อีกครั้งครับ";
  } catch (error) {
    console.error("Chatbot Error:", error);
    return "ขออภัยครับ ระบบบอทขัดข้องชั่วคราว ลองใหม่อีกครั้งนะ";
  }
}