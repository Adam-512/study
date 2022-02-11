type pick<T,K extends keyof T> = { [P in K]:T[P] }
type partial<T> = { [ K in keyof T ]?: T[K] }
type required<T> = { [K in keyof T]-?: T[K] }
type exclude<T,U> = T extends  U?never:T
type extract<T,U> = T extends  U?T:never
type omit<T,U> = pick<T,exclude<keyof T,U>>

interface Test {
    name:string
    age:number
    scrope:number
}

const tp:pick<Test,'name'> = {
     name:'asd',
     age:22
}

const tpart:partial<Test> = {
    name:'ss',
}

const trequire:required<Test>={
    name:'ss',
    age:22,
    scrope:33
}

const omi:omit<Test,'age'> = {
    name:'22',
    scrope:44
}

//exclude、extract 参数为联合类型

