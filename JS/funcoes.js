function Opc_1(resp, pont ,nome){
    resp = prompt("É a região com mais estados! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("Recife é a capital estadual mais antiga do país! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("O litoral do Maranhão é praticamente intocado! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    alert(`${nome}, sua pontuação final foi: ${pont}`);
    pont = 0;                      
    }

function Opc_2(resp, pont ,nome){
    resp = prompt("A vegetação do Centro-Oeste é bastante diversificada! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("A bacia Tocantins-Araguaia é a segunda maior do Brasil e alimenta todos os estados! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("Devido ao relevo e à localização da região, no Centro-Oeste nascem importantes rios! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    alert(`${nome}, sua pontuação final foi: ${pont}`);
    pont = 0;                      
    }

  function Opc_3(resp, pont ,nome){
    resp = prompt("A região Sudeste é a segunda menor região do país.! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("Sua área real é de cerca de 924.620 quilômetros quadrados! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("É a região mais desenvolvida do Brasil! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    alert(`${nome}, sua pontuação final foi: ${pont}`);
    pont = 0;                      
    }

  function Opc_4(resp, pont ,nome){
    resp = prompt("A região Norte tem 3.869.637,9 km² de área! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("A região Norte tem a maior rede hidrográfica do mundo! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("A Floresta Amazônica tem a mais rica biodiversidade do mundo! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    alert(`${nome}, sua pontuação final foi: ${pont}`);
    pont = 0;                      
    }

  function Opc_5(resp, pont ,nome){
    resp = prompt("Os gaúchos têm seu próprio dialeto! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("Os gaúchos não recusam um churrasco com chimarrão! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    resp = prompt("Esse é um dos únicos estados do Brasil que registra neve no inverno! V ou F?");
    if(resp == "v"){
    alert("Resposta certa, parabéns!!");
    pont++;
    }else{
    alert("Resposta incorreta, mas não desista!!");
    }
    alert(`${nome}, sua pontuação final foi: ${pont}`);
    pont = 0;                      
    }

function menu(){
const jogador = prompt("Qual seu nome?")
        let op = 10 
        let cont = 0
        let pontuacao = 0
        let resposta

        while(op != 0){
            op = parseInt(prompt("Sobre qual região você deseja responder o quiz? \n 1 - Nordeste \n 2 - Centro-Oeste \n 3 - Sudeste \n 4 - Norte \n 5 - Sul \n 0 - Sair"))

            switch(op){
                case 1:
                        
                    Opc_1(resposta, pontuacao, jogador);
                    break

                case 2:

                    Opc_2(resposta, pontuacao, jogador);
                    break

                case 3:

                    Opc_3(resposta, pontuacao, jogador);
                    break

                case 4:

                    Opc_4(resposta, pontuacao, jogador);
                    break

                case 5:

                    Opc_5(resposta, pontuacao, jogador);
                    break

                case 0:
                    alert("Você saiu!!")
                    break
                default:
                    alert("digite uma opção valida")
                    break
            }
            

        }
}