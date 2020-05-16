import { Application ,Router } from "https://deno.land/x/oak/mod.ts";


interface Course {

    name: String,
    price: number,
    certification : boolean
}

let cources : Array<Course> =[
    {
        name: "html",
        price: 700,
        certification: true
    },
    {
        name: "css",
        price: 700,
        certification: true
    }
];


export const getCourses = ({response} : {response:any} ) => {

    response.body = cources;
}


export const addCourses = async ({request ,response} : {request :any ,response:any} ) => {

    const body =await request.body();

    const course: Course = body.value;

    cources.push(course)

    response.body = {coursesAdded: "SUCCESS"}
    response.status = 200;
}


//

const router = new Router()
const app = new Application()
const PORT = 4300;

router
    .get("/learn" , getCourses)
    .post("/create", addCourses)

app.use(router.routes())
app.use(router.allowedMethods());


await app.listen({port : 4300});