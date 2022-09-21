/*A proporção de leitura e escrita de código é de 10 para 1. Ou seja, passamos muito mais tempo lendo códigos que já existem do que criando novos códigos. 
Sendo assim, é essencial que escrevamos "códigos limpos", que sejam de fácil leitura, interpretação e manutenção, para que não só o computador mas outros humanos também consigam entender.*/

/*1 - Nomes são importantes e devem ser autoexplicativos.
Os nomes devem ser autoexplicativos e pronunciáveis. Também se aplica as classes/id's no HTML.*/
//Ruim:
const d = new Date()
const yyyy = d.getFullYear() 

//Bom:
const date = new Date()
const year = date.getFullYear()


/*2 - Evite contexto desnecessário e ambiguidades.*/
//Ruim:
const person1 = {
    personName: 'Joao',
    personAge: 25
}

//Bom:
const person = {
    name: 'Joao',
    age: 25
}


/*3 - Evite mapeamento mental.
Dê nomes que você irá saber o que é através da leitura do código, e não através da memória. Além disso, os nomes devem ser explícitos para serem pesquisáveis.*/
//Ruim:
const names = []
names.forEach((n) => {
    console.log(n)
})

//Bom:
const numbers = []
names.forEach((number) => {
    console.log(number)
})


/*4 - Seja direto e específico.
Nomeie as funções com nomes que especifiquem a função delas.*/
//Ruim:
function addDate(date, month){
}

//Bom:
function addMonthToDate(date, month){
}


/*5 - Uma função só deve ter uma responsabilidade.*/
//Ruim:
function emailClients(clients) {
    clients.forEach((client) => {
        const clientRecord = dataBase.lookup(client)
        if (clientRecord.isActive()) {
            emailClients(client)
        }
    })
}

//Bom:
function emailClient(clients) {
    clients
    .filter(isActiveClient)
    .forEach(email)
}
function isClientActive(client) {
    const clientRecord = dataBase.lookup(client)
    return clientRecord.isActive()
}


/*6 - Limite a quantidade de argumetos das funções.
Geralmente quando a função tem muitos argumentos, significa que ela está lidando com várias coisas, ou seja, mais de uma responsabilidade.
Se for o caso, crie um objeto.*/


/*7 - Evite números "mágicos".
Será mais fácil de ler e de fazer manutenção, pois em caso de necessidade, só será preciso mudar o valor da variável.*/
//Ruim:
if (age < 18) {}

//Bom:
const legalAge = 18
if(age < legalAge) {}


/*8 - Utilize valores booleanos de forma implícita.*/
//Ruim:
if (user.isActive) {
    return true
} else {
    return false
}

//Bom:
return user.isActive


/*9 - Evite condicionais negativos. 
Para evitar confusões.*/
//Ruim:
function shouldNotAllow() {}
if(!shouldNotAllow()) {}

//Bom:
function shouldAllow() {}
if(!shouldAllow()) {}


/*10 - Comentários: Somente se for necessário. Não precisa comentar o óbvio. Se o seu código tem muitos comentários, significa que ele está ilegível ou desnecessário.*/


/*11 - Não explique o código, contrua um código autoexplicativo.*/
//Ruim:
//função verifica se o usuário é elegível para os benefícios
if((employee.flags && HOURLY_FLAG) && (employe.age > 65)) {}

//Bom:
if(employee.isEligibleForFulBenefits()) {}


/*12 - Nem tudo precisa ser uma div.
Procure construir um HTML semântico, com tags semânticas ao invés de classificar tudo como div.*/


/*13 - Adote o padrão do seu projeto.
Nomes, componentes, pastas, identação... Defina o padrão que utilizará e use durante todo o código.
Pode ser de forma manual, mas existem ferramentas, como o Husky, que ajudam nesse ponto.*/
//Ruim:
function changeEmail() {}
function change_name() {}

//Bom:
function changeEmail() {}
function changeName() {}
//ou
function change_email() {}
function change_name() {}


/*14 - Definir a forma como o seu projeto será estilizado e seguir durante todo o código.
Utilize pré-processadores, que ajudam bastante.*/


/*15 - Identação. 
Idente o seu código.*/


/*16 - Refatoração.
Volte no código sempre que puder para melhorá-lo.*/


/*
    DRY - Don't repeat yourself;
    KISS - Keep it simple stupid; utilize a opção de código mais simples e sucinta.
    YAGNI - You aren't gonna need it; não crie e mantenha códigos que não serão ou são úteis.
*/