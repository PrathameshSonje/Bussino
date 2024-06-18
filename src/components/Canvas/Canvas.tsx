'use client'

import React, { useEffect, useRef } from "react";

export const Canvas = (props: any) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.src = "/assets/Casino-roulette-Wheel-PNG.png";
    image.onload = () => {
      const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      const scaledWidth = image.width * scale;
      const scaledHeight = image.height * scale;

      let angle = 0;

      const drawRotatedImage = () => {
        const { width, height } = canvas;
        const centerX = width / 2;
        const centerY = height / 2;

        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(centerX, centerY);
        context.rotate(angle);
        context.drawImage(image, -scaledWidth / 2, -scaledHeight / 2, scaledWidth, scaledHeight);
        context.restore();

        angle += 0.01;
        requestAnimationFrame(drawRotatedImage);
      };

      drawRotatedImage(); // Start the animation
    };

    image.onerror = (err) => {
      console.error("Failed to load image", err);
    };
  }, []);

  return <canvas ref={ref} width={400} height={400} {...props} />;
};
