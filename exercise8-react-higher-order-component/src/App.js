import './App.css';
import { useState, useEffect } from 'react'
const withMousePosition = (OrginalComponent) => {
  const NewComponent = (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0, y: 0
    })
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX, y: e.clientY,
        })
      }
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange)
      }
    }, [])
    console.log({ ...props })
    return (
      <OrginalComponent {...props} mousePosition={mousePosition} />
    )
  }
  return NewComponent
}

const PanelMouseLogger = ({ children, mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div>
      {children}
      <div>
        <span>X:{mousePosition.x} </span>
        <span>y:{mousePosition.y}</span>
      </div>
    </div>
  )
}
const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>({mousePosition.x},{mousePosition.y})</p>
  )
}
const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PanelMouseTracker>
          <p>Mouse Position:</p>
        </PanelMouseTracker>
        <PointMouseTracker />
      </header>
    </div>
  );
}

export default App;
