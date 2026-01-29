import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "企业动态 | 湖南龙罡智能科技有限公司",
  description: "了解湖南龙罡智能科技的最新动态、公司新闻、科研进展和行业资讯",
};

// Mock data - will be replaced with API data later
const newsItems = [
  {
    id: 1,
    title: "龙罡智能荣获高新技术企业认证",
    summary: "凭借在无创血糖监测领域的技术创新，公司成功获得国家高新技术企业认定，标志着公司在科技创新方面得到国家认可。",
    category: "公司新闻",
    date: "2024-12-15",
    slug: "high-tech-enterprise-certification",
    coverImage: "/images/news/high-tech-enterprise.svg",
  },
  {
    id: 2,
    title: "GalaXense nGm临床试验成果显著",
    summary: "为期6个月的临床试验数据显示，产品监测精度达到医用级标准，获专家一致好评，为产品上市奠定坚实基础。",
    category: "科研进展",
    date: "2024-11-28",
    slug: "clinical-trial-results",
    coverImage: "/images/news/clinical-trial.svg",
  },
  {
    id: 3,
    title: "无创血糖监测技术发展趋势报告",
    summary: "随着传感器技术和AI算法的进步，无创血糖监测正迎来快速发展期，预计将在未来5年内实现大规模商业化应用。",
    category: "行业资讯",
    date: "2024-11-10",
    slug: "industry-trends-report",
    coverImage: "/images/news/industry-trends.svg",
  },
  {
    id: 4,
    title: "公司与多家三甲医院建立合作关系",
    summary: "为推进产品临床应用验证，公司与湖南省内多家三甲医院签署合作协议，共同开展无创血糖监测技术的临床研究。",
    category: "公司新闻",
    date: "2024-10-22",
    slug: "hospital-cooperation",
    coverImage: "/images/news/hospital-cooperation.svg",
  },
  {
    id: 5,
    title: "GalaXense nGm获得多项发明专利",
    summary: "公司在感存算一体传感器、AI算法等核心技术领域获得多项发明专利授权，进一步巩固了技术领先优势。",
    category: "科研进展",
    date: "2024-09-15",
    slug: "patent-awards",
    coverImage: "/images/news/patent-awards.svg",
  },
  {
    id: 6,
    title: "糖尿病管理进入智能化新时代",
    summary: "随着可穿戴设备和人工智能技术的发展，糖尿病管理正从传统的指尖采血向无创连续监测转变，为患者带来更好的体验。",
    category: "行业资讯",
    date: "2024-08-30",
    slug: "diabetes-management-new-era",
    coverImage: "/images/news/diabetes-new-era.svg",
  },
];

const categories = ["全部", "公司新闻", "科研进展", "行业资讯"];

const categoryColors: Record<string, string> = {
  "公司新闻": "bg-[#0066CC]/10 text-[#0066CC]",
  "科研进展": "bg-[#00A896]/10 text-[#00A896]",
  "行业资讯": "bg-[#FF6B35]/10 text-[#FF6B35]",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-20 pb-32 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#0066CC] font-medium text-sm tracking-wider uppercase">
            News & Updates
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            企业动态
          </h1>
          <p className="text-slate-600 text-lg">
            了解龙罡智能的最新动态、科研进展和行业资讯
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                category === "全部"
                  ? "bg-[#0066CC] text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item) => (
            <Link key={item.id} href={`/news/${item.slug}`}>
              <Card className="h-full overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white">
                {/* 封面图 */}
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <h2 className="text-lg font-bold text-[#1A1A2E] mb-3 group-hover:text-[#0066CC] transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                  <span className="inline-flex items-center text-[#0066CC] text-sm font-medium group-hover:gap-2 transition-all">
                    阅读更多
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0066CC] hover:text-[#0066CC] transition-colors">
              ←
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#0066CC] text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0066CC] hover:text-[#0066CC] transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0066CC] hover:text-[#0066CC] transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0066CC] hover:text-[#0066CC] transition-colors">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
