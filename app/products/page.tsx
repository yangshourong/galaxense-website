import type { Metadata } from "next";
import Image from "next/image";
import { Activity, Cpu, Brain, Shield, CheckCircle, Zap, Smartphone, ChevronRight, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "产品展示 | GalaXense nGm无创血糖监测仪",
  description: "了解GalaXense nGm AI智糖盒的产品详情、核心技术、技术参数和认证资质",
};

const techFeatures = [
  {
    icon: Zap,
    title: "无创光学检测",
    description: "采用多波长近红外光谱技术，通过手指测量孔进行无创检测，彻底告别采血疼痛。",
  },
  {
    icon: Brain,
    title: "AI深度学习算法",
    description: "基于深度神经网络的个人化血糖预测模型，持续学习用户生理特征，不断提升监测精度。",
  },
  {
    icon: Cpu,
    title: "感存算一体传感器",
    description: "集成多波长光源、高灵敏度探测器和边缘计算单元，实现实时信号处理和智能分析。",
  },
];

const specs = [
  { label: "监测方式", value: "多波长近红外光谱检测", icon: Activity },
  { label: "测量部位", value: "手指（专用测量孔）", icon: Activity },
  { label: "测量时间", value: "约20秒快速出结果", icon: Zap },
  { label: "充电接口", value: "Type-C快充", icon: Zap },
  { label: "续航时间", value: "14天超长续航", icon: Activity },
  { label: "防水等级", value: "IP67防水防尘", icon: Shield },
  { label: "连接方式", value: "4G网络连接，随时联网", icon: Smartphone },
  { label: "数据存储", value: "云端+本地双备份", icon: Activity },
];

const advantages = [
  { title: "无需采血", desc: "彻底告别采血疼痛" },
  { title: "快速测量", desc: "约20秒出结果" },
  { title: "异常预警", desc: "实时血糖异常提醒" },
  { title: "健康报告", desc: "个性化数据分析" },
  { title: "远程关怀", desc: "家人随时查看数据" },
  { title: "医生共享", desc: "便捷的医疗数据共享" },
];

const useSteps = [
  { step: 1, title: "放置手指", desc: "将手指放入专用测量孔" },
  { step: 2, title: "自动检测", desc: "设备自动开始光学扫描" },
  { step: 3, title: "查看结果", desc: "屏幕实时显示血糖数值" },
  { step: 4, title: "数据同步", desc: "自动同步至手机APP" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#0066CC]/10 text-[#0066CC] hover:bg-[#0066CC]/20">
                核心产品
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mt-4 mb-6">
                GalaXense nGm
                <span className="text-gradient block mt-2">AI智糖盒</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                融合感存算一体传感器与人工智能技术的下一代无创血糖监测设备，
                为糖尿病患者和健康管理人群提供舒适、精准、智能的血糖管理解决方案。
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["无创监测", "AI智能", "主动测量", "精准校准"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white px-8 rounded-xl"
                asChild
              >
                <Link href="/contact">预约体验</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl transform rotate-6" />
                
                {/* Product image container */}
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
                </div>
                
                {/* Floating info cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00A896]/10 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-[#00A896]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">监测精度</p>
                      <p className="text-sm font-bold text-[#1A1A2E]">接近有创血糖仪</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0066CC]/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#0066CC]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">响应时间</p>
                      <p className="text-sm font-bold text-[#1A1A2E]">约20秒</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#00A896]/10 text-[#00A896] hover:bg-[#00A896]/20">
              核心技术
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
              三大核心技术突破
            </h2>
            <p className="text-slate-600 text-lg">
              通过传感器硬件、AI算法、临床医学的深度融合，实现无创血糖监测的技术革新
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <Card key={feature.title} className="p-8 border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20">
              使用流程
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
              简单四步，轻松测量
            </h2>
            <p className="text-slate-600 text-lg">
              无需专业知识，老人小孩都能轻松上手
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <Card className="p-6 border-slate-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Card>
                {index < useSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20">
                技术参数
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-8">
                产品规格
              </h2>
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-4 border-b border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                        <spec.icon className="w-5 h-5 text-[#0066CC]" />
                      </div>
                      <span className="text-slate-600">{spec.label}</span>
                    </div>
                    <span className="font-semibold text-[#1A1A2E]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Badge className="mb-4 bg-[#0066CC]/10 text-[#0066CC] hover:bg-[#0066CC]/20">
                产品优势
              </Badge>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mt-3 mb-6">
                为什么选择 GalaXense nGm
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1A1A2E]">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Accuracy comparison */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#0066CC]/10 to-[#00A896]/10 rounded-2xl">
                <p className="text-sm font-medium text-[#1A1A2E] mb-4">测量精度对比</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">GalaXense nGm（校准后）</span>
                      <span className="font-semibold text-[#0066CC]">接近传统血糖仪</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">传统血糖仪</span>
                      <span className="font-semibold text-slate-500">参考标准</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-slate-400 rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  * 通过传统有创血糖仪几次校准后，测量精度接近传统血糖仪水平
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container-custom text-center">
          <Badge className="mb-4 bg-[#0066CC]/10 text-[#0066CC] hover:bg-[#0066CC]/20">
            权威认证
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-12">
            专业认证，值得信赖
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "国家高新技术企业", icon: Award },
              { title: "ISO13485质量管理体系", icon: Shield },
              { title: "CE认证", icon: Award },
              { title: "多项专利技术", icon: Award },
            ].map((cert) => (
              <div
                key={cert.title}
                className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-[#0066CC]/30 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0066CC]/10 to-[#00A896]/10 rounded-xl flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-[#0066CC]" />
                </div>
                <p className="font-medium text-[#1A1A2E] text-sm">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            想了解更多产品信息？
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            我们的专业团队将为您提供详细的产品介绍和技术解答
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0066CC] hover:bg-white/90 px-8 rounded-xl"
              asChild
            >
              <Link href="/contact">立即咨询</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 rounded-xl"
              asChild
            >
              <Link href="/contact">预约体验</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
