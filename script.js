let metro = 10
const opção = 3
switch (opção) {
    case 1:
        console.log(`${metro}m equivale à ` + (metro *= 1000 ) + 'mm')
        break
    case 2:
        console.log(`${metro}m equivale à ` + (metro *= 100) + 'cm')
        break
    case 3:
        console.log(`${metro}m equivale à ` + (metro *= 10) + 'dm') 
        break
    case 4: 
        console.log(`${metro}m equivale à ` + (metro /= 10) + 'dam')
        break
    case 5:
        console.log(`${metro}m equivale à ` + (metro /= 100) + 'hm') 
        break
    case 6:
        console.log(`${metro}m equivale à ` + (metro /= 1000) + 'km')
        break
    default:
        console.log('Opção inválida!')                
}
