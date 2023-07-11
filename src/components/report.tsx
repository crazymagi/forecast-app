import { useEffect, useState } from "react";
import { TableContainer, Container, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import forecastApiClient from "../api/forecast-api-client";
import { ForecastData } from "../types/forecast-data";

export type ReportProps = {
  latitude: number;
  longitude: number;
  days: number;
}

export const Report = ({latitude, longitude, days} : ReportProps) => {
  const [forecastData, setForecastData] = useState<ForecastData | null>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await forecastApiClient.getDailyReport(latitude, longitude, days);
      setForecastData(data);
    };
    fetchData();
  }, [latitude, longitude, days])
  
  return (
    <TableContainer component={Container}>
      <Table sx={{ minWidth: 650, maxWidth: 900 }} aria-label="forecast table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Max Temp</TableCell>
            <TableCell align="center">Min Temp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!forecastData && (<div>Loading...</div>)}
          {forecastData?.daily?.time?.map((date, index) => (
            <TableRow key={`row-${date}`}>
              <TableCell align="center" role='gridcell'>{date}</TableCell>
              <TableCell align="center" role='gridcell'>{forecastData.daily.temperature_2m_max[index]}</TableCell>
              <TableCell align="center" role='gridcell'>{forecastData.daily.temperature_2m_min[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Report;