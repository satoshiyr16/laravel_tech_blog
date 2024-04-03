import React, { useEffect } from 'react';
import '@scss/Animation.scss';

const WaveComponent = () => {
  useEffect(() => {
    var unit = 100,
      canvas,
      info = {},
      color;

    function init() {
      info.seconds = 0;
      info.t = 0;
      canvas = document.getElementById("waveCanvas");
      color = ['#4B4E6D', '#84DCC6', '#95A3B3', '#B9E3C6', '#F1B5CB'];

      canvas.width = document.documentElement.clientWidth;
      canvas.height = 200;
      canvas.contextCache = canvas.getContext("2d");

      update();
    }

    function update() {
      draw(canvas, color);

      info.seconds = info.seconds + .028;
      info.t = info.seconds * Math.PI;
      setTimeout(update, 35);
    }

    function draw(canvas, color) {
      var context = canvas.contextCache;
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(canvas, color[0], 0.5, 3, 0);
      drawWave(canvas, color[1], 0.8, 4, 0);
      drawWave(canvas, color[2], 0.5, 1.6, 0);
      drawWave(canvas, color[3], 0.8, 3, 100);
      drawWave(canvas, color[4], 0.5, 1.6, 250);
    }

    function drawWave(canvas, color, alpha, zoom, delay) {
      var context = canvas.contextCache;
      context.strokeStyle = color;
      context.lineWidth = 1;
      context.globalAlpha = alpha;
      context.beginPath();
      drawSine(canvas, info.t / 0.5, zoom, delay);
      context.stroke();
    }

    function drawSine(canvas, t, zoom, delay) {
      var xAxis = Math.floor(canvas.height / 2);
      var context = canvas.contextCache;
      var x = t;
      var y = Math.sin(x) / zoom;
      context.moveTo(0, unit * y + xAxis);

      for (var i = 0; i <= canvas.width + 10; i += 10) {
        x = t + (-xAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
      }
    }

    init();
  }, []);

  return <canvas id="waveCanvas"></canvas>;
};

export default WaveComponent;
