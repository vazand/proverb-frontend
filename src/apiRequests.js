import axios from "axios";
import React from "react";

// async function apiRequests(url='',optionalObj=null,errMsg=null) {

//     try {
//         const response = await fetch(url, optionalObj)
//         console.log(response)
//         if(!response.ok) throw Error("Please reload the page")
//     } catch (error) {
//         errMsg = error.message
//     } finally {
//         return errMsg
//     }

// }

export default axios.create({ baseURL: "http://localhost:9500" });
