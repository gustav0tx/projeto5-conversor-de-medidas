let meter = 10
const option = 3
switch (option) {
    case 1:
        console.log(`${meter}m equivale à ` + (meter *= 1000 ) + 'mm')
        break
    case 2:
        console.log(`${meter}m equivale à ` + (meter *= 100) + 'cm')
        break
    case 3:
        console.log(`${meter}m equivale à ` + (meter *= 10) + 'dm') 
        break
    case 4: 
        console.log(`${meter}m equivale à ` + (meter /= 10) + 'dam')
        break
    case 5:
        console.log(`${meter}m equivale à ` + (meter /= 100) + 'hm') 
        break
    case 6:
        console.log(`${meter}m equivale à ` + (meter /= 1000) + 'km')
        break
    default:
        console.log('Opção inválida!')                
}
