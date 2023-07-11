import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Report } from './components/report';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid2 margin={20}>
          <Report latitude={44.44} longitude={44.44} days={7}/>
        </Grid2>
      </Container>
    </div>
  );
}

export default App;
