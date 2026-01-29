import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// 文章数据
const newsArticles: Record<string, NewsArticle> = {
  "high-tech-enterprise-certification": {
    id: 1,
    title: "龙罡智能荣获高新技术企业认证",
    summary: "凭借在无创血糖监测领域的技术创新，公司成功获得国家高新技术企业认定，标志着公司在科技创新方面得到国家认可。",
    category: "公司新闻",
    date: "2024-12-15",
    slug: "high-tech-enterprise-certification",
    coverImage: "/images/news/high-tech-enterprise.svg",
    author: "龙罡智能",
    content: `
      <p>2024年12月，湖南龙罡智能科技有限公司正式获得国家高新技术企业认定（证书编号：GR202443002931），这标志着公司在无创血糖监测领域的技术创新能力和研发投入得到了国家层面的高度认可。</p>
      
      <h2>认证背景与意义</h2>
      <p>国家高新技术企业认定是我国科技型企业的重要荣誉，对企业的研发投入、技术创新能力、知识产权储备等方面有着严格要求。龙罡智能凭借在"基于感存算一体传感器的多维测量无创血糖监测仪"核心技术上的突破，成功通过认定。</p>
      
      <h2>核心技术亮点</h2>
      <p>公司的核心技术体系主要包括：</p>
      <ul>
        <li><strong>感存算一体传感器技术</strong>：采用复杂系统理论实现无创检测，融合多种测量机制</li>
        <li><strong>AI算法平台</strong>：通过人工智能与临床医学的交叉研究，实现高精度血糖预测</li>
        <li><strong>生命数字孪生技术</strong>：构建个人健康数据模型，提供个性化健康管理方案</li>
      </ul>
      
      <h2>未来展望</h2>
      <p>获得高新技术企业认定后，公司将享受税收优惠政策，进一步加大研发投入。同时，这也为后续医疗器械注册申报、资本市场运作奠定了坚实基础。公司将持续推进产品产业化进程，力争早日让无创血糖监测技术惠及广大糖尿病患者。</p>
      
      <blockquote>
        "高新技术企业认定是对我们团队多年努力的肯定，我们将以此为新起点，继续深耕无创检测领域，为人类健康事业贡献力量。" —— 王全贵博士，龙罡智能首席科学家
      </blockquote>
    `
  },
  "clinical-trial-results": {
    id: 2,
    title: "GalaXense nGm临床试验成果显著",
    summary: "为期6个月的临床试验数据显示，产品监测精度达到医用级标准，获专家一致好评，为产品上市奠定坚实基础。",
    category: "科研进展",
    date: "2024-11-28",
    slug: "clinical-trial-results",
    coverImage: "/images/news/clinical-trial.svg",
    author: "临床研究部",
    content: `
      <p>2024年11月，湖南龙罡智能科技有限公司完成了GalaXense nGm无创血糖监测仪的临床试验，试验结果令人满意，产品监测精度达到医用级标准，为产品注册上市奠定了坚实基础。</p>
      
      <h2>临床试验设计</h2>
      <p>本次临床试验在湘雅医院等多家三甲医院开展，采用随机、对照、开放的研究设计。试验共招募300名糖尿病患者，监测周期为6个月，通过与静脉血血糖值对比，验证产品的准确性和安全性。</p>
      
      <h2>关键试验结果</h2>
      <p>试验数据显示，GalaXense nGm的核心指标表现优异：</p>
      <ul>
        <li><strong>准确性</strong>：与静脉血血糖值的相关系数达到0.92，满足医用级标准</li>
        <li><strong>稳定性</strong>：连续监测误差控制在±15%以内，符合国际标准</li>
        <li><strong>用户体验</strong>：98%的受试者表示佩戴舒适，无皮肤过敏等不良反应</li>
        <li><strong>依从性</strong>：日活跃用户占比达到95%，显著高于传统指尖采血方式</li>
      </ul>
      
      <h2>专家评审意见</h2>
      <p>参与评审的专家一致认为，GalaXense nGm在无创血糖监测领域取得了重要突破，其技术创新性和临床价值得到了高度认可。专家指出，该产品的出现将极大改善糖尿病患者的生活质量，具有广阔的市场前景。</p>
      
      <h2>下一步计划</h2>
      <p>基于本次临床试验的积极结果，公司已正式启动医疗器械注册申报程序，预计2025年可获得二类医疗器械注册证。同时，公司正在筹备更大规模的多中心临床试验，为申请三类医疗器械注册积累数据。</p>
    `
  },
  "industry-trends-report": {
    id: 3,
    title: "无创血糖监测技术发展趋势报告",
    summary: "随着传感器技术和AI算法的进步，无创血糖监测正迎来快速发展期，预计将在未来5年内实现大规模商业化应用。",
    category: "行业资讯",
    date: "2024-11-10",
    slug: "industry-trends-report",
    coverImage: "/images/news/industry-trends.svg",
    author: "行业研究中心",
    content: `
      <p>2024年，全球无创血糖监测技术进入快速发展期，多项突破性技术成果相继问世。根据行业研究报告，预计未来5年内，无创血糖监测设备市场规模将达到数百亿美元。</p>
      
      <h2>技术发展路线</h2>
      <p>当前无创血糖监测技术主要分为三大路线：</p>
      <ul>
        <li><strong>光学技术路线</strong>：包括近红外光谱、拉曼光谱等，代表企业如苹果、三星</li>
        <li><strong>电化学技术路线</strong>：采用微针或离子电渗技术，代表企业如Know Labs</li>
        <li><strong>多模态融合技术</strong>：结合多种传感技术，通过AI算法提高精度，代表企业如龙罡智能</li>
      </ul>
      
      <h2>市场驱动因素</h2>
      <p>无创血糖监测市场的快速增长主要受以下因素驱动：</p>
      <ul>
        <li>全球糖尿病患者数量持续攀升，中国患者已超过1.4亿</li>
        <li>患者对舒适化监测的需求日益强烈</li>
        <li>传感器微型化和成本下降</li>
        <li>AI算法在医疗健康领域的成熟应用</li>
        <li>各国监管机构对创新医疗器械的加速审批</li>
      </ul>
      
      <h2>挑战与机遇</h2>
      <p>尽管前景广阔，无创血糖监测技术仍面临一些挑战：准确性验证、个体差异适应、长期稳定性等。但与此同时，这也为技术领先企业提供了差异化竞争的机会。</p>
      
      <p>龙罡智能采用的"感存算一体+多模态融合"技术路线，通过复杂系统理论实现无创检测，在准确性、稳定性和成本控制方面具有独特优势，有望在市场竞争中占据有利地位。</p>
      
      <h2>未来展望</h2>
      <p>预计到2030年，无创血糖监测将成为糖尿病管理的主流方式。届时，连续、无痛、精准的血糖监测将帮助更多患者实现血糖达标，大幅降低并发症风险。</p>
    `
  },
  "hospital-cooperation": {
    id: 4,
    title: "公司与多家三甲医院建立合作关系",
    summary: "为推进产品临床应用验证，公司与湖南省内多家三甲医院签署合作协议，共同开展无创血糖监测技术的临床研究。",
    category: "公司新闻",
    date: "2024-10-22",
    slug: "hospital-cooperation",
    coverImage: "/images/news/hospital-cooperation.svg",
    author: "商务合作部",
    content: `
      <p>2024年10月，湖南龙罡智能科技有限公司与中南大学湘雅医院、湖南省人民医院、长沙市中心医院等多家三甲医院签署战略合作协议，共同开展无创血糖监测技术的临床研究和应用推广。</p>
      
      <h2>合作内容</h2>
      <p>根据协议，双方将在以下领域开展深度合作：</p>
      <ul>
        <li><strong>临床试验</strong>：共同开展GalaXense nGm的临床验证研究</li>
        <li><strong>科研合作</strong>：联合申报"十四五"国家重点研发计划智能传感器专项</li>
        <li><strong>人才培养</strong>：建立产学研合作基地，培养医疗器械创新人才</li>
        <li><strong>成果转化</strong>：推动无创血糖监测技术的临床应用和产业化</li>
      </ul>
      
      <h2>合作意义</h2>
      <p>此次合作是龙罡智能"医工结合"战略的重要里程碑。通过与顶级医疗机构的深度合作，公司能够获得宝贵的临床反馈，持续优化产品性能；同时，医院的科研资源也将加速公司的技术创新进程。</p>
      
      <h2>科研团队</h2>
      <p>龙罡智能的科研团队由国防科技大学、湖南中医药大学等多学科专家组成，首席科学家王全贵博士曾参与北斗系统研究，主导交叉学科技术创新。这种跨学科、跨领域的合作模式，为无创血糖监测技术的突破提供了强大支撑。</p>
      
      <h2>未来规划</h2>
      <p>公司计划在未来两年内，将合作医院扩展至全国主要城市，建立覆盖东南西北中的临床研究网络。同时，还将探索与基层医疗机构的合作模式，让无创血糖监测技术惠及更多患者。</p>
    `
  },
  "patent-awards": {
    id: 5,
    title: "GalaXense nGm获得多项发明专利",
    summary: "公司在感存算一体传感器、AI算法等核心技术领域获得多项发明专利授权，进一步巩固了技术领先优势。",
    category: "科研进展",
    date: "2024-09-15",
    slug: "patent-awards",
    coverImage: "/images/news/patent-awards.svg",
    author: "知识产权部",
    content: `
      <p>2024年，湖南龙罡智能科技有限公司在知识产权保护方面取得重大突破，多项核心技术获得发明专利授权，进一步巩固了在无创血糖监测领域的技术领先地位。</p>
      
      <h2>专利布局</h2>
      <p>截至2024年底，公司拥有有效发明专利6项，涵盖以下技术领域：</p>
      <ul>
        <li><strong>感存算一体传感器技术</strong>：一种集成多种测量机制的血液成分检定方法</li>
        <li><strong>无创血糖测量技术</strong>：一种无创血糖测量装置与方法（2023年10月授权）</li>
        <li><strong>体温检测技术</strong>：一种新型耳塞式人体体温检测方法及装置（2024年3月授权）</li>
        <li><strong>数据处理算法</strong>：基于深度学习的血糖预测模型及系统</li>
        <li><strong>硬件结构设计</strong>：可穿戴式无创血糖监测设备</li>
        <li><strong>软件系统</strong>：GalaXense智能血糖终端管理软件（2022年11月登记）</li>
      </ul>
      
      <h2>商标品牌</h2>
      <p>在商标方面，公司已注册"GalaXense"、"NGM"、"晓糖精灵"等17个品牌标识，构建了完善的品牌保护体系。</p>
      
      <h2>技术壁垒</h2>
      <p>这些专利的获得，为龙罡智能构建了坚实的技术壁垒。特别是"一种无创血糖测量装置与方法"专利，覆盖了从传感器设计到数据处理的核心技术环节，为公司在市场竞争中提供了有力保障。</p>
      
      <h2>持续创新</h2>
      <p>公司将继续加大研发投入，预计2025年将申请新增发明专利10项以上，持续完善知识产权布局。同时，公司还将积极拓展国际专利申请，为产品走向海外市场做好准备。</p>
    `
  },
  "diabetes-management-new-era": {
    id: 6,
    title: "糖尿病管理进入智能化新时代",
    summary: "随着可穿戴设备和人工智能技术的发展，糖尿病管理正从传统的指尖采血向无创连续监测转变，为患者带来更好的体验。",
    category: "行业资讯",
    date: "2024-08-30",
    slug: "diabetes-management-new-era",
    coverImage: "/images/news/diabetes-new-era.svg",
    author: "产品策划部",
    content: `
      <p>2024年，糖尿病管理领域迎来重大变革。以龙罡智能GalaXense nGm为代表的无创连续血糖监测设备，正在重新定义糖尿病患者的日常管理方式。</p>
      
      <h2>传统管理的痛点</h2>
      <p>传统的指尖采血式血糖监测存在诸多痛点：</p>
      <ul>
        <li><strong>疼痛感</strong>：每日多次刺破指尖，给患者带来持续疼痛</li>
        <li><strong>监测盲区</strong>：只能获取离散时间点的血糖值，无法捕捉血糖波动全貌</li>
        <li><strong>依从性差</strong>：复杂的操作流程导致患者监测频率不足</li>
        <li><strong>数据孤立</strong>：缺乏与其他健康数据的整合分析</li>
      </ul>
      
      <h2>智能化解决方案</h2>
      <p>龙罡智能的GalaXense nGm通过技术创新，为上述问题提供了全新解决方案：</p>
      <ul>
        <li><strong>完全无痛</strong>：采用非侵入式检测技术，实现真正的无痛监测</li>
        <li><strong>连续监测</strong>：24小时连续监测，完整呈现血糖变化曲线</li>
        <li><strong>智能提醒</strong>：AI算法自动识别异常血糖，及时预警</li>
        <li><strong>数据互联</strong>：整合运动、饮食、用药等多维度数据，提供全面健康分析</li>
      </ul>
      
      <h2>技术突破</h2>
      <p>GalaXense nGm的核心突破在于将"感存算一体传感器"与"生命数字孪生技术"相结合。传感器负责高精度数据采集，AI算法负责智能分析和预测，云平台负责数据存储和远程管理，形成了完整的智能血糖管理生态。</p>
      
      <h2>患者体验</h2>
      <p>早期用户反馈显示，使用GalaXense nGm后，患者的血糖达标率显著提高，生活质量明显改善。一位用户表示："终于不用再每天扎手指了，我可以更专注于工作和生活，而不是被糖尿病束缚。"</p>
      
      <h2>行业展望</h2>
      <p>随着技术的不断成熟和成本的持续下降，无创连续血糖监测有望在5-10年内成为糖尿病管理的标配。届时，糖尿病患者将真正享受到智能化、个性化、便捷化的健康管理服务。</p>
    `
  }
};

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  coverImage: string;
  author: string;
  content: string;
}

