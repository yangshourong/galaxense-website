"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data - will be replaced with API data later
const newsItems = [
  {
    id: 1,
    title: "龙罡智能荣获高新技术企业认证",
    summary: "凭借在无创血糖监测领域的技术创新，公司成功获得国家高新技术企业认定...",
    category: "公司新闻",
    date: "2024-12-15",
    slug: "high-tech-enterprise-certification",
    coverImage: "/images/news/high-tech-enterprise.svg",
  },
  {
    id: 2,
    title: "GalaXense nGm临床试验成果显著",
    summary: "为期6个月的临床试验数据显示，产品监测精度达到医用级标准，获专家一致好评...",
    category: "科研进展",
    date: "2024-11-28",
    slug: "clinical-trial-results",
    coverImage: "/images/news/clinical-trial.svg",
  },
  {
    id: 3,
    title: "无创血糖监测技术发展趋势报告",
    summary: "随着传感器技术和AI算法的进步，无创血糖监测正迎来快速发展期...",
    category: "行业资讯",
    date: "2024-11-10",
    slug: "industry-trends-report",
    coverImage: "/images/news/industry-trends.svg",
  },
];

const categoryColors: Record<string, string> = {
  "公司新闻": "bg-[#0066CC]/10 text-[#0066CC]",
  "科研进展": "bg-[#00A896]/10 text-[#00A896]",
  "行业资讯": "bg-[#FF6B35]/10 text-[#FF6B35]",
};

export function NewsPreviewSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0066CC] font-medium text-sm tracking-wider uppercase">
              企业动态
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3">
              最新资讯
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="outline"
              className="border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white group"
              asChild
            >
              <Link href="/news">
                查看更多
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/news/${item.slug}`}>
                <Card className="h-full overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  {/* Cover Image */}
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={categoryColors[item.category] || "bg-slate-100 text-slate-600"}>
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#0066CC] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
