import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Chatbot from './components/ChatBot';

export default function App() {
  return (
    // กำหนดพื้นหลังเข้มทั้งเว็บ และจำกัดความกว้างหน้าเว็บให้อยู่ตรงกลาง (Max-w-3xl เหมือน Tamal Sen)
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500/30">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        
        {/* 1. Hero Section */}
        <Hero />

        <div className="border-t border-slate-800/60 my-12" />
        
        {/* 2. Projects Section (แทนที่ของเก่าด้วยตัวนี้) */}
        <Projects />

        
        <div className="border-t border-slate-800/60 my-12" />

        {/* 3. Contact Section */}
        <Contact />

        {/* 4. Footer สไตล์มินิมอล */}
        <footer className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Keingkrai Buakeaw. Built with React & Tailwind CSS.</p>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
}