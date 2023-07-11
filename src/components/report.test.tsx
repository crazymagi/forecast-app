import { render, screen, waitFor, within } from '@testing-library/react';
import axios from "axios";
import Report from './report';
import mockData from "../mock-data/report-mockdata.json";
import { act } from 'react-dom/test-utils';

jest.mock('axios');

beforeEach(() => {
  (axios as any).get.mockResolvedValue({ status: 200, data: mockData });
})

test('renders matches snapshot', () => {
  const {asFragment} = render(<Report latitude={44.44} longitude={55.55} days={7} />)
  expect(asFragment()).toMatchSnapshot();
});

test.each(['Date', 'Max Temp', 'Min Temp'])('renders data headers', (header) => {
  render(<Report latitude={44.44} longitude={55.55} days={7} />);
  const headerElement = screen.getByText(header);
  expect(headerElement).toBeInTheDocument();
});

test('renders expected rows', async () => {
  render(<Report latitude={44.44} longitude={55.55} days={7} />);
  
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(
      screen.queryByText('Loading...'),
    ).not.toBeInTheDocument()
  })

  const rows = await screen.findAllByRole('row');
  expect(rows).toHaveLength(8);

  const dataRow = rows[1];
  const dateElement = within(dataRow).getByText('2023-07-10')
  expect(dateElement).toBeInTheDocument();
  const maxTempElement = within(dataRow).getByText('27.7')
  expect(maxTempElement).toBeInTheDocument();
  const minTempElement = within(dataRow).getByText('19.1')
  expect(minTempElement).toBeInTheDocument();
});
