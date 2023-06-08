import ApiConstants from "./ApiConstants";
import RemoteData from "./RemoteData";
import { Article, Category } from "./model";

export const getTopics = async () => {
  let res = await RemoteData.get(ApiConstants.TOPICS);
  return {
    topics: res.data,
  };
};
export const getCategoryById = async (
  categoryId: string
): Promise<Category> => {
  const { data } = await RemoteData.get(`${ApiConstants.TOPICS}/${categoryId}`);
  return data;
};
export const getTopicsByArticleId = async (
  categoryId: string,
  articleId: string
): Promise<Article> => {
  const { data } = await RemoteData.get(
    `${ApiConstants.TOPICS}/${categoryId}/${articleId}`
  );
  return data;
};
