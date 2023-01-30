

//todo: Add new Date to month property, this so we can match this array with artist array?.
// Then Convert artist date into month with string. Then see if properties match and can display saved events
const getCurrentDate = new Date()
const getYear = new Date()
const date = new Date(getCurrentDate.getFullYear(),0,1);
console.log(date.setMonth(date.getMonth()))

export const monthByName = [
    {
    month: "January"
}, {
    month: new Date(date.setMonth(date.getMonth()+1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: new Date(date.setMonth(date.getMonth() + 1))
},{
    month: "Skipped date"
}]

export const yearByName = [
    {
        currentYear: new Date().getFullYear()-2
    },
    {
        currentYear: new Date().getFullYear()-1
    },
    {
     currentYear: new Date().getFullYear()
    },  {
        currentYear: new Date().getFullYear()+1
    },  {
        currentYear: new Date().getFullYear()+2
    },  {
        currentYear: new Date().getFullYear()+3
    },
]
