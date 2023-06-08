import { useQuery } from "react-query";
import { getTopicsByArticleId } from "../api/Client";
const useArticles = (categoryId: string, articleId: string) =>
  useQuery(["category", categoryId], () =>
    getTopicsByArticleId(categoryId, articleId)
  );
export default useArticles;
