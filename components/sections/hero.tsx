"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0066CC]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#00A896]/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066CC]/10 text-[#0066CC] text-sm font-medium mb-6"
            >
              <Activity className="w-4 h-4" />
              <span>医疗科技创新引领者</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight mb-6"
            >
              无创血糖监测
              <span className="text-gradient block mt-2">新时代</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8"
            >
              GalaXense nGm AI智糖盒，融合<span className="text-[#0066CC] font-medium">感存算一体传感器</span>与
              <span className="text-[#00A896] font-medium">人工智能</span>，
              让血糖管理更简单、更舒适
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-base rounded-xl group"
                asChild
              >
                <Link href="/products">
                  了解产品
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 hover:border-[#0066CC] hover:text-[#0066CC] px-8 py-6 text-base rounded-xl"
                asChild
              >
                <Link href="/contact">立即咨询</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]">10+</div>
                <div className="text-sm text-slate-500 mt-1">发明专利</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]">20秒</div>
                <div className="text-sm text-slate-500 mt-1">快速出结果</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]">0痛</div>
                <div className="text-sm text-slate-500 mt-1">无创体验</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl transform rotate-6" />
              
              {/* Product card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                <div className="aspect-square bg-gradient-to-br from-slate-50 to-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/product-main.png"
                    alt="GalaXense nGm AI智糖盒"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                
                {/* Feature badges */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-[#0066CC]/10 text-[#0066CC] text-xs rounded-full font-medium">
                    无创监测
                  </span>
                  <span className="px-3 py-1 bg-[#00A896]/10 text-[#00A896] text-xs rounded-full font-medium">
                    AI智能
                  </span>
                  <span className="px-3 py-1 bg-[#FF6B35]/10 text-[#FF6B35] text-xs rounded-full font-medium">
                    主动测量
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
