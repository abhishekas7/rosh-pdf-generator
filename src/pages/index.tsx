"use client";

// pages/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import StaticDocument from '../pages/components/StaticDocument';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import html2canvas from 'html2canvas';


// Dynamically import the PDF components for client-side only
const PDFDownloadLink = dynamic(() =>
  import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);









const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const charts = [
  {
    title: 'Recharts Line Chart',
    content:'Content for Recharts Line Chart',
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: 'Recharts Bar Chart',
    content:'Content for Recharts Bar Chart',
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: 'Recharts Area Chart',
    content:'Content for Recharts Area Chart',
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
];

interface PdfStruct {
  title: number; 
  content: string; 
  source: string; 
  image: string; 
}

function Index() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [pdfContents, setPdfContents] = useState<PdfStruct[]>([]);


  const divRef = useRef<HTMLDivElement>(null);

  const convertToPNG = async () => {
    const chartContainers = document.querySelectorAll('.chart-container');
    
    const tempArray: PdfStruct[] = [];
  
    for (let index = 0; index < chartContainers.length; index++) {
      const container = chartContainers[index] as HTMLElement;
      const title = container.querySelector('.chart-title')?.textContent ?? 'No Title';
      const content = container.querySelector('.chart-content')?.textContent ?? 'No Content';
      const imageElement = container.querySelector('.chart-image') as HTMLElement;
  
      if (imageElement) {
        try {
          const canvas = await html2canvas(imageElement);
  
          const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob(resolve, 'image/png');
          });
  
          if (blob) {
            const file = new File([blob], `chart-${index + 1}.png`, { type: 'image/png' });
            
            console.log(`Generated file for container ${index + 1}:`, file);
  
            tempArray.push({
              title: title, 
              content: content, 
              source: file.name, 
              image: URL.createObjectURL(file) 
            });
          } else {
            console.error(`Failed to convert canvas to Blob for container ${index + 1}`);
          }
        } catch (error) {
          console.error(`Error converting to PNG for container ${index + 1}:`, error);
        }
      } else {
        console.log(`No image element found in container ${index + 1}`);
      }
    }
  
    setPdfContents(tempArray);
  };
  
  
  


  return (
    <div className="text-left m-10">
      <div className='grid grid-cols-2 gap-4"'>
        <div ref={divRef} className='rosh-charts' style={{ width: '100%', padding: '20px', backgroundColor: '', border: '1px solid #ccc' }}>

          <div className="grid grid-rows-3 gap-4">
            {charts.map((chart, index) => (
              <div key={index} className="chart-container">
                <h1 className='text-2xl font-bold chart-title'>{chart.title}</h1>
                <p className='chart-content'>{chart.content}</p>
                <div className='chart-image'>
                {chart.component}
              </div>
              </div>
            ))}
          </div>
        </div>
        <div>
        {pdfContents.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h2>{`Title ${item.title}`}</h2>
            <p>{`Content: ${item.content}`}</p>
            <p>{`Source: ${item.source}`}</p>
            <img src={item.image} alt={`PDF ${item.title}`} style={{ width: '100px', height: 'auto' }} />
          </div>
        ))}
      </div>
        <div>

        </div>

      </div>

      {/* Inline PDF Viewer */}


      {/* <div className="" style={{ height: '600px' }}>
          <PDFViewer style={{ width: '100%', height: '100%' }} className="h-full w-full" showToolbar={false}>
            <StaticDocument data={pdfContents} coverPageTitle='Sales Growth and Property Sales Distribution Report' coverPageDescription='This report analyzes sales growth from 2019-2023, highlighting fluctuations and monthly property sales in 2022, including community-wise December data.'/>
          </PDFViewer>
      </div> */}
      <div style={{ padding: '20px' }} className=' bg-slate-800 text-gray-100 w-[200px] mt-5'>
        <button onClick={convertToPNG}>Save Image</button>
      </div>

      <PDFDownloadLink document={<StaticDocument data={pdfContents} coverPageTitle='Sales Growth and Property Sales Distribution Report' coverPageDescription='This report analyzes sales growth from 2019-2023, highlighting fluctuations and monthly property sales in 2022, including community-wise December data.' />
      } fileName="static_document.pdf">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Download PDF</button>
      </PDFDownloadLink>

    </div>
  );
}

export default Index;


