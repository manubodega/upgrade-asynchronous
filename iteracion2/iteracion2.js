// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve('time out');
//         }, 2000)
//     })

//     promise.then(() => {console.log('Time out!')})
// }

// // const ejecutar = async () => {
// async function ejecutar(){
//     try{
//         await runTimeOut()
//     }
//     catch{console.log('error')}
// }
// ejecutar()


const url = 'https://rickandmortyapi.com/api/character'
async function getCharacters () {
    try {
        const response = await fetch(url)
        const result = await response.json()
        console.log(result)
    } catch (error) {
        console.log("error")
    }
}
getCharacters();
