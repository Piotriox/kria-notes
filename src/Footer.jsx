import './index.css'
import { Notebook, ListChecks, Cog } from 'lucide-react';

function Footer() {
  return (
    <div className="footer">
      <ListChecks className="button"></ListChecks>
      <Notebook className="button"></Notebook>
      <Cog className="buttonSet"></Cog>
    </div>
  )
}

export default Footer