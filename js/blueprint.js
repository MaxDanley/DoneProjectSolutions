(function () {
  const canvas = document.getElementById("blueprint-canvas");
  if (!canvas) return;

  const hero = canvas.parentElement;
  const A = (o) => "rgba(78,125,140," + o + ")";

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    draw();
  }

  function draw() {
    const W = canvas.width;
    const H = canvas.height;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, W, H);

    const gs = 22;
    const major = 4;
    for (let x = 0; x <= W; x += gs) {
      const m = Math.round(x / gs) % major === 0;
      const f = Math.max(0, Math.min(1, (x / W - 0.3) / 0.22));
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.strokeStyle = A((m ? 0.11 : 0.05) * f);
      ctx.lineWidth = m ? 0.7 : 0.35;
      ctx.stroke();
    }

    for (let y = 0; y <= H; y += gs) {
      const m = Math.round(y / gs) % major === 0;
      const fx = 0.38;
      ctx.beginPath();
      ctx.moveTo(W * fx, y);
      ctx.lineTo(W, y);
      ctx.strokeStyle = A(m ? 0.09 : 0.04);
      ctx.lineWidth = m ? 0.6 : 0.3;
      ctx.stroke();
    }

    const ox = W * 0.44;
    const oy = H * 0.1;
    const pw = W * 0.51;
    const ph = H * 0.76;
    const wt = 11;

    ctx.fillStyle = A(0.04);
    ctx.fillRect(ox, oy, pw, ph);

    ctx.strokeStyle = A(0.24);
    ctx.lineWidth = 1.2;
    ctx.strokeRect(ox, oy, pw, ph);

    ctx.strokeStyle = A(0.14);
    ctx.lineWidth = 0.7;
    ctx.strokeRect(ox + wt, oy + wt, pw - wt * 2, ph - wt * 2);

    ctx.strokeStyle = A(0.18);
    ctx.lineWidth = 0.9;
    const segs = [
      [ox + wt, oy + ph * 0.36, ox + pw - wt, oy + ph * 0.36],
      [ox + wt, oy + ph * 0.62, ox + pw - wt, oy + ph * 0.62],
      [ox + pw * 0.55, oy + ph * 0.62, ox + pw * 0.55, oy + ph - wt],
      [ox + pw * 0.4, oy + wt, ox + pw * 0.4, oy + ph * 0.36],
      [ox + pw * 0.4, oy + ph * 0.36, ox + pw * 0.4, oy + ph * 0.62],
      [ox + pw * 0.68, oy + wt, ox + pw * 0.68, oy + ph * 0.36],
    ];

    segs.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    function door(cx, cy, r, a0, a1, ccw) {
      ctx.strokeStyle = A(0.2);
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, r, a0, a1, ccw);
      ctx.stroke();
    }

    door(ox + pw * 0.4, oy + ph * 0.36 - 1, 22, Math.PI * 0.5, Math.PI, false);
    door(ox + pw * 0.4, oy + ph * 0.62 - 1, 22, Math.PI * 0.5, Math.PI, false);
    door(ox + pw - wt - 1, oy + ph * 0.18, 20, Math.PI, Math.PI * 1.5, false);
    door(ox + pw * 0.55 - 1, oy + ph * 0.62, 18, 0, Math.PI * 0.5, false);

    ctx.strokeStyle = A(0.28);
    ctx.lineWidth = 2;
    function wdw(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    wdw(ox + pw * 0.18, oy, ox + pw * 0.34, oy);
    wdw(ox + pw * 0.52, oy, ox + pw * 0.72, oy);
    wdw(ox + pw, oy + ph * 0.18, ox + pw, oy + ph * 0.34);
    wdw(ox + pw, oy + ph * 0.52, ox + pw, oy + ph * 0.68);
    wdw(ox + pw * 0.15, oy + ph, ox + pw * 0.38, oy + ph);

    ctx.strokeStyle = A(0.13);
    ctx.lineWidth = 0.6;
    for (let s = 0; s < 7; s++) {
      ctx.strokeRect(ox + wt + 6 + s * 9, oy + ph * 0.68 + 8 + s * 6, pw * 0.2 - s * 9, 5);
    }

    [
      [ox, oy], [ox + pw, oy], [ox, oy + ph], [ox + pw, oy + ph],
      [ox + pw * 0.4, oy], [ox + pw * 0.68, oy], [ox + pw * 0.4, oy + ph * 0.36], [ox + pw * 0.68, oy + ph * 0.36],
    ].forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = A(0.18);
      ctx.fill();
      ctx.strokeStyle = A(0.3);
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });

    ctx.setLineDash([4, 6]);
    ctx.lineWidth = 0.6;
    ctx.font = "8px DM Sans, sans-serif";

    function dim(x1, y1, x2, y2, label, lx, ly, angle) {
      ctx.strokeStyle = A(0.15);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      const ang = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
      const tk = 6;
      [[x1, y1], [x2, y2]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.moveTo(px + Math.cos(ang) * tk, py + Math.sin(ang) * tk);
        ctx.lineTo(px - Math.cos(ang) * tk, py - Math.sin(ang) * tk);
        ctx.stroke();
      });
      ctx.setLineDash([]);
      ctx.fillStyle = A(0.28);
      ctx.save();
      if (angle) {
        ctx.translate(lx, ly);
        ctx.rotate(angle);
        ctx.fillText(label, -ctx.measureText(label).width / 2, 0);
      } else {
        ctx.fillText(label, lx, ly);
      }
      ctx.restore();
      ctx.setLineDash([4, 6]);
    }

    dim(ox, oy - 28, ox + pw, oy - 28, "PLAN WIDTH", ox + pw * 0.35, oy - 33, 0);
    dim(ox - 30, oy, ox - 30, oy + ph, "PLAN HEIGHT", ox - 12, oy + ph * 0.5, -Math.PI / 2);
    dim(ox, oy + ph * 0.36 + 16, ox + pw * 0.4, oy + ph * 0.36 + 16, "ZONE A", ox + pw * 0.15, oy + ph * 0.36 + 27, 0);
    ctx.setLineDash([]);
  }

  window.addEventListener("resize", resize);
  resize();
})();
