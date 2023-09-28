"use client"
import React from 'react';
import {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BiFileEarmark } from 'react-icons/bi';
import FileDisplay from '@/components/FilesDisplay';
import FilesData from '@/data/FileData';
import Upload from '@/components/Upload';
import serverpath from '@/data/serverpath';


const Home = () => {

  const [filesData, setFilesData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(`${serverpath}/files`, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      setFilesData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Container>
      <div>
      <h1 className="text-center my-4">Files</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
        <Upload fetchData={fetchData} />
        </div>
        <div className="col-span-3">
          <Row>
            {filesData.map((file, index) => (
              <Col key={index} md={4}>
                <FileDisplay name={file} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Home;
