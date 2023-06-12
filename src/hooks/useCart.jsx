import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


export const useCart = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] =  useAxiosSecure();
 // use tanstack query
    const {refetch, data : cart = []} = useQuery({
     queryKey: ['cart', user?.email],
     enabled : !loading,
     queryFn: async ()=>{
         const response = await axiosSecure(`/carts?email=${user?.email}`)
         return response.data;
     },
   });
 
   return [cart, refetch]
}