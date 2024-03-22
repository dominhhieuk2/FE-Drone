import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RealtimeDroneComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/fetch-data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Realtime Data</h1>
      {data ? (
        <>
          <h2>Reports:</h2>
          {Object.values(data.Reports).map(report => (
            <div key={report.ReportID}>
              <h3>Report ID: {report.ReportID}</h3>
              <p>Date Created: {report.DateCreated}</p>
              <p>Route ID: {report.RouteID}</p>
            </div>
          ))}
          <h2>Routes:</h2>
          {data.Routes.map(route => (
            <div key={route.RouteID}>
              <h3>Route ID: {route.RouteID}</h3>
              <p>Date Created: {route.DateCreated}</p>
              <p>Route Name: {route.RouteName}</p>
              <h4>Checkpoints:</h4>
              <ul>
                {Object.values(data.Checkpoints).map(checkpoint => {
                  if (checkpoint.RouteID === route.RouteID) {
                    return (
                      <li key={checkpoint.CheckpointID}>
                        Checkpoint Name: {checkpoint.CheckpointName}, Rotation: {checkpoint.Rotation}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
          <h2>Recorded Data:</h2>
          {data.RecordedData.map(record => (
            <div key={record.RecordedDataID}>
              <h3>Recorded Data ID: {record.RecordedDataID}</h3>
              <p>Checkpoint ID: {record.CheckpointID}</p>
              <p>Report ID: {record.ReportID}</p>
              <p>Light Level Recorded: {record.LightLevelRecorded}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/drone" className="btn btn-danger"> Cancel </Link>
    </div>
  );
};

export default RealtimeDroneComponent;
