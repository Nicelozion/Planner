import { Link, Outlet } from "react-router-dom";
import { getAllIdeasRoute, getNewIdeaRoute } from "../../lib/routes";
import css from "./index.module.scss";

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>IdeaNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link to={getAllIdeasRoute()} className={css.link}>
              All ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link to={getNewIdeaRoute()} className={css.link}>
                Add Idea
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
