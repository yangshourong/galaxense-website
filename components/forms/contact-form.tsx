"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            您的姓名 <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="请输入姓名"
            className="h-12 border-slate-200 focus:border-[#0066CC] focus:ring-[#0066CC]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            联系电话 <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="请输入手机号"
            className="h-12 border-slate-200 focus:border-[#0066CC] focus:ring-[#0066CC]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            电子邮箱
          </label>
          <Input
            type="email"
            placeholder="请输入邮箱"
            className="h-12 border-slate-200 focus:border-[#0066CC] focus:ring-[#0066CC]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            公司名称
          </label>
          <Input
            placeholder="请输入公司名称"
            className="h-12 border-slate-200 focus:border-[#0066CC] focus:ring-[#0066CC]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          咨询内容 <span className="text-red-500">*</span>
        </label>
        <Textarea
          placeholder="请详细描述您的需求或问题..."
          rows={6}
          className="border-slate-200 focus:border-[#0066CC] focus:ring-[#0066CC] resize-none"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-primary hover:opacity-90 text-white h-12 rounded-xl"
      >
        <Send className="w-5 h-5 mr-2" />
        提交咨询
      </Button>
    </form>
  );
}
