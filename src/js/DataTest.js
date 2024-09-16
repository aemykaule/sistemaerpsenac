$(document).ready(function() {
    // Tabela de Clientes
    var clientesTable = $('#clientes').DataTable();

    // Botão de adicionar novo cliente (Clientes)
    $('#addBtnClientes').on('click', function() {
        var nome = customPromptModal("Digite o nome do cliente:");
        var idade = customPromptModal("Digite a idade do cliente:");
        var CPF = customPromptModal("Digite o CPF/CNPJ do cliente:");
        if (nome && idade && CPF) {
            clientesTable.row.add([
                nome,
                idade,
                CPF,
                '<button class="btn border-0 btn-edit"> <span class="icon-pencil"></span></button> <button class="btn border-0 btn-delete"> <span class="icon-bin2"></span> </button>' // Ações (coluna 3)
            ]).draw(false);
        }
    });

    // Função de editar (Clientes)
    $('#clientes tbody').on('click', '.btn-edit', function () {
        var row = clientesTable.row($(this).parents('tr'));
        var data = row.data();
        
        var novoNome = customPromptModal("Editar Nome do cliente:", data[0]);
        var novaIdade = customPromptModal("Editar Idade do cliente:", data[1]);
        var novoCPF = customPromptModal("Editar CPF/CNPJ do cliente:", data[2]);
        if (novoNome && novaIdade && novoCPF){
            data[0] = novoNome;
            data[1] = novaIdade;
            data[2] = novoCPF;
            row.data(data).draw();
        }
    });

    // Função de excluir (Clientes)
    $('#clientes tbody').on('click', '.btn-delete', function () {
        if (confirm("Tem certeza que deseja excluir este cliente?")) {
            clientesTable.row($(this).parents('tr')).remove().draw();
        }
    });

    // Tabela de Fornecedores
    var fornecedoresTable = $('#fornecedores').DataTable();

    // Botão de adicionar nova linha (Fornecedores)
    $('#addBtnFornecedores').on('click', function() {
        var nome = customPromptModal("Digite o nome do fornecedor:");
        var idade = customPromptModal("Digite a idade do fornecedor:");
        var CPF = customPromptModal("Digite o CPF/CNPJ do fornecedor:");
        if (nome && idade && CPF) {
            fornecedoresTable.row.add([
                nome,
                idade,
                CPF,
                '<button class="btn border-0 btn-edit"> <span class="icon-pencil"></span></button> <button class="btn border-0 btn-delete"> <span class="icon-bin2"></span> </button>' // Ações (coluna 3)
            ]).draw(false);
        }
    });

    // Função de editar (Fornecedores)
    $('#fornecedores tbody').on('click', '.btn-edit', function () {
        var row = fornecedoresTable.row($(this).parents('tr'));
        var data = row.data();
        
        var novoNome = customPromptModal("Editar Nome do fornecedor:", data[0]);
        var novaIdade = customPromptModal("Editar Idade do fornecedor:", data[1]);
        var novoCPF = customPromptModal("Editar CPF/CNPJ do fornecedor:", data[2]);
        if (novoNome && novaIdade && novoCPF){
            data[0] = novoNome;
            data[1] = novaIdade;
            data[2] = novoCPF;
            row.data(data).draw();
        }
    });

    // Função de excluir (Fornecedores)
    $('#fornecedores tbody').on('click', '.btn-delete', function () {
        if (confirm("Tem certeza que deseja excluir este fornecedor?")) {
            fornecedoresTable.row($(this).parents('tr')).remove().draw();
        }
    });
});
