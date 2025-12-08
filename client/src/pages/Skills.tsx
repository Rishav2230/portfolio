import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

export default function Skills() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-orbitron font-bold text-secondary mb-12 uppercase"
      >
        Skill Matrix
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="h-[400px] w-full bg-card/20 backdrop-blur-md rounded-xl border border-secondary/20 flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full" />
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={portfolioData.skills}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#00f3ff', fontFamily: 'Orbitron', fontSize: 10 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skill Level"
                dataKey="level"
                stroke="#ff00ff"
                strokeWidth={2}
                fill="#ff00ff"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#030014', border: '1px solid #ff00ff' }}
                itemStyle={{ color: '#fff' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Skill Bars */}
        <div className="space-y-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex justify-between mb-2 font-rajdhani uppercase tracking-wider">
                <span className="text-white">{skill.name}</span>
                <span className="text-secondary">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-secondary to-purple-600 shadow-[0_0_10px_#ff00ff]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
