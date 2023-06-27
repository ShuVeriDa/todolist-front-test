import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {persistor, store} from "./redux/store.ts";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App/>
      </PersistGate>
    </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
)
