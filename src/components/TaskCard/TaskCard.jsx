import './TaskCard.css'
import { useRef, useEffect } from "react";

export default function TaskCard({title, description,image}) {
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current.scrollHeight > descriptionRef.current.offsetHeight) {
      const text = descriptionRef.current.textContent.trim();
      descriptionRef.current.textContent = text.slice(0, 50) + "...";
    }
  }, []);

  if(image != ""){
    console.log(image)
    return (
      <div className="taskCard">
          <h1>{title}</h1>
          <p ref={descriptionRef}>{description}</p>
      </div>
    )
  }else{
    return (
      <div className="taskCard" >
          <h1>{title}</h1>
          <p ref={descriptionRef}>{description}</p>
      </div>
    )
  }

  
}
