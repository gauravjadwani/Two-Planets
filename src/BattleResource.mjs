// export default {
//     SG:{
//         left:'AT',
//         right:null,
//         weight:2
//     },
//     AT:{
//         left:'E',
//         right:'SG',
//         weight:2
//     },
//     E:{
//         left:'H',
//         right:'AT',
//         weight:2
//     },
//     H:{
//         left:null,
//         right:'E',
//         weight:2
//     }
// }
// { H: 100, E: 101, AT: 20, SG: 5 }
export default [
    {
        category:'H',
        weight:2,
        LTotal:100
    },
    {
        category:'E',
        weight:2,
        LTotal:50
    },
    {
        category:'AT',
        weight:2,
        LTotal:10
    },
    {
        category:'SG',
        weight:2,
        LTotal:5
    }
]
// 250 H, 50 E, 20 AT, 15 SG 
// [
//     {
//         category:'H',
//         LDeployed:152,
//         LTotal:100,
//         FTotal:250,
//         status:enabled

//     },
//     {
//         category:'E',
//         fDeployed:13,
//         LDeployed:00
//     },
//     {
//         category:'AT',
//         fDeployed:30,
//         LDeployed:00
//     }
// ]