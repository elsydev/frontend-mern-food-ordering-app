import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { Order } from "../types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useGetMyOrders=()=>{
    const {getAccessTokenSilently}=useAuth0();
    const getMyOrdersRequest=async():Promise<Order[]>=>{
        const accessToken=await getAccessTokenSilently();
        const response=await fetch(`${API_BASE_URL}/api/order`,{
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })
        if(!response){
            throw new Error("Failed to get orders");

        }
        return response.json();
    }
    const {data:orders,isLoading}=useQuery("fetchMyOrders",getMyOrdersRequest);
    return {orders,isLoading}
};
type CheckoutSessionRequest={
    cartItems:{
        menuItemId:string;
        name:string;
        quantity:string;
    }[];
    deliveryDetails:{
        email:string;
        name:string;
        addressLine1:string;
        city:string;
    };
    restaurantId:string;
}
export const useCreateCheckoutSession=()=>{
    const {getAccessTokenSilently}=useAuth0();
    const createCheckoutSessionRequest=async(checkoutSessionRequest: CheckoutSessionRequest)=>{
        const accessToken=await getAccessTokenSilently();
        const response= await fetch(
            `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
            {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${accessToken}`
            },
            body:JSON.stringify(checkoutSessionRequest)
        });
        if(!response.ok){
            throw new Error("Failed to create checkout session");

        }
        return response.json();
    };
    const {mutateAsync:createCheckoutSession,isLoading,error,reset}=useMutation(createCheckoutSessionRequest);
    if(error){
        toast.error(error.toString());
        reset();
    }
return {
    createCheckoutSession,
    isLoading
}
}