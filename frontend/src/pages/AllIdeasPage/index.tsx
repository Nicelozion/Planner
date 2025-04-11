import { getViewIdeaRoute } from "../../lib/routes.ts";
import { trpc } from "../../lib/trpc.tsx";
import { Link } from "react-router-dom";
import css from "./index.module.scss";
import { Segment } from "../../components/Segment/index.tsx";

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data?.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <h2 className={css.ideaName}></h2>
            <Segment
              size={2}
              title={
                <Link
                  className={css.ideaLink}
                  to={getViewIdeaRoute({ ideaNick: idea.nick })}
                >
                  {idea.name}
                </Link>
              }
              description={idea.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  );
};
