import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<String | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "ae4006b1-4746-4f6b-9abe-c39eda3632e7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.success);

      if (data.success) {
        setResult("Message sent successfully Thank you for contacting me!");
        form.reset(); // ล้างข้อมูลในฟอร์มหลังส่งเสร็จ
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 mb-20">
      <h3 className="text-2xl font-bold text-slate-200 tracking-tight mb-4">
        Easy to Contact Me
      </h3>
      <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
        ช่องทางสำหรับการติดต่อผม หากคุณสนใจร่วมงานหรืออยากสอบถามข้อมูลเพิ่มเติมเกี่ยวกับผลงานและประสบการณ์ของผม สามารถกรอกแบบฟอร์มด้านล่างนี้ได้เลยครับ ผมจะพยายามตอบกลับให้เร็วที่สุดครับ!
      </p>

      <div className="grid grid-cols-1 gap-8">
        {/* ฟอร์มติดต่อหลังบ้าน Serverless */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Your name or Company"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Email to Contact me"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-slate-900 bg-teal-400 rounded-md hover:bg-teal-300 disabled:bg-slate-700 disabled:text-slate-400 transition-all duration-200 cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <IoSendSharp size={16} />
          </button>

          {/* ข้อความแจ้งเตือนสถานะการส่ง */}
          {result && (
            <p
              className={`mt-4 text-sm font-medium ${result.includes("successfully") ? "text-emerald-400" : "text-rose-400"}`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
