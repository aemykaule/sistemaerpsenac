$(document).ready(function() {
    var table = $('#example').DataTable();

    // Botão de adicionar nova linha
    $('#addBtn').on('click', function() {
        var nome = prompt("Digite o nome:");
        var idade = prompt("Digite a idade:");
        var CPF = prompt("Digite o CPF/CNPJ:")
        if (nome && idade && CPF) {
            table.row.add([
                nome,
                idade,
                CPF,
                '<button class="btn border-0 btn-edit"> <span class="icon-pencil"></span></button> <button class="btn bORDER-0 btn-delete"> <span class="icon-bin2"></span> </button>' // Ações (coluna 3)
            ]).draw(false);
        }
    });

    // Função de editar
    $('#example tbody').on('click', '.btn-edit', function () {
        var row = table.row($(this).parents('tr'));
        var data = row.data();
        
        var novoNome = prompt("Editar Nome:", data[0]);
        var novaIdade = prompt("Editar Idade:", data[1]);
        var novoCPF = prompt("Editar CPF/CNPJ:", data[2]);
        if (novoNome && novaIdade && novoCPF){
            data[0] = novoNome;
            data[1] = novaIdade;
            data[2] = novoCPF;
            row.data(data).draw();
        }
    });

    // Função de excluir
    $('#example tbody').on('click', '.btn-delete', function () {
        if (confirm("Tem certeza que deseja excluir esta linha?")) {
            table.row($(this).parents('tr')).remove().draw();
        }
    });
});
