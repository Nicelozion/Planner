import { getViewIdeaRoute } from '../../lib/routes.ts';
import { trpc } from '../../lib/trpc.tsx'; 
import { Link } from 'react-router-dom';

export const AllIdeasPage = () => {
    
    const {data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()
    if (isLoading || isFetching) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }
    
    return (
    <>
      <h1>Ideanick</h1>
      {data?.ideas?.map((idea) => (
        <div key={idea.nick}>
          <h2><Link to={getViewIdeaRoute({ideaNick: idea.nick})}>{idea.name}</Link></h2>
          <p>{idea.description}</p>
        </div>  
      ))}
    </>
  );
};
