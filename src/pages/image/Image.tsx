import React, { useEffect } from 'react';
import "../../assets/styles/Image.css";
const angle = 20;

const lerp = (start: number, end: number, amount: number) => {
  return (1 - amount) * start + amount * end;
};

const remap = (value: number, oldMax: number, newMax: number) => {
  const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
  return Math.min(Math.max(newValue, -newMax), newMax);
};

const Image: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((e: any) => {
      e.addEventListener("mousemove", (event: any) => {
        const rect = e.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        const posX = event.pageX - centerX;
        const posY = event.pageY - centerY;
        const x = remap(posX, rect.width / 2, angle);
        const y = remap(posY, rect.height / 2, angle);
        e.dataset.rotateX = x;
        e.dataset.rotateY = -y;
      });

      e.addEventListener("mouseout", (event: any) => {
        e.dataset.rotateX = 0;
        e.dataset.rotateY = 0;
      });
    });

    const update = () => {
      cards.forEach((e: any) => {
        let currentX = parseFloat(e.style.getPropertyValue('--rotateY').slice(0, -1));
        let currentY = parseFloat(e.style.getPropertyValue('--rotateX').slice(0, -1));
        if (isNaN(currentX)) currentX = 0;
        if (isNaN(currentY)) currentY = 0;
        const x = lerp(currentX, e.dataset.rotateX, 0.05);
        const y = lerp(currentY, e.dataset.rotateY, 0.05);
        e.style.setProperty("--rotateY", x + "deg");
        e.style.setProperty("--rotateX", y + "deg");
      });
    };

    const interval = setInterval(update, 1000 / 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card border-right-behind border-bottom-behind">
      <div className="shadow"></div>
      <div className="image background"></div>
      <div className="image cutout"></div>
      <div className="content">
        <h2>Hover me!</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Image;
