import {test, expect } from "@playwright/test"
import apiJson from "../../testdata/payload.json"
let bookingId

test("Post Call Test", async({request})=>{
    const respPost = await request.post("/booking",{
        data: apiJson.postDataCall
    })
    const respJson = await respPost.json();
    console.log(await respPost.json())
    expect(apiJson.postDataCall.firstname).toBe(respJson.booking.firstname)
    bookingId = await respJson.bookingid
    console.log(bookingId)
})

test("Put Call Test", async({request})=>{
    const respPut = await request.put(`/booking/${bookingId}`,{
        data: apiJson.putDataCall,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": 'Basic YWRtaW46cGFzc3dvcmQxMjM='
        }
    })
    const respJson = await respPut.json();
    console.log(await respPut.json())
    expect(apiJson.putDataCall.firstname).toBe(respJson.firstname)
})