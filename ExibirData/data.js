const h1 = document.querySelector('.container h1');
var data = new Date();

function getDataAtual(data) {

    var diaDaSemana = data.getDay();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
//transformar o dia que está em número para dia em palavra 
    var diaPorEscrito = ``;

    switch (diaDaSemana) {
        case 0:
            diaPorEscrito = `Domingo`;
            break;
        case 1:
            diaPorEscrito = `Segunda-feira`;
            break;
        case 2:
            diaPorEscrito = `Terça-feira`;
            break;
        case 3:
            diaPorEscrito = `Quarta-feira`;
            break;
        case 4:
            diaPorEscrito = `Quinta-feira`;
            break; 
        case 5:
            diaPorEscrito = `Sexta-feira`;
            break;
        case 6:
            diaPorEscrito = `Sábado`;
            break;
    };
//transformar o mes que está em número para mês em palavra 
    var mesPorEscrito = ``;

    switch (mes) {
        case 0:
            mesPorEscrito = `Janeiro`;
            break;
        case 1:
            mesPorEscrito = `Fervereiro`;
            break;
        case 2:
            mesPorEscrito = `Março`;
            break;
        case 3:
            mesPorEscrito = `Abril`;
            break;
        case 4:
            mesPorEscrito = `Maio`;
            break;
        case 5:
            mesPorEscrito = `Junho`;
            break;
        case 6:
            mesPorEscrito = `Julho`;
            break;
        case 7:
            mesPorEscrito = `Agosto`;
            break;
        case 8:
            mesPorEscrito = `Setembro`;
            break;
        case 9:
            mesPorEscrito = `Outubro`;
            break;
        case 10:
            mesPorEscrito = `Novembro`;
            break;
        case 11:
            mesPorEscrito = `Dezembro`;
            break;
    }
    // cololcar  0 a esqueda dos minutos
    if (min < 10) {
        min = `0${min}`
    }

    return (` ${diaPorEscrito}, ${dia} de ${mesPorEscrito} de ${ano} ${hora}:${min}`);
};

//enviando pro HTML a data final

h1.innerHTML = getDataAtual(data);


/* Para retornar  o dia da semana também pode se fazer:

function getDiaSemana(diaSemana) {
    const diasSemana = ['domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return diasSemana[diaSemana];
}

Sendo assim substitui o switch case
 */