// 根据slug生成页面元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles[slug];
  
  if (!article) {
    return {
      title: "文章未找到 | 湖南龙罡智能科技有限公司",
    };
  }
  
  return {
    title: `${article.title} | 企业动态 | 湖南龙罡智能科技有限公司`,
    description: article.summary,
  };
}

// 生成静态路径
export function generateStaticParams() {
  return Object.keys(newsArticles).map((slug) => ({
    slug,
  }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsArticles[slug];
  
  if (!article) {
    notFound();
  }
  
  const categoryColors: Record<string, string> = {
    "公司新闻": "bg-[#0066CC]/10 text-[#0066CC]",
    "科研进展": "bg-[#00A896]/10 text-[#00A896]",
    "行业资讯": "bg-[#FF6B35]/10 text-[#FF6B35]",
  };
  
  return (
    <div className="min-h-screen pt-20 pb-32 bg-slate-50">
      <div className="container-custom">
        {/* 返回按钮 */}
        <div className="mb-8">
          <Link href="/news">
            <Button variant="ghost" className="text-slate-600 hover:text-[#0066CC] pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回企业动态
            </Button>
          </Link>
        </div>
        
        {/* 文章头部 */}
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* 封面图 */}
          <div className="relative aspect-[21/9] w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {/* 分类标签 */}
            <div className="absolute top-6 left-6">
              <Badge className={`${categoryColors[article.category] || "bg-slate-100 text-slate-600"} text-sm px-4 py-1`}>
                {article.category}
              </Badge>
            </div>
          </div>
          
          {/* 文章内容 */}
          <div className="p-8 md:p-12">
            {/* 标题区 */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-6 leading-tight">
                {article.title}
              </h1>
              
              {/* 元信息 */}
              <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8 pb-8 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-[#0066CC] ml-auto">
                  <Share2 className="w-4 h-4 mr-1" />
                  分享
                </Button>
              </div>
              
              {/* 摘要 */}
              <div className="bg-slate-50 p-6 rounded-xl mb-8">
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  {article.summary}
                </p>
              </div>
              
              {/* 正文 */}
              <div 
                className="prose prose-slate max-w-none prose-headings:text-[#1A1A2E] prose-headings:font-bold prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-[#1A1A2E] prose-blockquote:border-l-[#0066CC] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* 分隔线 */}
              <Separator className="my-12" />
              
              {/* 相关推荐 */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">相关文章</h3>
                <div className="space-y-3">
                  {Object.values(newsArticles)
                    .filter((item) => item.id !== article.id && item.category === article.category)
                    .slice(0, 2)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={`/news/${item.slug}`}
                        className="block p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs text-[#0066CC] font-medium">{item.category}</span>
                            <h4 className="text-sm font-medium text-[#1A1A2E] mt-1 group-hover:text-[#0066CC] transition-colors">
                              {item.title}
                            </h4>
                          </div>
                          <ArrowLeft className="w-4 h-4 text-slate-400 rotate-180 group-hover:text-[#0066CC] transition-colors" />
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
