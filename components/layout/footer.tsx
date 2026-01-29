"use client";

import Link from "next/link";
import { Activity, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: [
    { href: "/products", label: "GalaXense nGm" },
    { href: "/products", label: "核心技术" },
    { href: "/products", label: "技术参数" },
  ],
  company: [
    { href: "/news", label: "企业动态" },
    { href: "/contact", label: "联系我们" },
    { href: "/contact", label: "加入我们" },
  ],
  support: [
    { href: "/contact", label: "产品咨询" },
    { href: "/contact", label: "售后服务" },
    { href: "/contact", label: "常见问题" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">龙罡智能</span>
                <span className="text-xs text-slate-400 block -mt-1">GalaXense</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              专注生命健康指标无创检测产品研发，融合感存算一体传感器与人工智能，让血糖管理更简单、更舒适。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                <span>长沙高新开发区岳麓西大道588号<br />芯城科技园2栋21楼2107室</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-[#00A896] flex-shrink-0" />
                <span>400-xxx-xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-[#00A896] flex-shrink-0" />
                <span>contact@galaxense.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-6">产品中心</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00A896] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-6">关于我们</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00A896] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-6">客户服务</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00A896] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 湖南龙罡智能科技有限公司 版权所有
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300">
              隐私政策
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300">
              使用条款
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
