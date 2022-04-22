import math

print('Calculando PI')

i = 1
max = 20000000
pi_calc = 0
odd = True
add = True
parc = 0

while i < max:
    if odd:
        parc = 4 / i
        odd = False
        if add:
            pi_calc = pi_calc + parc
            add = False
        else:
            pi_calc = pi_calc - parc
            add = True
    else:
        odd = True

    i += 1
    
print('Valor PI:     ' + str(math.pi))
print('PI calculado: ' + str(pi_calc))
print('Número de iterações: ' + str(max))
