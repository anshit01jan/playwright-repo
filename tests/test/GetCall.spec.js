import {request, test, expect} from "@playwright/test";

let reqContext;
test.beforeAll(async () => {
    reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    })
})

test("Test Get Call", async({request}) => {
    const resp = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(await resp.json())
})

test("Test Get Call 1", async() => {
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Content-Type": "application/json"
        }
    })
    const resp = await reqContext.get("/booking")
    console.log(await resp.json())
    expect(resp.status).toBe(200)
    expect(resp.statusText).toBe("OK")
})

test("Test Get Call 2", async() => {
    const resp = await reqContext.get("/booking")
    console.log(await resp.json())
})

test("Test Get Call 3", async({request}) => {
    const resp = await request.get("/booking")
    console.log(await resp.json())
})

test("Test Get Call 4", async({request}) => {
    const resp = await request.get("/booking", {
        params: {
            firstname:"Susan",
            lastname: "Jones"
        }
    })
    console.log(await resp.json())
})

test("Test Get Call 5", async({request}) => {
    const bookingId = 2
    const resp = await request.get(`/booking/${bookingId}`)
    expect((await resp.json()).firstname).toBe("Susan")
})

test.only("Test Get Call 6", async({request}) => {
    const resp = await request.get(`/booking/2`)
    const responseBody = await resp.json()
    expect(responseBody).toMatchObject({
        "firstname": "Eric",
        "lastname": "Wilson",
        "totalprice": 395,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2025-03-26",
            "checkout": "2025-10-06"
        },
        "additionalneeds": "Breakfast"
    })
    expect((await resp.json()).firstname).toBe("Eric")
    expect((await resp.json()).bookingdates.checkin).toBe("2025-03-26")
})