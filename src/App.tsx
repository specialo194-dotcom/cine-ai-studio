import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Zap, 
  History, 
  Plus,
  ArrowRight,
  Play,
  Monitor,
  Cpu,
  Shield,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// --- SHARED COMPONENTS ---

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`glass rounded-2xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">VISION<span className="text-primary">FORGE</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link to="/" className="hover:text-white transition-colors">Platform</Link>
          <Link to="/" className="hover:text-white transition-colors">Models</Link>
          <Link to="/" className="hover:text-white transition-colors">Pricing</Link>
          <Link to="/" className="hover:text-white transition-colors">Showcase</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" className="text-white/70 hover:text-white">Sign In</Button>
          </Link>
          <Link to="/studio">
            <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// --- PAGES ---

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/hero-forge-bg-01ebd49d-1778171347462.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary py-1 px-4 bg-primary/5">
              Next-Gen AI Video Engine
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              FORGE REALITY <br />
              <span className="cinematic-gradient">WITH AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
              Create cinematic-grade videos from text, images, or reference footage. 
              Powered by VisionForge V2.1 architecture for industry-leading consistency and motion.
            </p>
            <div className="flex flex-col sm:row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/80 group">
                Enter the Studio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 hover:bg-white/10">
                <Play className="mr-2 w-5 h-5" />
                Watch Showreel
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Production-Grade Tools</h2>
            <p className="text-white/50">Everything you need to create the next viral masterpiece.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard>
              <Video className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Text to Video</h3>
              <p className="text-white/60 mb-6">Ultra-consistent video generation from natural language prompts with fine-grained control.</p>
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/demo-cyberpunk-city-23f4ddbc-1778171348190.webp" className="rounded-xl aspect-video object-cover" alt="T2V" />
            </GlassCard>
            <GlassCard>
              <ImageIcon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-3">Image to Motion</h3>
              <p className="text-white/60 mb-6">Breathe life into static images with character consistency and dynamic camera movements.</p>
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/demo-mystical-forest-8d1b05a7-1778171347766.webp" className="rounded-xl aspect-video object-cover" alt="I2V" />
            </GlassCard>
            <GlassCard>
              <Layers className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Video Stylization</h3>
              <p className="text-white/60 mb-6">Transform existing footage into any style. From 3D animation to cinematic noir.</p>
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/style-preset-liquid-gold-fcc99d5d-1778171347308.webp" className="rounded-xl aspect-video object-cover" alt="V2V" />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Forge</h2>
            <p className="text-white/50">Flexible plans for creators of all scales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Free", price: "0", credits: "10", features: ["Standard Quality", "Watermark", "1 Concurrent Task"] },
              { name: "Creator", price: "29", credits: "100", features: ["HD Export", "No Watermark", "3 Concurrent Tasks"], popular: true },
              { name: "Pro", price: "99", credits: "500", features: ["4K Export", "Commercial License", "10 Concurrent Tasks"] },
              { name: "Studio", price: "499", credits: "Unlimited", features: ["API Access", "Custom Fine-tuning", "Dedicated Support"] },
            ].map((plan, i) => (
              <GlassCard key={i} className={`flex flex-col ${plan.popular ? 'border-primary/50 ring-1 ring-primary/30' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-white/40">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Zap className="w-4 h-4" />
                    {plan.credits} Credits
                  </div>
                  {plan.features.map((f, j) => (
                    <div key={j} className="text-white/60 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button className={plan.popular ? 'bg-primary' : 'variant-outline'}>
                  Get Started
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary w-6 h-6" />
            <span className="font-bold">VISIONFORGE AI</span>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white">API Docs</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Discord</a>
          </div>
          <div className="text-white/40 text-sm">
            © 2024 VisionForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col p-6 hidden lg:flex">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <Sparkles className="text-primary w-8 h-8" />
          <span className="text-xl font-bold">VISIONFORGE</span>
        </Link>
        
        <nav className="space-y-2 flex-1">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-white/5">
            <Monitor className="w-5 h-5" /> Dashboard
          </Button>
          <Link to="/studio">
            <Button variant="ghost" className="w-full justify-start gap-3 text-white/60">
              <Plus className="w-5 h-5" /> New Project
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start gap-3 text-white/60">
            <History className="w-5 h-5" /> History
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-white/60">
            <ImageIcon className="w-5 h-5" /> Assets
          </Button>
        </nav>

        <div className="pt-6 border-t border-white/5">
          <div className="bg-white/5 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Credits</span>
              <span className="text-sm font-bold">42 / 100</span>
            </div>
            <Progress value={42} className="h-1.5" />
            <Button variant="link" className="p-0 h-auto text-primary text-xs mt-3">Buy more credits</Button>
          </div>
          <Button variant="ghost" className="w-full justify-start gap-3 text-white/60">
            <Settings className="w-5 h-5" /> Settings
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Creator</h1>
            <p className="text-white/50">Your AI video production hub is ready.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-white/10">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" /> Upgrade Plan
            </Button>
            <Avatar>
              <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/avatar-ai-humanoid-4fd7d058-1778171348033.webp" />
              <AvatarFallback>VF</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <GlassCard className="col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Badge className="bg-primary/20 text-primary mb-4">Live Now</Badge>
                <h2 className="text-3xl font-bold mb-4">New Model: VisionForge V2.5</h2>
                <p className="text-white/60 max-w-md mb-6">4x motion consistency and true character persistence across multiple scenes.</p>
              </div>
              <Link to="/studio">
                <Button className="w-fit">Try V2.5 Now</Button>
              </Link>
            </div>
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/dashboard-preview-d6f4dd02-1778171347654.webp" className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="New Model" />
          </GlassCard>

          <GlassCard className="flex flex-col items-center justify-center text-center p-12 border-dashed border-white/10 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <Plus className="w-8 h-8 text-white/40 group-hover:text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Create New Project</h3>
            <p className="text-sm text-white/40">Start with text, image, or video</p>
          </GlassCard>
        </div>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Renders</h2>
            <Button variant="ghost" className="text-white/40 text-sm">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Neon Samurai", date: "2h ago", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/demo-cyberpunk-city-23f4ddbc-1778171348190.webp" },
              { title: "Ethereal Forest", date: "5h ago", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/demo-mystical-forest-8d1b05a7-1778171347766.webp" },
              { title: "Liquid Gold", date: "1d ago", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/style-preset-liquid-gold-fcc99d5d-1778171347308.webp" },
              { title: "AI Portrait", date: "2d ago", url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/avatar-ai-humanoid-4fd7d058-1778171348033.webp" },
            ].map((render, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                  <img src={render.url} alt={render.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                </div>
                <h4 className="font-bold">{render.title}</h4>
                <p className="text-xs text-white/40">{render.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const StudioPage = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          toast.success("Video generated successfully!");
          return 100;
        }
        return p + 2;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      {/* Studio Header */}
      <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black/40">
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="hover:opacity-70">
            <X className="w-6 h-6" />
          </Link>
          <div className="h-4 w-[1px] bg-white/10" />
          <h1 className="font-bold flex items-center gap-2">
            <span className="text-white/40">Project /</span> Untitled Masterpiece
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-primary border-primary/20">42 Credits Left</Badge>
          <Button size="sm" variant="ghost">Share</Button>
          <Button size="sm" className="bg-primary px-6">Export</Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Controls */}
        <aside className="w-[400px] border-r border-white/5 p-6 flex flex-col gap-6 bg-black/20">
          <Tabs defaultValue="text" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full bg-white/5 mb-6">
              <TabsTrigger value="text" className="gap-2"><Sparkles className="w-4 h-4" /> Text</TabsTrigger>
              <TabsTrigger value="image" className="gap-2"><ImageIcon className="w-4 h-4" /> Image</TabsTrigger>
              <TabsTrigger value="video" className="gap-2"><Video className="w-4 h-4" /> Video</TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[calc(100vh-250px)] pr-4">
              <div className="space-y-8">
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-3 block">Prompt</label>
                  <Textarea 
                    placeholder="Describe your scene in cinematic detail..." 
                    className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary/50"
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 cursor-pointer text-[10px]">Cinematic Lighting</Badge>
                    <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 cursor-pointer text-[10px]">4k Unreal Engine 5</Badge>
                    <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 cursor-pointer text-[10px]">Cyberpunk Aesthetic</Badge>
                  </div>
                </div>

                {activeTab === 'image' && (
                  <div className="p-8 border-2 border-dashed border-white/10 rounded-xl bg-white/5 text-center group hover:border-primary/50 transition-colors">
                    <ImageIcon className="w-12 h-12 text-white/20 mx-auto mb-4 group-hover:text-primary transition-colors" />
                    <p className="text-sm font-bold">Upload Source Image</p>
                    <p className="text-xs text-white/40 mt-1">PNG, JPG up to 20MB</p>
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-3 block">Motion Intensity</label>
                  <Slider defaultValue={[5]} max={10} step={1} />
                  <div className="flex justify-between text-[10px] text-white/40 mt-2">
                    <span>Subtle</span>
                    <span>Extreme</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase mb-3 block">Resolution</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm outline-none">
                      <option>720p (Fast)</option>
                      <option>1080p (Pro)</option>
                      <option>4K (Studio)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase mb-3 block">Aspect Ratio</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm outline-none">
                      <option>16:9 Wide</option>
                      <option>9:16 Vertical</option>
                      <option>1:1 Square</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-3 block">Camera Control</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Dolly Zoom', 'Pan Right', 'Drone', 'Handheld', 'Tilt Up', 'Orbit'].map(cam => (
                      <Button key={cam} variant="outline" className="text-[10px] h-auto py-2 bg-white/5 border-white/10">
                        {cam}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-3 block">Negative Prompt</label>
                  <Input placeholder="What to exclude..." className="bg-white/5 border-white/10 text-sm" />
                </div>
              </div>
            </ScrollArea>
          </Tabs>

          <Button 
            className="w-full h-14 text-lg bg-primary hover:bg-primary/80 font-bold mt-auto"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating... {progress}%
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Forge Video (2 Credits)
              </div>
            )}
          </Button>
        </aside>

        {/* Center - Preview */}
        <main className="flex-1 bg-black p-12 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.15)] relative group">
            {isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Forging Your Vision</h3>
                  <p className="text-white/40 text-sm italic">"Applying cinematic LUTs and temporal smoothing..."</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0">
                 <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4a68ffa-0f18-405f-bba1-bf689195cdaa/hero-forge-bg-01ebd49d-1778171347462.webp" className="w-full h-full object-cover opacity-20" alt="Preview" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-pointer group-hover:scale-110">
                    <Play className="w-12 h-12 text-white fill-white" />
                   </div>
                 </div>
              </div>
            )}
            
            {/* Playback Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white/60 text-xs">
              <span className="font-mono">00:00 / 00:04</span>
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-0" />
              </div>
              <Badge variant="secondary" className="bg-white/10 text-[10px]">1080p | 30 FPS</Badge>
            </div>
          </div>

          {/* Timeline Placeholder */}
          <div className="w-full max-w-4xl mt-12 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white/40 uppercase">Timeline</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Plus className="w-4 h-4" /></Button>
              </div>
            </div>
            <div className="timeline-track">
              <div className="timeline-thumb" style={{ left: '10%' }}>
                <div className="absolute top-1 left-2 text-[8px] font-bold text-white/80 uppercase truncate">Scene 1</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- APP ---

function App() {
  return (
    <Router>
      <Toaster position="top-center" richColors theme="dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/studio" element={<StudioPage />} />
      </Routes>
    </Router>
  );
}

export default App;