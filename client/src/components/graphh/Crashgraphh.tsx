import React, { useEffect } from "react";
import * as PIXI from "pixi.js";

const CrashGame = () => {
  const stoppingMultiplier = 1 + Math.random() * 1;
  let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x000000,
  });

  // Create a container to hold everything
  let container = new PIXI.Container();
  app.stage.addChild(container);

  // Create a Graphics object to draw the line
  let line = new PIXI.Graphics();
  container.addChild(line);

  // Rest of your existing code goes here...
  // Create an array to hold the data
  let multiplier = 1.0;
  let speed = 0.0018; // Speed of multiplier increase
  // Create axes
  let xAxis = new PIXI.Graphics();
  let yAxis = new PIXI.Graphics();
  container.addChild(xAxis);
  container.addChild(yAxis);
  // Create labels for the axes
  let xAxisLabel = new PIXI.Text("Time: 0s", { fontSize: 20, fill: 0xffffff });
  xAxisLabel.position.set(app.screen.width - 100, app.screen.height - 30);
  container.addChild(xAxisLabel);
  let yAxisLabel = new PIXI.Text("Multiplier: 1x", {
    fontSize: 20,
    fill: 0xffffff,
  });
  yAxisLabel.position.set(10, 10);
  container.addChild(yAxisLabel);
  // Time counter for X axis label
  let counter = 0;
  // Variables for line start and end points
  let startPoint = { x: 50, y: app.screen.height - 50 };
  let endPoint = { x: startPoint.x, y: startPoint.y }; // Initialize endPoint at the same position as startPoint
  // Sample random data for user names
  let users = [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "shiva",
    "testuser",
  ];
  let cashOutGraphics: PIXI.Text[] = [];
  let cashOutSpeed = 3;
  let gravity = 0.1;
  // Hold the x and y scale labels
  let xScaleLabels = [];
  let yScaleLabels = [];
  // Number of segments for gradient
  let gradientSegments = 100;
  let color1 = [255, 255, 255];
  let color2 = [0, 255, 0];
  // Draw gradient line function

  function drawGradientLine() {
    // Clear the Graphics object
    line.clear();

    // Number of segments for gradient
    let gradientSegments = 100;

    // Define the control point for the curve
    let controlPoint = { x: (startPoint.x + endPoint.x) / 2, y: startPoint.y };

    // Determine the interpolation method based on the multiplier
    let useQuadraticCurve = multiplier > 2.24; //Make arc on this point before this it was straight line

    // Draw gradient curve using multiple line segments
    for (let i = 0; i <= gradientSegments; i++) {
      let t = i / gradientSegments;

      // Interpolate color
      let r = Math.round(color1[0] * (1 - t) + color2[0] * t);
      let g = Math.round(color1[1] * (1 - t) + color2[1] * t);
      let b = Math.round(color1[2] * (1 - t) + color2[2] * t);
      let color = (r << 16) + (g << 8) + b;

      // Interpolate position along the line using linear or quadratic interpolation
      let x, y, nx, ny;

      if (!useQuadraticCurve) {
        x = (1 - t) * startPoint.x + t * endPoint.x;
        y = (1 - t) * startPoint.y + t * endPoint.y;
        nx =
          (1 - (t + 1 / gradientSegments)) * startPoint.x +
          (t + 1 / gradientSegments) * endPoint.x;
        ny =
          (1 - (t + 1 / gradientSegments)) * startPoint.y +
          (t + 1 / gradientSegments) * endPoint.y;
      } else {
        // Interpolate position along the curve using quadratic bezier curve formula
        x =
          (1 - t) * (1 - t) * startPoint.x +
          2 * (1 - t) * t * controlPoint.x +
          t * t * endPoint.x;
        y =
          (1 - t) * (1 - t) * startPoint.y +
          2 * (1 - t) * t * controlPoint.y +
          t * t * endPoint.y;
        nx =
          (1 - (t + 1 / gradientSegments)) *
            (1 - (t + 1 / gradientSegments)) *
            startPoint.x +
          2 *
            (1 - (t + 1 / gradientSegments)) *
            (t + 1 / gradientSegments) *
            controlPoint.x +
          (t + 1 / gradientSegments) * (t + 1 / gradientSegments) * endPoint.x;
        ny =
          (1 - (t + 1 / gradientSegments)) *
            (1 - (t + 1 / gradientSegments)) *
            startPoint.y +
          2 *
            (1 - (t + 1 / gradientSegments)) *
            (t + 1 / gradientSegments) *
            controlPoint.y +
          (t + 1 / gradientSegments) * (t + 1 / gradientSegments) * endPoint.y;
      }

      // Draw small line segment
      line.lineStyle(8, color, 1);
      line.moveTo(x, y);
      line.lineTo(nx, ny);
    }
  }

  // Add a ticker to the app
  app.ticker.add((delta) => {
    // Update endPoint position based on multiplier
    endPoint.x =
      startPoint.x + (app.screen.width - startPoint.x) * (multiplier - 1);
    endPoint.y = startPoint.y - (startPoint.y - 50) * (multiplier - 1);
    // Ensure the endPoint stays within the screen boundaries
    endPoint.x = Math.min(endPoint.x, app.screen.width - 50);
    endPoint.y = Math.max(endPoint.y, 50);
    // Draw axes
    xAxis.lineStyle(2, 0xffffff, 1);
    yAxis.lineStyle(2, 0xffffff, 1);
    xAxis.moveTo(50, app.screen.height - 50);
    xAxis.lineTo(app.screen.width - 50, app.screen.height - 50);
    yAxis.moveTo(50, app.screen.height - 50);
    yAxis.lineTo(50, 50);
    // Update labels
    yAxisLabel.text = "Multiplier: " + multiplier.toFixed(2) + "x";
    xAxisLabel.text = "Time: " + Math.floor(counter) + "s";
    // Draw scale on the axes
    xAxis.lineStyle(1, 0xffffff, 0.5);
    yAxis.lineStyle(1, 0xffffff, 0.5);
    for (let i = 1; i <= 10; i++) {
      xAxis.moveTo(
        50 + (i * (app.screen.width - 100)) / 10,
        app.screen.height - 45
      );
      yAxis.moveTo(
        45,
        app.screen.height - 50 - (i * (app.screen.height - 100)) / 10
      );
      // Create labels for scale
      if (xScaleLabels.length < i) {
        let xScaleLabel = new PIXI.Text(i * 1 + "s", {
          fontSize: 14,
          fill: 0xffffff,
        });
        xScaleLabel.position.set(
          50 + (i * (app.screen.width - 100)) / 10,
          app.screen.height - 40
        );
        xScaleLabel.pivot.set(xScaleLabel.width / 2, xScaleLabel.height / 2);
        xScaleLabels.push(xScaleLabel);
        container.addChild(xScaleLabel);
      }
      if (yScaleLabels.length < i) {
        let yScaleLabel = new PIXI.Text(i * 0.1 + 1 + "x", {
          fontSize: 14,
          fill: 0xffffff,
        });
        yScaleLabel.position.set(
          35,
          app.screen.height - 50 - (i * (app.screen.height - 100)) / 10
        );
        yScaleLabel.pivot.set(yScaleLabel.width / 2, yScaleLabel.height / 2);
        yScaleLabels.push(yScaleLabel);
        container.addChild(yScaleLabel);
      }
    }
    // Draw the gradient line
    drawGradientLine();
    // Increment multiplier
    multiplier += speed * delta;
    // Increase time counter for x axis label
    counter += delta / 60;

    // Cash out mechanism
    if (Math.random() < 0.05 && users.length > 0) {
      let userIndex = Math.floor(Math.random() * users.length);
      let cashOutGraphic = new PIXI.Text(
        users[userIndex] + " cashed out at " + multiplier.toFixed(2) + "x",
        { fontSize: 16, fill: 0x0000ff }
      );
      cashOutGraphic.position.set(endPoint.x, endPoint.y);
      cashOutGraphic.pivot.set(
        cashOutGraphic.width / 2,
        cashOutGraphic.height / 2
      );
    //    cashOutGraphic.speed = cashOutSpeed;
    //    cashOutGraphic.gravity = gravity;
      cashOutGraphics.push(cashOutGraphic);
      users.splice(userIndex, 1);
      container.addChild(cashOutGraphic);
    }
    // Move cash out labels
    cashOutGraphics.forEach((cashOutGraphic, index) => {
    //    cashOutGraphic.position.y += cashOutGraphic.speed;
    //    cashOutGraphic.speed += cashOutGraphic.gravity;
      cashOutGraphic.alpha -= 0.01;
      if (cashOutGraphic.alpha <= 0) {
        container.removeChild(cashOutGraphic);
        cashOutGraphics.splice(index, 1);
      }
    });
    // Reset game if crashed
    let graphRunning = true;

    const toggleGraphRunning = () => {
      graphRunning = !graphRunning;
      if (graphRunning) {
        app.ticker.start(); // Start graph rendering
      } else {
        app.ticker.stop(); // Stop graph rendering
      }
    };

    const restartGame = () => {
      // Reset game state
      multiplier = 1.0;
      users = ["User1", "User2", "User3", "User4", "User5"];
      cashOutGraphics.forEach((cashOutGraphic) =>
        container.removeChild(cashOutGraphic)
      );
      cashOutGraphics = [];
      counter = 0;
      endPoint = { x: startPoint.x, y: startPoint.y };

      // Restart game loop after 5 seconds
      setTimeout(() => {
        app.ticker.start();
      }, 5000);
    };

    // Define your functions like drawGradientLine, toggleGraphRunning, and restartGame here...

    // Add the ticker to the app and start it
    app.ticker.add((delta) => {
      // ... (your existing code)

      if (multiplier >= stoppingMultiplier) {
        // Stop the ticker
        app.ticker.stop();

        // Call the restartGame function
        restartGame();
      }
    });

    // Start the initial game loop
    app.ticker.start();
    // Append the app's view to the document
    // document.body.appendChild("testId");

    // Clean up PIXI.js when the component unmounts
    return () => {
      app.destroy();
    };
  }, []);

  return (
    <>
      <p className="">working</p>
      <canvas
        height="200px"
        width="200px"
        style={{ border: "1px solid #000" }}
      ></canvas>
    </>
  );
};

export default CrashGame;
