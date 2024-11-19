import { useEffect, useState } from 'react';
import './Cursor.css';
const Cursor = () => {

    const [cursorStyle, setCursorStyle] = useState<React.CSSProperties>({});  

    useEffect(() => {  
      const handleMouseMove = (e: MouseEvent) => {  
        setCursorStyle({  
          left: `${e.pageX}px`,  
          top: `${e.pageY}px`,  
        });  
      };  
  
      window.addEventListener('mousemove', handleMouseMove);  
  
      return () => {  
        window.removeEventListener('mousemove', handleMouseMove);  
      };  
    }, []);  


    return <div className="custom-cursor" style={cursorStyle}></div>;  
}
 
export default Cursor;