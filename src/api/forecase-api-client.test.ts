import axios from "axios";
import { getDailyReport } from "./forecast-api-client";
import mockData from "../mock-data/report-mockdata.json";

jest.mock('axios');

test("should send a request to expected API endpoint", async () => {
  (axios as any).get.mockResolvedValue({ status: 200, data: mockData });
  
  var data = await getDailyReport(129, 44.44, 7);
  expect(data).toEqual(mockData);
});
