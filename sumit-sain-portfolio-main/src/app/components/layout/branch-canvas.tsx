"use client";
import React, { useEffect, useRef, useState } from "react";

const BranchCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        let lastWidth = window.innerWidth;
        let lastHeight = typeof document !== "undefined" 
            ? (document.documentElement.scrollHeight || document.body.scrollHeight || window.innerHeight)
            : window.innerHeight;

        setSize({ width: lastWidth, height: lastHeight });

        const handleResize = () => {
            const w = window.innerWidth;
            const h = document.documentElement.scrollHeight || document.body.scrollHeight || window.innerHeight;
            
            // Re-calculate size if viewport changes significantly
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
        
        // Original subtle opacity and line thickness
        const opacity = width < 768 ? 0.015 : 0.05;
        ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`;
        ctx.lineWidth = 1;

        let queue: (() => void)[] = [];
        let currentBatch: (() => void)[] = [];
        let animationFrameId: number;

        const r = Math.PI / 12;
        const l = 65;  // depth limit for long branches (was 35)
        const d = 8.5; // segment length per step (was 5.5) for much longer growth

        const drawSegment = (startX: number, startY: number, angle: number, depth = 0) => {
            const length = Math.random() * d;
            const nextDepth = depth + 1;
            
            const endX = startX + length * Math.cos(angle);
            const endY = startY + length * Math.sin(angle);

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            const nextAngleRight = angle + Math.random() * r;
            const nextAngleLeft = angle - Math.random() * r;

            // Stop drawing if grows too far offscreen
            if (endX < -150 || endX > width + 150 || endY < -150 || endY > height + 150) return;

            // Independent depth check allows branches to grow fully instead of dying out early
            const branchChance = nextDepth <= l ? 0.78 : 0.4;
            if (nextDepth < l) {
                if (Math.random() < branchChance) {
                    queue.push(() => drawSegment(endX, endY, nextAngleRight, nextDepth));
                }
                if (Math.random() < branchChance) {
                    queue.push(() => drawSegment(endX, endY, nextAngleLeft, nextDepth));
                }
            }
        };

        let lastTime = performance.now();
        const frameInterval = 1000 / 60; // Throttled at 60 FPS

        const animate = () => {
            if (performance.now() - lastTime < frameInterval) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }
            
            currentBatch = queue;
            queue = [];
            lastTime = performance.now();

            if (currentBatch.length > 0) {
                currentBatch.forEach((drawCall) => {
                    // process immediately to draw quickly
                    if (Math.random() < 0.20) {
                        queue.push(drawCall);
                    } else {
                        drawCall();
                    }
                });
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        const init = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            isDark = getIsDark();
            ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`;
            ctx.clearRect(0, 0, width, height);

            queue = [];
            const spacing = width < 768 ? 280 : 180; // Denser vertical spacing for maximum coverage

            // Seed branching roots down the left and right gutters of the website
            for (let y = 0; y < height; y += spacing) {
                // Left side growing down-rightward
                const angleLeft = Math.PI / 4 + (Math.random() - 0.5) * (Math.PI / 6);
                queue.push(() => drawSegment(0, y, angleLeft));

                // Right side growing down-leftward
                const angleRight = (3 * Math.PI) / 4 + (Math.random() - 0.5) * (Math.PI / 6);
                queue.push(() => drawSegment(width, y, angleRight));
            }

            animate();
        };

        init();

        const observer = new MutationObserver(() => {
            init();
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            observer.disconnect();
        };
    }, [size]);

    return (
        <div className="absolute inset-x-0 top-0 pointer-events-none z-[-1] overflow-hidden" style={{ height: size.height }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default BranchCanvas;
