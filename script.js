
const container = document.querySelector('.container')
const minutesLabel = document.querySelector('#minutes')
const secondsLabel = document.querySelector('#seconds')
const sessionLabel = document.querySelector('#session')
const breakLabel = document.querySelector('#break')


const btn = document.querySelectorAll('button')

const play = document.getElementById('play')
const reset = document.getElementById('reset')
let isPaused = false;
let cur_time = sessionLabel.innerHTML;
// console.log(cur_time)

btn.forEach(val => {
    val.addEventListener('click',(e)=>{
    // console.log(e)
    if(e.target.className === 'session'){
        if(e.target.id === 'Nonrotate'){
            // let cur_time = parseInt(sessionLabel.innerHTML) + 1
            // let str_curtime = cur_time+1
            sessionLabel.innerHTML = parseInt(sessionLabel.innerHTML) + 1
            minutesLabel.innerHTML = parseInt(minutesLabel.innerHTML) + 1
            // console.log(typeof minutesLabel.innerHTML)

        }
        else if (e.target.id === 'rotate'){
            sessionLabel.innerHTML = parseInt(sessionLabel.innerHTML) - 1
            minutesLabel.innerHTML = parseInt(minutesLabel.innerHTML) - 1
        }
        cur_time = sessionLabel.innerHTML;
        console.log(cur_time)
    }
    else if (e.target.className === 'break'){
        if(e.target.id === 'Nonrotate'){
            // let cur_time = parseInt(sessionLabel.innerHTML) + 1
            // let str_curtime = cur_time+1
            breakLabel.innerHTML = parseInt(breakLabel.innerHTML) + 1
        }
        else if (e.target.id === 'rotate'){
            breakLabel.innerHTML = parseInt(breakLabel.innerHTML) - 1
        }
    
    }
    else if (e.target.id === 'play'){
        isPaused = false;
        countTime()
    }
    else if (e.target.id === 'pause'){
        isPaused = isPaused ? false:true
    }
    else if (e.target.id === 'reset'){
        minutesLabel.innerHTML = sessionLabel.innerHTML
        secondsLabel.innerHTML = '00'
        isPaused = true
        console.log(isPaused)
    }

    })
    
});




function countTime(){
    let totalSeconds = parseInt(secondsLabel.innerHTML);
    
    let interval = setInterval(() =>{
        if (!isPaused){
            totalSeconds--
            
            if (secondsLabel.innerHTML.length === 1){
                onedigit = parseInt(secondsLabel.innerHTML) - 1
                secondsLabel.innerHTML = '0' + totalSeconds.toString()
                console.log('a')
            }
            else{
                secondsLabel.innerHTML = totalSeconds
                console.log('b')
            }
            minutesLabel.innerHTML = parseInt(minutesLabel.innerHTML) - 1
        
            console.log(totalSeconds)
            
            console.log(secondsLabel.innerHTML)
            if (totalSeconds === 0 || secondsLabel.innerHTML === '00'){
                totalSeconds = 59
                secondsLabel.innerHTML = totalSeconds
                console.log(minutesLabel.innerHTML)
            }
            if (minutesLabel.innerHTML == '0' && sessionLabel.innerHTML === '00'){
                clearInterval(interval)
            }
        }
        
    },1000)
}



// // perform time functionality
// function countTime(){
//     totalSeconds++
//     secondsLabel.innerHTML = getTime(totalSeconds % 60)
//     minutesLabel.innerHTML = getTime(totalSeconds / 60)
// }



// function getTime(t){
//     let tString = t + ''
//     if (tString.length < 2){
//         return '0' + tString;
//     }
//     else{
//         return tString
//     }
// }


