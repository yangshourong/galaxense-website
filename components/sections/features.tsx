"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "无创无痛",
    description: "无需采血针，通过先进的光学传感器技术，实现真正的无创血糖监测体验",
    color: "#0066CC",
  },
  {
    icon: Brain,
    title: "AI智能分析",
    description: "融合深度学习算法，持续优化监测精度，提供个性化的健康管理建议",
    color: "#00A896",
  },
  {
    icon: Clock,
    title: "快速测量",
    description: "用户主动测量，约20秒内快速出结果，轻松掌握血糖变化",
    color: "#FF6B35",
  },
  {
    icon: Shield,
    title: "精准校准",
    description: "通过传统有创血糖仪校准后，测量精度接近传统血糖仪水平",
    color: "#8B5CF6",
  },
  {
    icon: TrendingUp,
    title: "数据可视化",
    description: "智能APP数据同步，直观的图表展示，帮助您更好地理解血糖规律",
    color: "#10B981",
  },
  {
    icon: Heart,
    title: "贴心守护",
    description: "异常情况智能提醒，远程关怀功能，让家人也能及时了解健康状况",
    color: "#EC4899",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#0066CC] font-medium text-sm tracking-wider uppercase">
            核心优势
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            为什么选择 GalaXense nGm
          </h2>
          <p className="text-slate-600 text-lg">
            感存算一体传感器技术，重新定义血糖监测体验
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 lg:p-8 h-full border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
