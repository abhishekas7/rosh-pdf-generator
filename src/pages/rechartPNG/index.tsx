import React, { useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function App() {
  const divRef = useRef();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const convertToPNG = () => {
    const div = divRef.current;

    html2canvas(div).then((canvas) => {
      const dataURL = canvas.toDataURL('image/png');
      setImageSrc(dataURL);
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      {/* Original Content on the Left */}
      <div ref={divRef} style={{ width: '50%', padding: '20px', backgroundColor: 'lightblue', border: '1px solid #ccc' }}>
        <h2>Recharts Line Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <p>This is some additional content inside the div!</p>
      </div>

      {/* Action Button on the Right */}
      <div style={{ padding: '20px' }}>
        <button onClick={convertToPNG}>Convert to PNG</button>
      </div>

      {/* PNG Image displayed on the Right Side */}
      <div style={{ width: '50%', padding: '20px' }}>
        {imageSrc && <img src={imageSrc} alt="Converted PNG" style={{ maxWidth: '100%', border: '1px solid #ccc' }} />}
      </div>
    </div>
  );
}

export default App;
