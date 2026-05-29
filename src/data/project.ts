export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Stock Screening Automation System",
    description: "ระบบสแกนหุ้นตามกลยุทธ์ Mark Minervini จากหนังสือ Trade like a Stock Market Wizard รันอัตโนมัติด้วย GitHub Actions และแจ้งเตือนผ่าน Telegram API",
    tags: ["Python", "GitHub Actions", "Telegram API", "Financial Data"],
    githubUrl: "https://github.com/keingkrai/Trade_Template_by_mark_minervini",
    imageUrl: [
      "src/assets/Mark_Minervini/mark1.png",
      "src/assets/Mark_Minervini/mark2.png",
    ]
  },
  {
    id: 2,
    title: "Acoustic Canine Disease Screening (ASCRD)",
    description: "โปรเจกต์สำหรับงาน hackathon มีเวลาจำกัด 2 วัน สร้างเว็บ Protype สำหรับวิเคราะห์และจำแนกเสียงสุนัขเพื่อคัดกรองโรคทางเดินหายใจและพิษสุนัขบ้า โดยใช้เทคนิค Signal Processing และ Machine Learning",
    tags: ["Python", "Machine Learning", "FastAPI", "Signal Processing"],
    githubUrl: "https://github.com/keingkrai/web_dog_detech",
    imageUrl: [
      "src/assets/Dog/dog1.png",
      "src/assets/Dog/dog2.png",
      "src/assets/Dog/dog3.png",
      "src/assets/Dog/dog4.png",
      "src/assets/Dog/dog5.png",
    ]
  },
  {
    id: 3,
    title: "Web Appication For Scoring Subjective Exam with Agentic AI",
    description: "เว็บแอปพลิเคชันสำหรับการให้คะแนนข้อสอบแบบอัตนัยโดยใช้ Agentic AI เพื่อแก้ปัญหาการตรวจข้อสอบที่มีจำนวนมากและสเพิ่มทางเลือกในการให้คะแนน",
    tags: ["React", "Node.js", "FastAPI", "Autogen studio", "LLM", "MySQL", "XAMPP"],
    githubUrl: "https://github.com/keingkrai/Examination-project",
    imageUrl: [
        "src/assets/Exam/exam1.png",
        "src/assets/Exam/exam2.png",
        "src/assets/Exam/exam3.png",
        "src/assets/Exam/exam4.png",
        "src/assets/Exam/exam5.png",
        "src/assets/Exam/exam6.png",
    ]
  },
  {
    id: 4,
    title: "Face Recognition",
    description: "ระบบจดจำใบหน้าสำหรับยืนยันตัวตนภายในห้องเรียน ทั้งในกรณีส่วมและไม่ส่วมแว่นตา โดยมีการใช้ Tranfer Learning จากโมเดล YOLO ภายนอกกับจับใบหน้าและสร้าง Model Machine Learning แยกสำหรับจดจำคนในห้องเรียน ซึ่งมีความแม่นยำถึง 95% ในการจดจำใบหน้าและ 91% ในการจดจำใบหน้าที่ส่วมแว่นตา",
    tags: ["Python", "OpenCV", "Machine Learning", "YOLOV8"],
    githubUrl: "https://github.com/keingkrai/realtime-detection-web",
    imageUrl: [
        "src/assets/FACE/face1.png",
        "src/assets/FACE/face2.png",
        "src/assets/FACE/face3.png",
        "src/assets/FACE/face4.png"
    ]
  },
  {
    id: 5,
    title: "Smart Tax",
    description: "เว็บแอปพลิเคชันสำหรับพิจารณาเอกสารอีเล็กทรอนิกส์ว่าเอกสารชิ้นใดบ้างที่สามารถนำไปใช้ลดหย่อนภาษีได้ โดยใช้เทคนิค OCR และ Machine Learning",
    tags: ["Next.js", "FastAPI", "OCR", "Machine Learning", "PostgreSQL"],
    githubUrl: "https://github.com/keingkrai/smart_tax",
    imageUrl: [
        "src/assets/Smart_tax/smart1.png",
        "src/assets/Smart_tax/smart2.png",
        "src/assets/Smart_tax/smart3.png",
    ]
  },
  {
    id: 6,
    title: "Web Agents Analysis Stock",
    description: "เว็บวิเคราะห์หุ้นโดยใช้ Agents ในการส่วมบทบาทตั้งแต่ หน้าที่หาข้อมูล, วิเคราะห์ในมุมมองขาขึ้ง และลง, จัดสัดส่วนความคุ้มค่าในการลงทุน และประมวลผลข้อมูลเพื่อช่วยในการตัดสินใจลงทุน",
    tags: ["Next.js", "TypeScript", "LangChain", "LLM"],
    githubUrl: "https://github.com/keingkrai/MIT_project",
    imageUrl: [
        "src/assets/Mit/mit1.png",
        "src/assets/Mit/mit2.png",
        "src/assets/Mit/mit3.png",
    ]
  },
  {
    id: 7,
    title: "RPCA Select Stock",
    description: "ระบบคัดเลือกหุ้นโดยใช้เทคนิค Robust Principal Component Analysis (RPCA) เพื่อแยกสัญญาณจากข้อมูลที่มีเสียงรบกวน โดยจะมีการดทำ Web Scraping ดึงข้อมูลในตลาดต่างๆเช่น SET, S&P500 และเริ่มวิเคราะห์จากระดับ สินทรัพย์ -> อุตสาหกรรม -> หุ้น เพื่อช่วยในการตัดสินใจลงทุน",
    tags: ["Python", "RPCA", "Financial Data Analysis", "Web Scraping"],
    githubUrl: "https://github.com/keingkrai/RPCA",
    imageUrl: [
        "src/assets/RPCA/img1.png",
        "src/assets/RPCA/img2.png",
    ]
  },
  {
    id: 8,
    title: "ChatBot with Langchain",
    description: "สร้าง chatbot สำหรับการโต้ตอบกับผู้ใช้งานโดยใช้หลักการ Retrieval-Augmented Generation (RAG) ทำหใ้เข้าใจหลักการทำ ChatBOT ทั้งการ Split ข้อมูล การสร้าง Vector Database และการใช้ LLM ในการตอบคำถาม",
    tags: ["python", "LangChain", "ChromaDB", "OLLAMA", "RAG", "LLM", "Prompt Engineering"],
    githubUrl: "https://github.com/keingkrai/ChatBot_langchain",
    imageUrl: [
        "src/assets/BOT/bot1.png",
        "src/assets/BOT/bot2.png",
        "src/assets/BOT/bot3.png",
    ]
  }
];