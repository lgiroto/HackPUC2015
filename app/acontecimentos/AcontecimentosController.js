;(function() {

  angular
    .module('boilerplate')
    .controller('AcontecimentosController', AcontecimentosController);

  AcontecimentosController.$inject = ['$scope', '$routeParams', '$firebase', 'FIREBASE_URI', '$cookies'];

  function AcontecimentosController($scope, $routeParams, $firebase, FIREBASE_URI, $cookies) {

    $scope.FaseId = $routeParams.faseId;
    $scope.Estatisticas = null;
    $scope.Acontecimento = {};
    $scope.FazendoRequest = true;
    $scope.Passo = 0;
    $scope.RespostaSelecionada = {};
    $scope.Desdobramento = {};
    $scope.GameOn = true;

    var ref = new Firebase(FIREBASE_URI);
    var acRef = ref.child('Fases');
    var estRef = ref.child('Estatisticas');
    var StatsId = $cookies.get('StatsId');

    acRef.set({
                1: {

                  Img: 'something1',

                  Nome: 'Claudio',

                  Descricao: 'Claudio é publicitário, pai de 2 adolescentes de 14 e 17 anos. Classe média, divorciado, e mora sozinho na Tijuca. Claudio é um homem de 40 anos que tenta se atualizar em questoes de avancos tecnlógicos e redes sociais. Ele tem uma página no facebook, e acha que possui um conhecimento sobre política  acima da média. Fica revoltado com os escândalos de corrupcao que aparecem na tv e na sua linha do tempo, e acha um absurdo que haja tantas pessoas mau-caráter no poder.',

                  Tipo: 1,

                  Acontecimentos: {

                    1: {

                      SituacaoUrl: "breja.png",
                      PerguntaUrl: "duvidacarro.png",
                      Descricao: "É Sábado, dia de descanso para Claudio. Ele tira seu carro da garagem e vai visitar amigos que moram na Barra da Tijuca, para comemorarem o aniversário de um deles. Por se tratar de uma comemoração, o grupo bebeu algumas cervejas. Na hora de ir embora, Claudio, que bebeu muito pouco - principalmente comparado aos amigos - está sóbrio.",
                      Situacao: "Claudio acredita ter plenas condições para assumir o volante, mas tem medo de ser pego na Lei Seca. Além disso, a Barra da Tijuca é um conhecida por ter muitas blitzs nos fins de semana, sendo o risco de ser pego  grande. Contudo, sua situação financeira não é das mais favoráveis e pedir um taxi poderá lhe custar muito caro. Sendo que, não voltar de carro implica em Claudio ter de voltar à Barra no dia seguinte para buscá-lo. O que você recomenda?",
                      Respostas: [{
                          Texto: "Claudio decide dirigir. Verifica no Twitter da Lei Seca aonde as blitzs supostamente estão para ver se há alguma na região.",
                          Implicacoes: { Reputacao: -10, Corrupcao: 0, SituacaoFinanceira: 0 },
                          Probabilidade: 0.4,
                          DesdobramentoPositivo: {
                          	DesdobramentoUrl: 'bafometro.png',
                              ContinuacaoId: 2,
                              Texto: "Você deu sorte e acabou não passando por nenhuma blitz no caminho, mas você não ter tanta sorte da próxima vez, assim como cometer um acidente desnecessário, tome cuidado.",
                              Artigo: "\"Art. 1o  Qualquer concentração de álcool por litro de sangue sujeita o condutor às penalidades administrativas do art. 165 da Lei no 9.503, de 23 de setembro de 1997 - Código de Trânsito Brasileiro, por dirigir sob a influência de álcool.\" A penalidade após autuação é a multa de R$ 1.915,30, recolhimento da habilitação, suspensão do direito de dirigir por 12 meses, além da retenção do veículo, até a apresentação de condutor habilitado.",
                              Fonte: "DECRETO Nº 6.488, DE 19 DE JUNHO DE 2008.",
                              Link: "http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Decreto/D6488.htm, http://www.brasil.gov.br/governo/2013/01/nova-resolucao-deixa-lei-seca-mais-rigida"
                          },
                          DesdobramentoNegativo: {
                          	DesdobramentoUrl: 'bafometro.png',
                            ContinuacaoId: 3,
                            Texto: "Mesmo olhando no Twitter da Lei Seca, você acabou passando por uma blitz que acabara de ser montada. Você foi parado e o policial fez o teste do bafômetro em você, que deu positivo.",
                            Artigo: "\"Art. 1o  Qualquer concentração de álcool por litro de sangue sujeita o condutor às penalidades administrativas do art. 165 da Lei no 9.503, de 23 de setembro de 1997 - Código de Trânsito Brasileiro, por dirigir sob a influência de álcool.\" A penalidade após autuação é a multa de R$ 1.915,30, recolhimento da habilitação, suspensão do direito de dirigir por 12 meses, além da retenção do veículo, até a apresentação de condutor habilitado.",
                              Fonte: "DECRETO Nº 6.488, DE 19 DE JUNHO DE 2008.",
                              Link: "http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Decreto/D6488.htm, http://www.brasil.gov.br/governo/2013/01/nova-resolucao-deixa-lei-seca-mais-rigida"
                          }
                        },
                        {
                          Texto: "Claudio decide pedir um táxi para voltar para casa. O custo aproximado da corrida é de mais de 100 reais.",
                          Implicacoes: { Reputacao: 10, SituacaoFinanceira: -1, Corrupcao: 0 },
                          DesdobramentoPositivo: {
                      		DesdobramentoUrl: 'icontel3.png',
                              ContinuacaoId: 2,
                              Texto: "Claudio pegou o táxi e chegou em casa são e salvo, porém, teve um gasto muito além do esperado para aquela noite. Claudio ganhou 10% de Reputação, porém, sua situação financeira piorou."
                          }
                        },
                        {
                          Texto: "Claudio liga para a ex-mulher, que mora na região, e pede carona, mesmo sabendo que isso pode lhe causar problemas com sua atual namorada.",
                          ContinuacaoId: 2,
                          Implicacoes: { Reputacao: 5, Corrupcao: 0, SituacaoFinanceira: 0 },
                          DesdobramentoPositivo: {
                              ContinuacaoId: 2,
                              Texto: "Claudio deu sorte que ela estava de bom-humor e o levou em casa, ainda que não muito disposta. Mesmo sua namorada não estando completamente confortável com a situação, ela achou responsável da parte dele não voltar dirigindo. Claudio ganhou 5% de Reputação."
                          }
                        }]
                    },

                    2: {

                    	SituacaoUrl: "claudioechefe.png",
                      PerguntaUrl: "duvidacarro.png",
                      Descricao: "A Agência de Publicidade onde Claudio trabalha está sofrendo gravemente com a crise econômica. Assim, está tendo de cortar gastos. O Gerente de Claudio avisa-o que eles irão cancelar a anualidade dos softwares utilizados para a produção de conteúdo na empresa e serão substituídos por versões 'alternativas' - um eufemismo para não dizer que passarão a usar programas piratas.",
                      Situacao: "Claudio não se sente nem um pouco confortável com essa situação, visto que os softwares utilizados pela empresa possuem fins comerciais. No entanto, sabe que qualquer oposição que faça quanto a a isso, poderá custar seu emprego; do qual ele depende para sustentar sua família.",
                      Respostas: [{
                          Texto: "Claudio faz vista grossa para a situação e faz uso dos softwares piratas.",
                          ContinuacaoId: 6,
                          Implicacoes: { Corrupcao: 5, Reputacao: 0, SituacaoFinanceira: 0 }
                        },
                        {
                          Texto: "Claudio tenta argumentar com seus superiores contra a realização dos cortes às anualidades do programas.",
                          Implicacoes: { Reputacao: 10, Corrupcao: 0, SituacaoFinanceira: 0 },
                          Probabilidade: 0.35,
                          DesdobramentoPositivo: {
                              ContinuacaoId: 4,
                              Texto: "Ainda que relutantes, os superiores de Claudio preferiram continuar pagando as anualidades dos softwares, como sugerido por ele, com medo da fiscalização. A Reputação de Claudio subiu em 10%."
                          },
                          DesdobramentoNegativo: {
                            ContinuacaoId: 6,
                            Texto: "Por mais apelativo que as sugestões de Claudio pudessem ser, seus superiores optaram por manter o cancelamento das assinaturas. Ainda assim, a Reputação de Claudio subiu em 10%."
                          }
                        },
                        {
                          Texto: "Claudio começa a procurar por emprego em outra empresa.",
                          ContinuacaoId: 5,
                          Implicacoes: { Reputacao: 15, Corrupcao: 0, SituacaoFinanceira: 0 }
                        }]
                    },

                    3: {

                    	SituacaoUrl: "pegoleiseca.png",
                      PerguntaUrl: "duvidapropina.png",
                      Descricao: "Claudio foi pego na Lei Seca! Se ele não fizer nada, vai ter sua carteira recolhida, seus direitos de dirigir suspensos por um ano e arcará com a multa de R$ 1.915,40 - sendo que ele não tem esse dinheiro.",
                      Situacao: "Claudio sabe que tentar subornar um policial é bastante arriscado. No entanto, alguns amigos já relataram que é comum encontrar agentes corruptos nessas operacoes da Lei Seca, o que pode fazer ele se safar de uma grande dor de cabeça.",
                      Respostas: [{
                          Texto: "Claudio entrega sua carteira e sofre as devidas consequências.",
                          Implicacoes: { Reputacao: 5, SituacaoFinanceira: -2, Corrupcao: 0 },
                          DesdobramentoPositivo: {
                              ContinuacaoId: 2,
                              Texto: "O policial confiscou os documentos e o carro de Claudio. Além disso, ele receberá a conta da multa em breve, o que terá grande impacto negativo em seu planejamento financeiro."
                          }
                        },
                        {
                          Texto: "Claudio tenta subornar policial.",
                          Implicacoes: { Reputacao: -10, Corrupcao: 20, SituacaoFinanceira: 0 },
                          Probabilidade: 0.75,
                          DesdobramentoPositivo: {
                            ContinuacaoId: 2,
                            Texto: "O policial que te atendeu era corrupto e aceitou discretamente a proprina oferecida. Você respira aliviado, ainda que com peso na consciência, e volta para casa.",
                            Artigo: "\"Art. 333 - Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício: Pena (...) de reclusão e multa.\"",
                            Fonte: "DECRETO DE LEI Nº 2.848 DE 07 DE DEZEMBRO DE 1940",
                            Link: "http://www.jusbrasil.com.br/topicos/10597330/artigo-333-do-decreto-lei-n-2848-de-07-de-dezembro-de-1940"
                          },
                          DesdobramentoNegativo: {
                              ContinuacaoId: 0,
                              Texto: "O policial percebeu a tentativa de suborno e deu voz de prisão ao Claudio. Assim, nossa história acaba aqui...",
                              Artigo: "\"Art. 333 - Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício: Pena (...) de reclusão e multa.\"",
                              Fonte: "DECRETO DE LEI Nº 2.848 DE 07 DE DEZEMBRO DE 1940",
                              Link: "http://www.jusbrasil.com.br/topicos/10597330/artigo-333-do-decreto-lei-n-2848-de-07-de-dezembro-de-1940"
                          }
                        }]

                    }

                  }
                  
                }
          });

    $scope.RecuperaEstatisticas = function (applyBool) {
      estRef.child('/' + StatsId).on("value", function(response) {
        $scope.Estatisticas = angular.copy(response.val());
        $scope.AlturaReputacao = 100 - parseInt($scope.Estatisticas.Reputacao);
        if($scope.AlturaReputacao < 0){
          $scope.AlturaReputacao = 0;
        }
        $scope.AlturaCorrupcao = 100 - parseInt($scope.Estatisticas.Corrupcao);
        if($scope.AlturaCorrupcao < 0){
          $scope.AlturaCorrupcao = 0;
        }
        $scope.AlturaCompleto = parseInt($scope.Estatisticas.Completo);
        if($scope.AlturaCompleto > 100){
          $scope.AlturaCompleto = 100;
        }
      });
    };
    $scope.RecuperaEstatisticas(true);

    acRef.child('/' + $scope.FaseId + '/Acontecimentos/1').once("value", function(response) {
      $scope.Acontecimento = angular.copy(response.val());
      $scope.FazendoRequest = false;
    });

    $scope.RespostaProbabilidade = function(prob) {
      return !!prob && Math.random() <= prob;
    };

    $scope.RealizaAcao = function(Resposta){
      $scope.RespostaSelecionada = Resposta;

      // Se Há DesdobramentoPositivo ou DesdobramentoNegativo
      if(Resposta.Probabilidade){ 
        var probResult = $scope.RespostaProbabilidade(Resposta.Probabilidade);

        if(probResult){
          $scope.Desdobramento = Resposta.DesdobramentoPositivo;
        } else {
          $scope.Desdobramento = Resposta.DesdobramentoNegativo;
        }
      } else{
      	$scope.Desdobramento = Resposta.DesdobramentoPositivo;
      }

      // Atualiza Estatísticas de Acordo com a Resposta
      $scope.FazendoRequest = true;
      var Estatisticas = estRef.child(StatsId);

      var TotalCorrupcao = $scope.Estatisticas.Corrupcao + Resposta.Implicacoes.Corrupcao;
      var TotalFinanceira = $scope.Estatisticas.SituacaoFinanceira + Resposta.Implicacoes.SituacaoFinanceira;
      var TotalReputacao = $scope.Estatisticas.Reputacao + Resposta.Implicacoes.Reputacao;

      	if(TotalReputacao <=0)
  			TotalReputacao = 0;


      // Perdendo o Jogo pelas Estatísticas
      if(TotalCorrupcao >= 100){
        $scope.GameOver("Corrupção");
        return;
      }
      if(TotalFinanceira <= 0){
        $scope.GameOver("Falência");
        return;
      }

      Estatisticas.update({
        "Corrupcao": TotalCorrupcao,
        "SituacaoFinanceira": TotalFinanceira,
        "Reputacao": TotalReputacao
      });

      	$scope.FazendoRequest = false;
      	$scope.seeOpt();
    };

    $scope.ContinuaHistoria = function (ContinuacaoId) {
    	if(ContinuacaoId == 0){
    		$scope.GameOver("História");
    		return;
    	}

      $scope.FazendoRequest = true;
      $scope.Acontecimento = {};
      acRef.child('/' + $scope.FaseId + '/Acontecimentos/' + ContinuacaoId).once("value", function(response) {
        $scope.Acontecimento = angular.copy(response.val());
        $scope.FazendoRequest = false;
        $scope.$apply();
      	//$scope.RecuperaEstatisticas();
      });
    };

    $scope.GameOver = function(Motivo){
    	// Remove Estatísticas do Jogo Atual
    	var estRef = ref.child('Estatisticas/' + StatsId);
    	estRef.remove();

    	// Acaba com o Jogo na Interface
    	$scope.GameOn = false;
    };

    $scope.seeOpt = function(){
    	if(!$scope.GameOn)
    		$location.path('/');

  		if($scope.Passo == 2){
	      	$scope.ContinuaHistoria($scope.Desdobramento.ContinuacaoId);
	        $scope.Passo = 0;
      	}
      	else
        	$scope.Passo++;
    };

  }

})();