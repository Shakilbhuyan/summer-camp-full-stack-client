import { useQuery } from "@tanstack/react-query"


export const useClasses = () => { 


    const { refetch, data: allclasses = [] } = useQuery({
        queryKey: ["allclasses"],
        queryFn: async () => {
          const res = await fetch('https://summer-camp-school-server-one.vercel.app/allclasses');
          const data = await res.json(); 
          return data;
        }
      });
      
      return [allclasses];
}