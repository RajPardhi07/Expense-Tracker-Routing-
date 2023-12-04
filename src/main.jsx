import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Context  from './Context.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(


        <Context>
            <BrowserRouter>
            
              <App />
            </BrowserRouter>

  
        </Context>
  
)
