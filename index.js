// code your solution here
function saturdayFun(skate = "roller-skate"){
    return `This Saturday, I want to ${skate}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrap){
    return function result(phrase){
        return `You are ${wrap}${phrase}${wrap}!`
    }
}