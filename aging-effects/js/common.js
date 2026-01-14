// 绘制标准电子印章（无老化）
function drawFreshSeal(ctx, cx, cy, radius) {
  const innerRadius = radius * 0.55;
  
  // 外环
  ctx.strokeStyle = '#e60000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  // 内环
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
  ctx.stroke();

  // 公司名称（弧形文字简化为水平居中）
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `bold ${radius * 0.16}px "FangSong", "STFangsong", serif`;
  ctx.fillStyle = '#e60000';
  ctx.fillText('某某科技有限公司', cx, cy - radius * 0.15);

  // 五角星
  drawStar(ctx, cx, cy + radius * 0.2, radius * 0.12, '#e60000');
}

// 绘制五角星
function drawStar(ctx, cx, cy, r, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 + i * Math.PI * 2 / 5;
    const x = cx + Math.cos(angle) * r;
    const y = cy - Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
    const innerAngle = angle + Math.PI / 5;
    const ix = cx + Math.cos(innerAngle) * r * 0.4;
    const iy = cy - Math.sin(innerAngle) * r * 0.4;
    ctx.lineTo(ix, iy);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}