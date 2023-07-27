import { Link } from "react-router-dom";
export const MovieItem = ({ tranding }) => {    
    return (        
    <>
      {tranding.map(({ id, title }) => (
        <li key={id}>
              <Link to={`/movies/${id}`}>
                  {title}
              </Link>;
        </li>
      ))}
    </>
  );
};
