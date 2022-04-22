text = input('Digite um número: ')
print(text)

num = int(text)
pr = True

if (num % 1) == 0:
    print("é divisivel por 1")
    if(num % num) == 0:
        print("é divisivel por ele mesmo")
        for x in range(2, num):
            print(x)
            if (num % x) == 0:
                print("o número não é primo porque é divisivel por " + str(x))
                pr = False
                break
    if pr:
        print("O numero é primo!!!")
else:
    print("não é divisivel por 1")

