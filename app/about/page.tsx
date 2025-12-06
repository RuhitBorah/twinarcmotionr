"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

// ============================================
// COMPONENT: SMOOTH PARALLAX VISUAL
// ============================================
function ParallaxVisual({ src, speed = 1, className }: { src: string, speed?: number, className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
                <Image src={src} alt="Visual" fill className="object-cover" />
            </motion.div>
        </div>
    );
}

// ============================================
// SECTION: HERO (IMMERSIVE TITLE)
// ============================================
function ImmersiveHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]" />
                <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric-blue/10 blur-[150px] rounded-full"
                />
            </div>

            <motion.div style={{ y: yText, opacity }} className="relative z-10 text-center px-4 w-full">
                <p className="text-electric-blue font-conthrax font-bold tracking-[0.4em]  text-xs md:text-sm mb-6">TwinArc Motion</p>
                <h1 className="text-[12vw] leading-[0.85] font-heading font-bold text-white uppercase tracking-tighter mix-blend-exclusion">
                    THE BRIDGE
                </h1>
                <h1 className="text-[12vw] leading-[0.85] font-conthrax font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600 uppercase tracking-tighter">
                    TO GLOBAL
                </h1>

                <div className="mt-12 max-w-xl mx-auto">
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        We build the infrastructure that transforms raw regional narratives into global cinematic assets.
                    </p>
                </div>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
}

// ============================================
// SECTION: THE VISION (STICKY SCROLL)
// ============================================
function VisionSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="bg-neutral-950 relative py-32 z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <div className="sticky top-32">
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-[0.9]">
                                UNLOCKING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-500">UNTAPPED POTENTIAL</span>
                            </h2>
                            <p className="text-white/60 text-xl leading-relaxed max-w-md">
                                The Northeast is a reservoir of unexploited IP. We are the market makers who identify these high-potential narratives and engineer them for the global economy.
                            </p>
                            <div className="h-px w-24 bg-white/20 mt-12" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-32 pt-20 lg:pt-0">
                        {/* Point 1 */}
                        <div className="group">
                            <ParallaxVisual src="/vision-global.png" className="aspect-[16/9] md:aspect-[4/3] rounded-lg mb-8 grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <h3 className="text-3xl font-bold text-white mb-2">Global Standards</h3>
                            <p className="text-white/50">Elevating regional production quality to meet international distribution requirements.</p>
                        </div>

                        {/* Point 2 */}
                        <div className="group">
                            <ParallaxVisual src="/vision-pipeline.png" className="aspect-[16/9] md:aspect-[4/3] rounded-lg mb-8 grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <h3 className="text-3xl font-bold text-white mb-2">Structured Pipelines</h3>
                            <p className="text-white/50">Implementing industrial-grade production workflows to ensure scalability and consistency.</p>
                        </div>

                        {/* Point 3 */}
                        <div className="group">
                            <ParallaxVisual src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2600&auto=format&fit=crop" className="aspect-[16/9] md:aspect-[4/3] rounded-lg mb-8 grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <h3 className="text-3xl font-bold text-white mb-2">Scalable IP</h3>
                            <p className="text-white/50">Transforming local stories into franchisable intellectual property.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// SECTION: LEADERSHIP (SINGLE SPOTLIGHT)
// ============================================

// ============================================
// SECTION: FOOTER CTA
// ============================================
function FinalCTA() {
    return (
        <section className="h-[50vh] bg-electric-blue flex items-center justify-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="relative z-20 text-center">
                <h2 className="text-[8vw] font-heading font-bold text-black group-hover:text-white transition-colors duration-500 leading-none">
                    LET'S BUILD
                </h2>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="text-xl md:text-2xl font-bold text-black/60 group-hover:text-electric-blue transition-colors duration-500">Become a Partner</span>
                    <ArrowDown className="w-6 h-6 -rotate-90 text-black/60 group-hover:text-electric-blue transition-colors duration-500" />
                </div>
            </div>
        </section>
    );
}


// ============================================
// MAIN EXPORT
// ============================================
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            <Navbar />
            <ImmersiveHero />
            <VisionSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}
