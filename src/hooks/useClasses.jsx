import { useQuery } from "@tanstack/react-query"


export const useClasses = () => { 


    const { refetch, data: allclasses = [] } = useQuery({
        queryKey: ["allclasses"],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/allclasses');
          const data = await res.json(); 
          return data;
        }
      });
      
      return [allclasses];
}