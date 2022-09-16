import MultiStepForm from "./components/MultiStepForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import "./styles/App.css";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <img src={logo} className="logo" alt="Logo" />;
        <CssBaseline className="baseline" />
        <Container
          className="container"
          style={{ border: "none", boxShadow: "none" }}
          component={Box}
          p={4}
        >
          <Paper
            className="child"
            style={{ border: "none", boxShadow: "none" }}
            component={Box}
            p={3}
          >
            <MultiStepForm />
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default App;
