import { useParams } from "react-router-dom";
import { ViewIdeaRouteParams } from "../../lib/routes";
import { trpc } from "../../lib/trpc.tsx";
import css from "./index.module.scss";
import { Segment } from "../../components/Segment/index.tsx";

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery(
    {
      ideaNick,
    }
  );
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data?.idea) {
    return <span>Idea not found</span>;
  }

  return (
    <Segment title={data.idea.name} size={1} description={data.idea.description}>
      <div className={css.text}>
        {data.idea.text.split("\n").map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </Segment>
  );
};
