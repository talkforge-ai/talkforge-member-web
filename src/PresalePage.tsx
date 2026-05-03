import React from "react";

import logoImage from "./asset/logo.svg";
import heroImage from "./asset/presale/hero.jpg";
import dialogueImage from "./asset/presale/dialogue.jpg";
import dailyPracticeImage from "./asset/presale/daily-practice.jpg";
import dailyWordImage from "./asset/presale/daily-word-v2.jpg";
import challengeImage from "./asset/presale/challenge.jpg";
import feedbackImage from "./asset/presale/feedback-v2.jpg";

type Feature = {
  pain: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tone?: "default" | "blue";
};

const features: Feature[] = [
  {
    pain: "想开口练，却找不到人说",
    title: "沉浸式 AI 对话",
    description:
      "AI 模拟面试、会议、谈判等真实商务场景，像和真实外教随时一对一对话。每次对话后生成六维能力报告，清楚知道自己哪里强、哪里弱。",
    image: dialogueImage,
    imageAlt: "沉浸式 AI 对话场景",
  },
  {
    pain: "想好了，却说不出来",
    title: "每日一练",
    description:
      "先用中文理清表达逻辑，再学习地道英文说法。精听、跟读、背诵、报告四步闭环训练，支持行业题库和自定义内容。",
    image: dailyPracticeImage,
    imageAlt: "每日一练跟读场景",
    tone: "blue",
  },
  {
    pain: "学了就忘，没有积累",
    title: "每日一词",
    description:
      "每天精学一个高频商务词汇或短语，配合真人语音示范和场景例句。周度打卡追踪进度，让商务表达持续积累。",
    image: dailyWordImage,
    imageAlt: "每日一词学习场景",
  },
  {
    pain: "面试谈判，临场就怯",
    title: "场景挑战",
    description:
      "覆盖面试、会议、商务谈判等实战挑战课程。通过分析、方向指导、注意事项和示例答案，帮你更从容地应对职场英语场景。",
    image: challengeImage,
    imageAlt: "场景挑战练习场景",
    tone: "blue",
  },
  {
    pain: "说完不知道哪里需要改",
    title: "AI 实时反馈",
    description:
      "对话中实时语法优化，不确定的表达一键翻译，跟读时 AI 纠正发音，还能给出更地道的表达建议。",
    image: feedbackImage,
    imageAlt: "AI 实时反馈场景",
  },
];

const benefits = [
  {
    name: "Free",
    description: "先体验核心对话能力",
    quota: "3 次/天",
    recommended: false,
    perks: ["场景对话：每日基础额度", "每日一词、每日一练：体验基础内容"],
  },
  {
    name: "Premium",
    description: "建立稳定练习节奏",
    quota: "35 次/月",
    recommended: false,
    perks: ["场景对话：每月 35 次练习额度", "每日一词、每日一练：会员期内无限量使用"],
  },
  {
    name: "Premium PLUS",
    description: "适合高频练习和专项冲刺",
    quota: "无上限",
    recommended: true,
    perks: ["场景对话：会员期内无上限练习", "每日一词、每日一练：会员期内无限量使用"],
  },
];

const closingMetrics = [
  {
    value: "真实",
    title: "商务场景",
    description: "面试、会议、谈判、客户沟通都能反复练",
  },
  {
    value: "六维",
    title: "能力报告",
    description: "从流畅度、语法、逻辑等维度看见进步",
  },
  {
    value: "实时",
    title: "AI 反馈",
    description: "说完就能知道哪里需要优化",
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <article
      className={`presale-feature-card${
        feature.tone === "blue" ? " presale-feature-card-blue" : ""
      }`}
    >
      <div className="presale-pain-tag">{feature.pain}</div>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
      <img
        className="presale-feature-image"
        src={feature.image}
        alt={feature.imageAlt}
      />
    </article>
  );
};

const PresalePage: React.FC = () => {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <main className="presale-page">
      <section className="presale-hero">
        <div className="presale-safe-top" />
        <button
          className="presale-back"
          type="button"
          aria-label="返回"
          onClick={handleBack}
        >
          ‹
        </button>
        <img
          className="presale-hero-logo-bg"
          src={logoImage}
          alt=""
          aria-hidden="true"
        />

        <div className="presale-hero-content">
          <h1>
            学英语，最怕的不是不会
            <br />
            而是没有开口的机会
          </h1>
          <p>TalkForge 用 AI 为你创造真实的商务英语环境。</p>

          <div className="presale-hero-visual">
            <img src={heroImage} alt="商务英语练习场景" />
            <div className="presale-hero-caption">
              从真实场景开始练，而不是反复背用不上的句子
              <span>面试、会议、谈判、客户沟通，每一次练习都有反馈和报告。</span>
            </div>
          </div>

          <div className="presale-hero-points" aria-label="核心能力概览">
            <div className="presale-hero-point">
              <strong>真实</strong>
              <span>商务场景</span>
            </div>
            <div className="presale-hero-point">
              <strong>六维</strong>
              <span>能力报告</span>
            </div>
            <div className="presale-hero-point">
              <strong>实时</strong>
              <span>AI 反馈</span>
            </div>
          </div>

          <div className="presale-scroll-hint">
            <span>向下滑动，了解会员能解锁什么</span>
            <span className="presale-scroll-arrow" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="presale-content">
        <div className="presale-section-heading">
          <div className="presale-section-kicker">核心能力</div>
          <h2>
            5 个核心能力
            <br />
            帮你真正开口练英语
          </h2>
          <p>从真实对话、结构化练习到反馈报告，形成完整练习闭环。</p>
        </div>

        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}

        <h2 className="presale-section-title">升级后，练习空间更大</h2>
        <div className="presale-benefits" aria-label="会员权益差异">
          {benefits.map((benefit) => (
            <div
              className={`presale-benefit-row${
                benefit.recommended ? " presale-benefit-row-recommended" : ""
              }`}
              key={benefit.name}
            >
              <div className="presale-benefit-main">
                <div>
                  <div className="presale-benefit-name-line">
                    <div className="presale-benefit-name">{benefit.name}</div>
                    {benefit.recommended ? (
                      <span className="presale-recommend-tag">最推荐</span>
                    ) : null}
                  </div>
                  <div className="presale-benefit-desc">
                    {benefit.description}
                  </div>
                </div>
                <div className="presale-benefit-quota">{benefit.quota}</div>
              </div>
              <div className="presale-benefit-perks">
                {benefit.perks.map((perk) => (
                  <div className="presale-benefit-perk" key={perk}>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="presale-closing">
          <div className="presale-closing-eyebrow">持续练，才会真正敢开口</div>
          <h2>每天 15 分钟，让英语成为你的职场优势</h2>
          <p>
            从真实场景开始，到练后反馈和能力报告，TalkForge 帮你把每一次开口都变成有效练习。
          </p>
          <div className="presale-metrics">
            {closingMetrics.map((metric) => (
              <div className="presale-metric" key={metric.title}>
                <strong>{metric.value}</strong>
                <span>{metric.title}</span>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default PresalePage;
