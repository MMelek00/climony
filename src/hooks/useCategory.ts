import { useQuery } from "react-query";
import { getCategoryById } from "../api/Client";
const useCategory = (categoryId: string) =>
  useQuery(["category", categoryId], () => getCategoryById(categoryId));
export default useCategory;
