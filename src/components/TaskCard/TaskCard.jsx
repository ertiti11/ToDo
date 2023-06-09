import './TaskCard.css'
import { useRef, useEffect } from "react";
import { Link } from 'wouter';

export default function TaskCard({title, description,image,tag, color}) {
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current.scrollHeight > descriptionRef.current.offsetHeight) {
      const text = descriptionRef.current.textContent.trim();
      descriptionRef.current.textContent = text.slice(0, 50) + "...";
    }
  }, []);
  if(image != ""){
    return (
      <div className="taskCard" style={{backgroundColor : color}}>
          <h1>{title}</h1>
          <p ref={descriptionRef}>{description}</p>
          <Link to={`/categories/${tag}`}>
            <span  className='tag'>{tag}</span>
          </Link>
      </div>
    )
  }else{
    return (
      <div className="taskCard" style={{backgroundColor : color}}>
          <h1>{title}</h1>
          <p ref={descriptionRef}>{description}</p>
          <Link to={`/categories/${tag}`}>
          <span  className='tag'>{tag}</span>
          </Link>
          
      </div>
    )
  }

  
}
