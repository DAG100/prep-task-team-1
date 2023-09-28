// pages/download/[name].js

const DownloadPage = ({params}) => {
  return (
    <div>
      <h1>Download Page</h1>
      <p>File file: {params.file}</p>
    </div>
  );
};

export default DownloadPage;
