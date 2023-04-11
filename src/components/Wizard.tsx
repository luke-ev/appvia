import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from '../steps/Details'
import Features from '../steps/Features'
import Summary from '../steps/Summary'

const Wizard = () => {
  return (
    <div className="flex justify-center md:mx-auto mt-6 p-6 w-full md:max-w-screen-md border rounded-sm shadow-md">
      <Router>
        <Routes>
          <Route path="/" element={<Details nextStep="features" />} />
          <Route path="/features" element={<Features nextStep="summary" />} />
          <Route path="/summary" element={<Summary prevStep="features" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Wizard
