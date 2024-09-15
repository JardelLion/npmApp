import lodash from 'lodash'

const numbers = [33, 46, 76, 44, 32, 3]

lodash.each(numbers, (number, index)=>{
    console.log(number, index)
})