import React from 'react';

const techData = [
  // Programming Languages
  { name: 'C', category: 'Language', exp: '1+' },
  { name: 'C++', category: 'Language', exp: '1+' },
  { name: 'Python', category: 'Language', exp: '1+' },
  { name: 'JavaScript', category: 'Language', exp: '2+' },
  { name: 'TypeScript', category: 'Language', exp: '1+' },
  // Frontend
  { name: 'HTML5', category: 'Frontend', exp: '2+' },
  { name: 'CSS3', category: 'Frontend', exp: '2+' },
  { name: 'React', category: 'Frontend', exp: '2+' },
  { name: 'Redux', category: 'Frontend', exp: '1+' },
  { name: 'React Router', category: 'Frontend', exp: '1+' },
  { name: 'Tailwind CSS', category: 'Styling', exp: '2+' },
  { name: 'Bootstrap', category: 'Styling', exp: '2+' },
  { name: 'SASS', category: 'Styling', exp: '1+' },
  { name: 'Vite', category: 'Tool', exp: '1+' },
  // Backend
  { name: 'Node.js', category: 'Backend', exp: '2+' },
  { name: 'Express.js', category: 'Backend', exp: '2+' },
  { name: 'Django', category: 'Backend', exp: '1+' },
  { name: 'FastAPI', category: 'Backend', exp: '1+' },
  { name: 'EJS', category: 'Template', exp: '1+' },
  // AI/ML
  { name: 'NumPy', category: 'AI / ML', exp: '1+' },
  { name: 'Pandas', category: 'AI / ML', exp: '1+' },
  { name: 'Matplotlib', category: 'AI / ML', exp: '1+' },
  { name: 'Scikit-Learn', category: 'AI / ML', exp: '1+' },
  { name: 'TensorFlow', category: 'AI / ML', exp: '1+' },
  // Databases
  { name: 'MongoDB', category: 'Database', exp: '2+' },
  { name: 'MySQL', category: 'Database', exp: '2+' },
  { name: 'SQLite', category: 'Database', exp: '1+' },
  { name: 'Supabase', category: 'Database', exp: '1+' },
  // Cloud
  { name: 'Firebase', category: 'Cloud', exp: '1+' },
  { name: 'Vercel', category: 'Cloud', exp: '1+' },
  { name: 'Netlify', category: 'Cloud', exp: '1+' },
  // Tools
  { name: 'Postman', category: 'Tool', exp: '1+' },
  { name: 'JWT', category: 'Tool', exp: '1+' },
  { name: 'Nodemon', category: 'Tool', exp: '1+' },
];

const TechStack = () => {
  return (
    <section id="services" className="w-full bg-white py-24 md:py-32 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5 h-full relative">
            <div className="sticky top-32">
              <h2 className="text-[12vw] md:text-[5vw] font-black uppercase tracking-tighter text-black leading-[0.9] mb-6 flex flex-col">
                <span>TECH</span>
                <span>STACK</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-sm">
                These are the primary tools and technologies I use to build performant, accessible, and delightful web experiences.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="border-t border-zinc-200">
              {techData.map((tech, idx) => (
                <div 
                  key={idx}
                  className="flex flex-row items-center justify-between py-5 md:py-6 border-b border-zinc-200 hover:bg-zinc-50 transition-colors px-2 md:px-4 group"
                >
                  <div className="w-8 md:w-12 text-xs md:text-sm text-zinc-300 group-hover:text-zinc-400 transition-colors font-medium">{tech.exp}</div>
                  <div className="flex-1 text-lg md:text-xl font-bold text-black">{tech.name}</div>
                  <div className="w-24 md:w-32 text-right text-xs md:text-sm text-zinc-300 font-normal group-hover:text-zinc-400 transition-colors">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
