let metro = parseInt(prompt('Digite o valor em Metros'))
const opção = parseInt(prompt(`Escolha uma das opções abaixo para converter \n
1 - milímetro (mm)\n 2 - centímetro (cm)\n 3 - decímetro (dm)\n4 - decâmetro (dam)\n 5 - hectômetro (hm)\n 6 - quilômetro (km)`))
switch (opção) {
    case 1:
        alert(`${metro}m equivale à ` + (metro *= 1000 ) + 'mm')
        break
    case 2:
        alert(`${metro}m equivale à ` + (metro *= 100) + 'cm')
        break
    case 3:
        alert(`${metro}m equivale à ` + (metro *= 10) + 'dm') 
        break
    case 4: 
        alert(`${metro}m equivale à ` + (metro /= 10) + 'dam')
        break
    case 5:
        alert(`${metro}m equivale à ` + (metro /= 100) + 'hm') 
        break
    case 6:
        alert(`${metro}m equivale à ` + (metro /= 1000) + 'km')
        break
    default:
        alert('Opção inválida!')                
}