import { Link } from "react-router-dom";
import { List } from "./MovieItem.styled";

export const MovieItem = ({ tranding }) => {    
    return (        
    <>
      {tranding.map(({ id, title }) => (
        <List key={id}>
              <Link to={`/movies/${id}`}>
                  {title}
              </Link>;
        </List>
      ))}
    </>
  );
};
