import goBack from './MovieDetails/MovieDetails';
import {Button} from './MovieDetails/MovieDetails.styled';
export const NotFound = () => {
    return (
    <>
    <Button type="button" onClick={goBack}>
        Go back
    </Button>
    <h2>
        Sorry, page not found
    </h2>
    </>
)};