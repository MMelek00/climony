import { useQuery } from "react-query";
import { getTopics } from "../api/Client";
const useTopics = () => useQuery("topics", getTopics);
export default useTopics;
