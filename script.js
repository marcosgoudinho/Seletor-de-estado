//Função que lê os dados da url
$(document).ready(function() {
    $.ajax({
        url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        method: 'GET',
        //função que lista os estados no <select>
        success: function(data) {
            const estados = data;
            let options = '<option value=""> </option>';
            estados.forEach(function(estado) {
                options += `<option value="${estado.id}">${estado.nome}</option>`;
            });
            $('#estados').html(options);
        },
        error: function() {
            alert('Erro ao carregar os estados');
        }
    });

    //Adiciona lógica para o botão de selecionar o estado
    $('#selecionar').click(function() {
        const estadoId = $('#estados').val();
        if (estadoId) {
            //Salva o ID do estado selecionado no localStorage e redireciona para cidades.html
            localStorage.setItem('estadoId', estadoId);
            window.location.href = 'cidades.html';
        } else {
            alert('Por favor, selecione um estado.');
        }
    });
});

//Adiciona o evento de clique no botão "Voltar para a Página Inicial" na tela cidades.html
$(document).ready(function() {
    document.getElementById('voltar').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});