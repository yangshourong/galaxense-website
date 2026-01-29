import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "联系我们 | 湖南龙罡智能科技有限公司",
  description: "联系湖南龙罡智能科技，了解更多产品信息，获取专业技术支持和商务合作咨询",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "公司地址",
    content: "长沙高新开发区岳麓西大道588号芯城科技园2栋21楼2107室",
    color: "#0066CC",
  },
  {
    icon: Phone,
    title: "咨询热线",
    content: "400-xxx-xxxx",
    color: "#00A896",
  },
  {
    icon: Mail,
    title: "商务邮箱",
    content: "contact@galaxense.com",
    color: "#FF6B35",
  },
  {
    icon: Clock,
    title: "工作时间",
    content: "周一至周五 9:00-18:00",
    color: "#8B5CF6",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-32 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0066CC] font-medium text-sm tracking-wider uppercase">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            联系我们
          </h1>
          <p className="text-slate-600 text-lg">
            我们期待与您的沟通，无论是产品咨询、技术支持还是商务合作
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 bg-white border-slate-200">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">
                在线咨询
              </h2>
              <ContactForm />
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A2E] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="p-0 overflow-hidden border-slate-200">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-400 text-sm">地图位置</p>
                    <p className="text-slate-500 text-xs mt-1">
                      长沙高新开发区芯城科技园
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
