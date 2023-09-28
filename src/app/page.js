"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiFileEarmark } from 'react-icons/bi';
import FileDisplay from '@/components/FilesDisplay';
import FilesData from '@/data/FileData';
import Upload from '@/components/Upload';

const Home = () => {
  return (
    <Container>
      <h3 className="text-center my-4">Files</h3>
      <p>{new Date().toLocaleTimeString()}</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Upload />
        </div>
        <div className="col-span-3">
          <Row>
            {FilesData.map((file, index) => (
              <Col key={index} md={4}>
                <FileDisplay name={file.name} icon={file.icon} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Home;
