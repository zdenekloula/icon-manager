import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import { settings } from './config'
import Layout from './components/Layout/Layout'
import LayoutColumn from './components/Layout/LayoutColumn'
import LayoutResizeableColumns from './components/Layout/LayoutResizeableColumns'
import LayoutColumnLibrary from "./components/Layout/LayoutColumnLibrary";
import LayoutColumnUser from "./components/Layout/LayoutColumnUser";

function App() {
  const columnsHandleEl = useRef(null);
  const columnsWrapperEl = useRef(null);
  const [columnsHandleIsDragging, setColumnsHandleIsDragging] = useState(false);
  const [columnsSizes, setColumnsSizes] = useState({
    left: 100 - settings.userColumnSize,
    right: settings.userColumnSize,
  });
  const [appData, setAppData] = useState(null);

  useLayoutEffect(() => {
    console.log("test");
  })

  useEffect(() => {
    fetch('http://localhost:4000/api/init?libraries-limit=20')
        .then(res => res.json())
        .then(jsonRes => setAppData(jsonRes));

    document.addEventListener('mousedown', (event) => {
      if (event.target === columnsHandleEl.current) {
        setColumnsHandleIsDragging(true);
      }
    });

    const setMoveEvent = (event) => {
      if (!columnsHandleIsDragging) {
        return false
      }
      const containerWidth = columnsWrapperEl.current.offsetWidth;
      const containerLeftOffset = columnsWrapperEl.current.offsetLeft;
      const pointerXPosition = event.clientX - containerLeftOffset;
      const boxMinWidth = 250;

      const leftColumn = (Math.max(boxMinWidth, pointerXPosition) / containerWidth) * 100;
      const rightColumn = (Math.max(boxMinWidth, (containerWidth - pointerXPosition)) / containerWidth) * 100;

      const calculateLeftColumn = () => {
        if (!(leftColumn + rightColumn > 100)) {
          return leftColumn;
        }
      };

      const calculateRightColumn = () => {
        if (!(leftColumn + rightColumn > 100)) {
          return rightColumn;
        }
      };

      setColumnsSizes({
        left: calculateLeftColumn(),
        right: calculateRightColumn()
      });

    };

    document.addEventListener('mousemove', setMoveEvent);
    document.addEventListener('mouseup', function (event) {
      setColumnsHandleIsDragging(false);
    });

    return () => {
      document.removeEventListener("mousemove", setMoveEvent);
    };
  }, [columnsHandleIsDragging]);

  return (
      <div className="App">
        <Layout>
          <LayoutColumn isFixed>
            Fixed Column
          </LayoutColumn>
          <LayoutResizeableColumns ref={columnsWrapperEl}>
            <LayoutColumn isDragging={columnsHandleIsDragging} style={{width: columnsSizes.left + '%'}}>
              <LayoutColumnLibrary data={appData}/>
            </LayoutColumn>
            <LayoutColumn isDragging={columnsHandleIsDragging} style={{width: columnsSizes.right + '%'}} ref={columnsHandleEl} hasHandle>
              <LayoutColumnUser data={appData}/>
            </LayoutColumn>
          </LayoutResizeableColumns>
        </Layout>
      </div>
  );
}

export default App;
