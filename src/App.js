import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import AppRouter from './router/AppRouter';

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
