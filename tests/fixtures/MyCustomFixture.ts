import {test as baseTest} from "@playwright/test"

type MyFixture = {
    fixture1: any
}

type WorkerFixture = {
    workerFixture: any
}

export const test = baseTest.extend<MyFixture, WorkerFixture>({
    fixture1 : async({}, use: (value: any) => Promise<void>) => {
        const fixture1 = "I am fixture 1";
        console.log("Before part of fixture 1")
        await use(fixture1)
        console.log("After part of fixture 1")
    },
    workerFixture: [async({}, use: (value: any) => Promise<void>) => {
        const workerFixture = "I am worker fixture";
        console.log("Before part of worker fixture")
        await use(workerFixture)
        console.log("After part of worker fixture")
    }, {scope: 'worker'}]
})