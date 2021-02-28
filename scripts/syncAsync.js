const button = document.querySelector('button');

const getPosition = (args) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(sucsses => {
           resolve(sucsses);//object e 
        }, error => {
            reject(error);
        },
         args)
    })
    return promise;
}

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, duration);
    });
    return promise;
}

function trackUserLocation(){
    let posData;
    getPosition()
    .then(positionData => {
        posData = positionData;
       return setTimer(2000);
    }
    //  error => {
    //     console.log(error);
    //     console.log("Error!");
    // }
    )
    .catch (error => {
        console.log(error);
    })
    .then(data =>{
        console.log(data, posData);
    })
    .finally(() => {
        console.log("All is Done!");//ankax nranic than / cath@ verjum sa e linum
    })
    // navigator.geolocation.getCurrentPosition(
    //     (positionData) => {
    //         setTimer(2000).then(data => {
    //             console.log(data, positionData);
    //         })
    // //       setTimeout(() => {
    // //         console.log(positionData);
    // //      },2000)
    // }, 
    // (error) => {
    //     console.log(error)
    // });
    setTimer(1000)
    .then(() => {
        console.log("Hello Timer");
    })
    // setTimeout(() => {
    //     console.log("Hello User");
    // }, 0);
    console.log("WithOut setTimeout")
}

button.addEventListener('click', trackUserLocation);

// let result = 0;
// for(let i = 0; i < 1000000; i++){
//     result += i;
// }
// console.log(result);

