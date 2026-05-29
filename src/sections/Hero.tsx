import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[70vh] py-10">
      {/* Name */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight">
        Hi I'm <span className="text-teal-400">Keingkrai</span>
      </h1>

      {/* Position/ Knowledge */}
      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-400">
        Software Engineer | AI Engineer
      </h2>

      {/* Explain */}
      <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-5xl leading-relaxed">
        สวัสดีครับ ผม เกรียงไกร บัวแก้ว (ตัง) เรียนจบด้านวิทยาการคอมพิวเตอร์
        (Computer Science) กำลังมองหางานในสาย Software Engineer / AI Engineer /
        Programmer ครับ ในช่วงที่ผ่านมา ผมมีประสบการณ์เคยใช้งาน Python,
        TypeScript และ JavaScript เบื้องต้นในการพัฒนาโปรเจกต์ต่างๆ
        ทั้งการสร้างเว็บแอปพลิเคชัน, การพัฒนาโมเดล Machine Learning รวมถึงการนำ
        LLM มาประยุกต์ใช้ร่วมกับระบบ
        จุดเด่นของผมคือเป็นคนที่พร้อมลุยกับปัญหาและไม่ยอมแพ้ง่ายๆ
        ชอบศึกษาหาวิธีการต่างๆ มาแก้ไขข้อผิดพลาดของระบบ
        และพร้อมที่จะเรียนรู้เทคโนโลยีหรือสิ่งใหม่ๆ ร่วมกับพี่ๆ ในทีมเสมอครับ <span className="text-teal-400">สามารถสอบถามผ่านบอทด้านล่างขวามือได้เลยครับ</span>
      </p>

      {/* Social links */}
      <div className="flex items-center gap-6 mt-8">
        {/* resume */}
        <a
          href="src/assets/resume.pdf"
          className="px-6 py-3 font-medium text-slate-900 bg-teal-400 rounded-md hover:bg-teal-300 transition-all duration-200"
        >
          My Resume
        </a>

        {/* Icon links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/keingkrai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/keingkrai-buakeaw-678183373/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:keingkrai.bk@email.com"
            className="hover:text-teal-400 transition-colors"
          >
            <IoMailOutline />
          </a>
        </div>
      </div>
    </section>
  );
}
