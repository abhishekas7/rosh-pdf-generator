"use client";

// pages/index.tsx
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import StaticDocument from '../pages/components/StaticDocument';


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


const pdfContents = [
  {
    title: "What was the growth in sales during the last 5 years?",
    content: "This report analyzes the growth in sales from 2019 to 2023, highlighting significant fluctuations over the years. It also provides insights into the monthly distribution of property sales in 2022, with a focus on community-wise sales in December.",
    source: "Source : sales_data table which contains information related to the sales transactions of properties.",
    image: '/images/Block 1.png'
  },
  {
    title: "What was the monthly distribution of property sales for the year 2022?",
    content: "The sales grew significantly from 454 in 2019 to a peak of 14,523 in 2022 before dropping sharply to 292 in 2023. This indicates a rapid increase over the years followed by a substantial decline in the most recent year. The monthly property sales in 2022 showed a steady increase, with a significant spike in November (1,966) and December (3,650).",
    source: "Source : sales_data table which contains information related to the sales transactions of properties.",
    image: '/images/Block 2.png'
  },
  {
    title: "Analysis of quarterly sales changes between 2019 and 2023",
    content: "Quarterly sales data provides a clear view of the company's performance over the years. This report focuses on the fluctuations across different quarters, pinpointing specific factors that may have contributed to these changes.",
    source: "Source : quarterly_sales table for property transactions.",
    image: '/images/Block 3.png'
  },
  {
    title: "Overview of regional sales growth in 2023",
    content: "Regional analysis for 2023 reveals varied performance across different areas, with certain regions experiencing a sharper decline than others. This report breaks down sales by region and identifies key trends.",
    source: "Source : region_data, detailing area-wise sales performance.",
    image: '/images/Block 1.png'
  },


];




function Index() {
  return (
    <div className="text-center m-10">
      {/* <h1 className="text-2xl font-semibold mb-4">PDF Document Preview</h1> */}
      
      {/* Inline PDF Viewer */}


      <div className="" style={{ height: '600px' }}>
          <PDFViewer style={{ width: '100%', height: '100%' }} className="h-full w-full" showToolbar={false}>
            <StaticDocument data={pdfContents} coverPageTitle='Sales Growth and Property Sales Distribution Report' coverPageDescription='This report analyzes sales growth from 2019-2023, highlighting fluctuations and monthly property sales in 2022, including community-wise December data.'/>
          </PDFViewer>
      </div>

      Download Button
      <PDFDownloadLink document={<StaticDocument data={pdfContents} coverPageTitle='Sales Growth and Property Sales Distribution Report' coverPageDescription='This report analyzes sales growth from 2019-2023, highlighting fluctuations and monthly property sales in 2022, including community-wise December data.'/>
} fileName="static_document.pdf">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Download PDF</button>
      </PDFDownloadLink>

    </div>
  );
}

export default Index;


