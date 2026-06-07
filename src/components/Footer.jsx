export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 border-t dark:border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 reveal">
            <div className="text-3xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 mb-6 uppercase">
              VISHESH<span className="text-slate-400">.</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed italic text-sm">
              Bridging the gap between <span className="text-indigo-500 font-bold">Artificial Intelligence</span> and <span className="text-indigo-500 font-bold">Web Development</span>. 70+ projects completed in a 6-month relentless sprint.
            </p>
            <div className="flex gap-4">
              <a href="visheshjaiswar009@gmail.com" className="w-10 h-10 rounded-xl glass border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/vishesh-jaiswar-5a0b94394/" className="w-10 h-10 rounded-xl glass border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/krisjais" className="w-10 h-10 rounded-xl glass border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="reveal">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-indigo-500">Sitemap</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              <li><a href="#home" className="hover:text-indigo-500 transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-indigo-500 transition-colors">Toolkit</a></li>
              <li><a href="#learning" className="hover:text-indigo-500 transition-colors">Pursuing</a></li>
              <li><a href="#achievements" className="hover:text-indigo-500 transition-colors"> Credentials</a></li>
            </ul>
          </div>

          {/* Contact Action */}
          <div className="reveal">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-indigo-500">Employment</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">Open for Full-Stack & Frontend Roles.</p>
            <a href="mailto:your-email@example.com" className="inline-block px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[10px] tracking-widest rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-xl uppercase">
              Connect With Me
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">
          <p>© 2026 VISHESH JAISWAR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2 italic">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div> 
              AI AWARE CERTIFIED
            </span>
            <span className="flex items-center gap-2 italic">
              <div className="w-1 h-1 bg-indigo-500 rounded-full"></div> 
              MERN STACK
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}