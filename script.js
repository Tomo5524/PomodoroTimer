
const container = document.querySelector('.container')
const minutesLabel = document.querySelector('#minutes')
const secondsLabel = document.querySelector('#seconds')
const sessionLabel = document.querySelector('#session')
const breakLabel = document.querySelector('#break')
const sound = document.querySelector('#sound')


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
        integerVal = parseInt(sessionLabel.innerHTML)
        if(e.target.id === 'Nonrotate'){
            sessionLabel.innerHTML = parseInt(sessionLabel.innerHTML) + 1
            minutesLabel.innerHTML = sessionLabel.innerHTML
            // console.log(typeof minutesLabel.innerHTML)                        
        }
        else if (e.target.id === 'rotate'){
            // prevent from getting negative
            if (integerVal > 1){
                sessionLabel.innerHTML = parseInt(sessionLabel.innerHTML) - 1
                minutesLabel.innerHTML = sessionLabel.innerHTML
            }            
        }
        cur_time = sessionLabel.innerHTML;
        console.log(cur_time)       
    }
    else if (e.target.className === 'break'){
        intBreakval = parseInt(breakLabel.innerHTML)
        if(e.target.id === 'Nonrotate'){
            // let cur_time = parseInt(sessionLabel.innerHTML) + 1
            // let str_curtime = cur_time+1
            breakLabel.innerHTML = parseInt(breakLabel.innerHTML) + 1
        }
        else if (e.target.id === 'rotate'){
            if (intBreakval > 1){
                breakLabel.innerHTML = parseInt(breakLabel.innerHTML) - 1
            }
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
            console.log(totalSeconds,'totalseconds')
            // when timer is over
            if (minutesLabel.innerHTML === '0' && secondsLabel.innerHTML === '00'){
                console.log('terminates program')
                sound.play()
                clearInterval(interval)
            }

            // deal with seconds when less than 10
            else if (totalSeconds < 10 && totalSeconds >= 0){
                // onedigit = parseInt(secondsLabel.innerHTML) - 1
                secondsLabel.innerHTML = '0' + totalSeconds.toString()
                console.log('a')
            }
            else if (totalSeconds >= 10){
                secondsLabel.innerHTML = totalSeconds
            }
            // deal with seconds and minutes and when seconds are 00
            else if (totalSeconds === -1){
                totalSeconds = 59
                secondsLabel.innerHTML = totalSeconds
                minutesLabel.innerHTML = parseInt(minutesLabel.innerHTML) - 1
                console.log('minus one minute')
            }
            
            console.log(minutesLabel.innerHTML,'minutes')
            console.log(secondsLabel.innerHTML,'seconds')
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


