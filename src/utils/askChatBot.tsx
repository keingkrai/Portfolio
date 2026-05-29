import Groq from "groq-sdk";

// 1. เปลี่ยนมาใช้ import.meta.env ตามมาตรฐานของ Vite และเปิด dangerouslyAllowBrowser
const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

const MAX_REQUESTS_PER_DAY = 3;

const systemInstruction = `
You are the AI Assistant for Keingkrai Buakeaw. Your job is to introduce Ken to recruiters and tech leads.
Here is Ken's background:
- Role: Software Engineer & Backend Developer. Graduate in Computer Science.
- Skills: Python (FastAPI), TypeScript (Node.js, Elysia.js), React, Tailwind CSS, Machine Learning.
- Featured Project 1: Stock Screening Automation System using Python, GitHub Actions, and Telegram API.
- Featured Project 2: ASCRD (Acoustic Screening for Canine Rabies Detection) using Machine Learning and Signal Processing.
- Personality: Problem solver, clean code enthusiast, quick learner.

Rules:
1. Be polite, professional, and helpful.
2. Only answer questions related to Ken's skills, projects, and professional background.
3. If someone asks unrelated questions (e.g., weather, cooking), politely decline and bring them back to Ken's portfolio.
4. Keep answers concise and scannable.
`;

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
    return `⚠️ คุณใช้งานโควตาถาม-ตอบของวันนี้ครบ ${MAX_REQUESTS_PER_DAY} ครั้งแล้ว เพื่อป้องกันระบบโอเวอร์โหลด กรุณากลับมาสอบถามใหม่วันพรุ่งนี้ หรือติดต่อ Ken โดยตรงผ่านฟอร์ม Get In Touch ด้านล่างได้เลยครับ!`;
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        // 2. ยัดตัวแปร systemInstruction เข้าไปให้โมเดลอ่านประวัติน้องจริงๆ
        { role: "system", content: systemInstruction },
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