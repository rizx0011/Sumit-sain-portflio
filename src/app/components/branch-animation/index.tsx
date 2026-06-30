"use client";
import React, { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Samir Sain's exact production fractal branch canvas drawing engine
// Whisper-thin, delicate detailed fractal branches that grow along the page gutters.
// ─────────────────────────────────────────────────────────────────────────────

const r = Math.PI / 12;
const { random: o } = Math;
const l = 30;
const d = 4;

export default function BranchAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const animRef = useRef<number>(0);

    useEffect(() => {
        let lastWidth = window.innerWidth;
        let lastHeight = typeof document !== "undefined"
            ? (document.documentElement.scrollHeight || document.body.scrollHeight || window.innerHeight)
            : window.innerHeight;

        setSize({ width: lastWidth, height: lastHeight });

        const handleResize = () => {
            const w = window.innerWidth;
            const h = document.documentElement.scrollHeight || document.body.scrollHeight || window.innerHeight;
            
            if (Math.abs(w - lastWidth) > 50 || Math.abs(h - lastHeight) > 150) {
                lastWidth = w;
                lastHeight = h;
                setSize({ width: w, height: h });
            }
        };

        window.addEventListener("resize", handleResize);

        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });
        if (document.body) {
            resizeObserver.observe(document.body);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || size.width === 0 || size.height === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = size.width;
        const height = size.height;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        const getIsDark = () => document.documentElement.classList.contains("dark");
        let isDark = getIsDark();

        const opacityVal = width < 768 ? 0.015 : 0.05;
        ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacityVal})` : `rgba(0, 0, 0, ${opacityVal})`;
        ctx.lineWidth = 1;

        let queue: (() => void)[] = [];
        let currentBatch: (() => void)[] = [];

        const drawSegment = (startX: number, startY: number, angle: number, depthRef = { value: 0 }) => {
            const segmentLen = o() * d;
            depthRef.value += 1;

            const [endX, endY] = getNextPoint(startX, startY, segmentLen, angle);

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            const angleRight = angle + o() * r;
            const angleLeft = angle - o() * r;

            if (endX < -100 || endX > width + 100 || endY < -100 || endY > height + 100) return;

            const branchChance = depthRef.value <= l ? 0.8 : 0.5;

            if (o() < branchChance) {
                queue.push(() => drawSegment(endX, endY, angleRight, depthRef));
            }
            if (o() < branchChance) {
                queue.push(() => drawSegment(endX, endY, angleLeft, depthRef));
            }
        };

        const getNextPoint = (startX = 0, startY = 0, length = 0, angle = 0) => {
            const dx = length * Math.cos(angle);
            const dy = length * Math.sin(angle);
            return [startX + dx, startY + dy];
        };

        let lastFrameTime = performance.now();
        const frameInterval = 1000 / 30; // 30 FPS throttle

        const animate = () => {
            if (performance.now() - lastFrameTime < frameInterval) {
                animRef.current = requestAnimationFrame(animate);
                return;
            }

            currentBatch = queue;
            queue = [];
            lastFrameTime = performance.now();

            if (currentBatch.length) {
                currentBatch.forEach((drawCall) => {
                    if (o() < 0.5) {
                        queue.push(drawCall);
                    } else {
                        drawCall();
                    }
                });
                animRef.current = requestAnimationFrame(animate);
            }
        };

        const init = () => {
            if (animRef.current) {
                cancelAnimationFrame(animRef.current);
            }
            isDark = getIsDark();
            ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacityVal})` : `rgba(0, 0, 0, ${opacityVal})`;
            ctx.clearRect(0, 0, width, height);

            queue = [];

            // Seed branching roots down the left and right gutters of the full page height
            const spacing = width < 768 ? 320 : 240;
            for (let y = 100; y < height - 100; y += spacing) {
                const offsetY = y + (o() - 0.5) * 60;

                // Left side growing rightward
                const angleLeft = (o() - 0.5) * (Math.PI / 18);
                queue.push(() => drawSegment(-4, offsetY, angleLeft));

                // Right side growing leftward
                const angleRight = Math.PI + (o() - 0.5) * (Math.PI / 18);
                queue.push(() => drawSegment(width + 4, offsetY, angleRight));
            }

            animate();
        };

        init();

        const observer = new MutationObserver(() => {
            init();
        });
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ["class"] 
        });

        return () => {
            if (animRef.current) {
                cancelAnimationFrame(animRef.current);
            }
            observer.disconnect();
        };
    }, [size]);

    return (
        <div 
            className="absolute inset-x-0 top-0 pointer-events-none z-[-1] overflow-hidden" 
            style={{ height: size.height }}
        >
            <canvas ref={canvasRef} />
        </div>
    );
}
