import React, { useState, useEffect, useRef } from 'react';

function App() {
  const columnsHandleEl = useRef(null);
  const columnsWrapperEl = useRef(null);
  const [columnsHandleIsDragging, setColumnsHandleIsDragging] = useState(false);
  const [columnsSizes, setColumnsSizes] = useState({
    left: 50,
    right: 50,
  });  

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if(event.target === columnsHandleEl.current) {
        setColumnsHandleIsDragging(true);
      }
    });

    const setMoveEvent = (event) => {
      if(!columnsHandleIsDragging) {
        return false
      }
      const containerWidth = columnsWrapperEl.current.offsetWidth;
      const containerLeftOffset = columnsWrapperEl.current.offsetLeft;
      const pointerXPosition = event.clientX - containerLeftOffset;
      const boxMinWidth = 400;

      const leftColumn = (Math.max(boxMinWidth, pointerXPosition) / containerWidth) * 100;
      const rightColumn =  (Math.max(boxMinWidth, (containerWidth - pointerXPosition)) / containerWidth) * 100

      const calculateLeftColumn = () => {
        if(leftColumn + rightColumn > 100) {
          return;
        } else {
          return leftColumn;
        }
      }

      const calculateRightColumn = () => {
        if(leftColumn + rightColumn > 100) {
          return;
        } else {
          return rightColumn;
        }
      }

      setColumnsSizes({
        left: calculateLeftColumn(),
        right: calculateRightColumn()
      })
    }

    document.addEventListener('mousemove', setMoveEvent);
    document.addEventListener('mouseup', function(event) {
      setColumnsHandleIsDragging(false);
    });

    return () => {
      document.removeEventListener("mousemove", setMoveEvent);
    };
  }, [columnsHandleIsDragging])

  return (
    <div className="layout-container">
      <div className="fixed">
        Fixed Column
      </div> 
      <div className="boxesContainer" ref={columnsWrapperEl}>
        <div className="boxesItem" style={{width: columnsSizes.left + '%'}}>
          <div className="boxesItemInner">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis, autem minima sed laboriosam aspernatur id repudiandae quae aliquid tempora nisi nesciunt illo sint expedita aperiam tenetur sequi aut dolorem?<br/>   
            <br/> 
            <br/> 
          </div>
        </div>
        <div className="boxesItem" style={{width: columnsSizes.right + '%'}}>
          <div className="handle" ref={columnsHandleEl}></div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptatum explicabo mollitia odio id sed repellendus omnis vero rem nisi alias maxime veniam minus magnam nobis officia, laudantium autem inventore.
        </div>
      </div>
    </div>
  );
}

export default App;
