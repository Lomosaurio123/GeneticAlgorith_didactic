import React from "react";
import Plot from "react-plotly.js";

function ackley(x, y) {
  const a = 20;
  const b = 0.2;
  const c = 2 * Math.PI;
  
  const term1 = -a * Math.exp(-b * Math.sqrt((x**2 + y**2) / 2));
  const term2 = -Math.exp((Math.cos(c * x) + Math.cos(c * y)) / 2);
  
  return term1 + term2 + a + Math.exp(1);
}

function rosenbrock(x, y) {
  return (1 - x) ** 2 + 100 * (y - x ** 2) ** 2;
}

function salomon(x, y) {
  const squaredSum = x ** 2 + y ** 2;
  const sqrtSquaredSum = Math.sqrt(squaredSum);
  const term1 = -Math.cos(2 * Math.PI * sqrtSquaredSum);
  const term2 = 0.1 * sqrtSquaredSum;
  
  return term1 + term2 + 0.1;
}

function weierstrass(x, y) {
  const a = 0.5;
  const b = 7;
  const kMax = 100;
  
  let sum = 0;
  for (let k = 0; k <= kMax; k++) {
    sum += Math.pow(a, k) * Math.cos(Math.pow(b, k) * Math.PI * x) * Math.cos(Math.pow(b, k) * Math.PI * y);
  }
  
  return sum;
}

class Graphs extends React.Component {
  render() {
    const { functionName } = this.props;
    
    const x = [...Array(100).keys()].map(x => (x / 10) - 5);
    const y = [...Array(100).keys()].map(y => (y / 10) - 5);
    let z;

    if (functionName === "Ackley") {
      z = x.map(xi => y.map(yi => ackley(xi, yi)));
    } else if (functionName === "Rosenbrock") {
      z = x.map(xi => y.map(yi => rosenbrock(xi, yi)));
    } else if (functionName === "Salomon") {
      z = x.map(xi => y.map(yi => salomon(xi, yi)));
    } else if (functionName === "Weierstrass") {
      z = x.map(xi => y.map(yi => weierstrass(xi, yi)));
    } else {
      // Default to Ackley if no valid function name is provided
      z = x.map(xi => y.map(yi => ackley(xi, yi)));
    }

    return (
      <Plot
        data={[
          {
            type: "surface",
            z: z,
            colorscale: "Viridis"
          }
        ]}
        layout={{
          width: 800,
          height: 600,
          margin: {
            l: 50,
            r: 50,
            b: 80,
            t: 90,
            pad: 4
          },
          title: `${functionName} Function`,
          scene: {
            xaxis: {
              title: "X",
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            yaxis: {
              title: "Y",
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            zaxis: {
              title: `${functionName}(x, y)`,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            }
          }
        }}
      />
    );
  }
}

export default Graphs;


