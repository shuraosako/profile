import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, ExternalLink, Award, Globe, Code, User, Briefcase, GraduationCap, Calendar, MapPin, Star, Instagram } from 'lucide-react';
import meImage from './images/me.png';
import './App.css';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 2 },
    { name: 'JavaScript', level: 2 },
    { name: 'React', level: 2 },
    { name: 'Node.js', level: 1 },
    { name: 'Java', level: 2 },
    { name: 'C', level: 2 },
    { name: 'Flutter', level: 2 },
    { name: 'HTML/CSS', level: 4 },
    { name: 'MySQL', level: 2 },
    { name: 'Firebase', level: 3 },
    { name: 'Figma', level: 4 },
    { name: 'Canva', level: 3 },
    { name: 'GAN', level: 2 },
    { name: '画像認識', level: 3 }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "高校囲碁九州大会 3位",
      year: "2019",
      description: "戦略的思考力と集中力を証明",
      color: "from-yellow-400 to-orange-500",
      url: "https://ka-joho.jp/info/2020/12/post-408.html"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "タイ・バンコク都プログラム",
      year: "2023",
      description: "地域課題解決WEBアプリケーション開発",
      color: "from-pink-400 to-red-500",
      url: "https://mainichi.jp/articles/20230621/k00/00m/100/308000c"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "HACK U 2024 FUKUOKA 入賞",
      year: "2024",
      description: "LINE&Yahoo主催ハッカソンで技術力を実証",
      color: "from-blue-400 to-purple-500",
      url: "https://hacku.yahoo.co.jp/hacku2024_fukuoka/"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "大阪万博 ASEAN Pavilion 出展",
      year: "2025",
      description: "福工大代表として現地紹介役員を担当",
      color: "from-green-400 to-teal-500",
      url: "https://www.fit.ac.jp/news/archives/4974"
    }
  ];

  const experiences = [
    {
      title: "長期インターンシップ",
      company: "株式会社センキャク",
      period: "2024年4月 - 2025年3月",
      description: "スケジュール管理アプリの開発",
      tech: ["Flutter", "Firebase", "Github"]
    },
    {
      title: "海外留学",
      company: "センテニアルカレッジ",
      period: "2024年9月",
      description: "カナダ・トロントで1ヶ月間のホームステイ留学",
      tech: ["国際交流", "英語", "異文化理解"]
    },
    {
      title: "サークル副部長",
      company: "福岡工業大学 アンプラグド部",
      period: "2021年 - 2024年",
      description: "チームリーダーシップとマネジメント経験",
      tech: ["リーダーシップ", "チームワーク", "企画運営"]
    }
  ];

  const projects = [
    {
      title: "KOJI AWARENESS 身体機能評価システム",
      description: "ポーズ推定技術を用いたリアルタイム身体機能評価の自動化システム",
      tech: ["Python", "YOLOv8", "MediaPipe", "React", "Flask"],
      type: "研究"
    },
    {
      title: "地域課題解決WEBアプリ",
      description: "タイ・バンコク都との国際プログラムで開発",
      tech: ["Web開発", "地域課題解決", "国際協力"],
      type: "国際プロジェクト"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              Shura Osako
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-gray-800/20 to-slate-900/30"></div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div 
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
              大迫 汐欄
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              Shura Osako
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              福岡工業大学大学院生 | 開発者 | 研究者
              <br />
              好奇心と技術で未来を探求する
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-slate-800/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm">22歳</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">福岡</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">B型</span>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/shuraosako" 
                target="_blank"
                className="p-3 bg-slate-800/40 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/osako1213" 
                target="_blank"
                className="p-3 bg-slate-800/40 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="mailto:mjm25101@bene.fit.ac.jp"
                className="p-3 bg-slate-800/40 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                2002年12月13日生まれ、鹿児島から福岡へ。<br />
                小中学校ではサッカー部とキックボクシング部で体を鍛え、
                <br />高校では囲碁で戦略的思考を磨きました。
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                現在は福岡工業大学院でAIの研究に取り組んでいます。<br />
                技術だけでなく、国際的な視野と実務経験を通じて、<br />
                社会に貢献できるエンジニアを目指しています。
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-slate-200 mb-2">教育</h4>
                  <p className="text-sm text-gray-400">鹿児島情報高等学校</p>
                  <p className="text-sm text-gray-400">福岡工業大学大学院</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold text-slate-200 mb-2">興味分野</h4>
                  <p className="text-sm text-gray-400">AI・画像認識</p>
                  <p className="text-sm text-gray-400">Web開発・国際協力</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-full relative overflow-hidden backdrop-blur-sm border border-gray-600/30">
                <img 
                  src={meImage} 
                  alt="大迫汐欄のプロフィール写真"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 to-gray-300 bg-clip-text text-transparent">
            主な実績
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const CardContent = (
                <>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4`}>
                    {achievement.icon}
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{achievement.year}</div>
                  <h3 className="font-semibold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                  {achievement.url && (
                    <div className="mt-3 flex items-center text-xs text-blue-400">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      詳細を見る
                    </div>
                  )}
                </>
              );

              return achievement.url ? (
                <a
                  key={index}
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/40 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-gray-600/30 cursor-pointer group"
                >
                  {CardContent}
                </a>
              ) : (
                <div 
                  key={index}
                  className="bg-slate-800/40 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-slate-300 bg-clip-text text-transparent">
            経験・実績
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-slate-800/40 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm">{exp.period}</div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/40 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-200 to-gray-300 bg-clip-text text-transparent">
            技術スキル
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-gray-600/20"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white">{skill.name}</div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((level) => {
                      const isActive = level <= skill.level;
                      let colorClass = 'bg-gray-600/50'; // デフォルト（未達成）
                      
                      if (isActive) {
                        switch (level) {
                          case 1:
                            colorClass = 'bg-emerald-200 shadow-sm shadow-emerald-200/50';
                            break;
                          case 2:
                            colorClass = 'bg-emerald-400 shadow-sm shadow-emerald-400/50';
                            break;
                          case 3:
                            colorClass = 'bg-emerald-500 shadow-sm shadow-emerald-500/50';
                            break;
                          case 4:
                            colorClass = 'bg-emerald-600 shadow-sm shadow-emerald-600/50';
                            break;
                        }
                      }
                      
                      return (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${colorClass}`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  レベル {skill.level}/4
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-slate-300 bg-clip-text text-transparent">
            プロジェクト・研究
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800/40 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full text-xs text-white">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/40 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">メディア掲載・関連リンク</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="https://rkb.jp/contents/202402/202402260347/" 
                target="_blank"
                className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 flex items-center space-x-3 group"
              >
                <ExternalLink className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300">RKBオンライン取材</span>
              </a>
              <a 
                href="https://mainichi.jp/articles/20230621/k00/00m/100/308000c" 
                target="_blank"
                className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 flex items-center space-x-3 group"
              >
                <ExternalLink className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300">毎日新聞掲載</span>
              </a>
              <a 
                href="https://www.fit.ac.jp/news/archives/4974" 
                target="_blank"
                className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 flex items-center space-x-3 group"
              >
                <ExternalLink className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300">大阪万博出展記事</span>
              </a>
              <a 
                href="https://hacku.yahoo.co.jp/hacku2024_fukuoka/" 
                target="_blank"
                className="bg-slate-800/30 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 flex items-center space-x-3 group"
              >
                <ExternalLink className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300">HACK U 2024</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-slate-200 to-gray-300 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            お気軽にお声がけください！
          </p>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:mjm25101@bene.fit.ac.jp"
              className="flex items-center space-x-3 bg-slate-800/40 rounded-lg px-6 py-4 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-6 h-6 text-red-400" />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/shuraosako" 
              target="_blank"
              className="flex items-center space-x-3 bg-slate-800/40 rounded-lg px-6 py-4 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-6 h-6 text-gray-400" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://instagram.com/osako1213" 
              target="_blank"
              className="flex items-center space-x-3 bg-slate-800/40 rounded-lg px-6 py-4 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-6 h-6 text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Shura Osako. Made with React & Love.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;