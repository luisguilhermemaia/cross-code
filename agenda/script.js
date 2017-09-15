const Contato = function (nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
};

const listaDeContatos = [];

const elementosHtml = {
    addNomeInput: document.getElementById('nome'),
    addTelefoneInput: document.getElementById('telefone'),
    addEmailInput: document.getElementById('email'),
    botaoSalvar: document.getElementById('salvar'),
    listaDeContatosTable: document.getElementById('listaDeContatos'),
    formularioContatos: document.getElementById("formContato"),
    formularioBusca: document.getElementById("formBusca"),
    buscaInput: document.getElementById("busca"),
};

const handlers = {
    adicionaContato: function () {
        const contato = new Contato(
            elementosHtml.addNomeInput.value,
            elementosHtml.addTelefoneInput.value,
            elementosHtml.addEmailInput.value
        );

        if (elementosHtml.botaoSalvar.innerHTML === 'Salvar') {
            listaDeContatos.push(contato);

        } else if (elementosHtml.botaoSalvar.innerHTML == 'Editar') {
            const id = elementosHtml.addNomeInput.getAttribute('idContato');
            listaDeContatos[id] = contato;
            elementosHtml.botaoSalvar.innerHTML = 'Salvar';
        }

        elementosHtml.addNomeInput.value = '';
        elementosHtml.addTelefoneInput.value = '';
        elementosHtml.addEmailInput.value = '';

        view.displayContatos(listaDeContatos);
    },
    deleteContato: function (id) {
        listaDeContatos.splice(id, 1);
        view.displayContatos(listaDeContatos);
    },
    updateContato: function (id) {
        const contato = listaDeContatos[id];

        elementosHtml.addNomeInput.value = contato.nome;
        elementosHtml.addTelefoneInput.value = contato.telefone;
        elementosHtml.addEmailInput.value = contato.email;
        elementosHtml.botaoSalvar.innerHTML = 'Editar';

        const idContato = document.createAttribute('idContato');
        idContato.value = '' + id;
        elementosHtml.addNomeInput.setAttributeNode(idContato);
    }
};

const view = {
    displayContatos: function (lista) {
        elementosHtml.listaDeContatosTable.innerHTML = '';

        lista.forEach(function (contato, index) {
            const tr = document.createElement('tr');
            tr.id = index;

            const thIndex = document.createElement('th');
            thIndex.innerHTML = index;
            tr.appendChild(thIndex);

            Object.values(contato).forEach(function (value) {
                const th = document.createElement('th');
                th.textContent = value;
                tr.appendChild(th);
            });

            var thEdit = document.createElement('th');
            var thDelete = document.createElement('th');
            thEdit.appendChild(this.createEditButton());
            thDelete.appendChild(this.createDeleteButton());

            tr.appendChild(thEdit);
            tr.appendChild(thDelete);

            elementosHtml.listaDeContatosTable.appendChild(tr);
        }, this);
    },
    createDeleteButton: function () {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'btn btn-danger';
        return deleteButton;
    },
    createEditButton: function () {
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'btn btn-warning';
        return editButton;
    },
    setUpEventListeners: function () {
        elementosHtml.listaDeContatosTable.addEventListener('click', function (event) {
            const clickedElement = event.target;
            if (clickedElement.innerHTML == 'Editar') {
                handlers.updateContato(clickedElement.parentNode.parentNode.id);
            }
        });

        elementosHtml.listaDeContatosTable.addEventListener('click', function (event) {
            const clickedElement = event.target;
            if (clickedElement.innerHTML == 'Excluir') {
                handlers.deleteContato(clickedElement.parentNode.id);
            }
        });

        elementosHtml.formularioContatos.addEventListener('submit',
            function (event) {
                event.preventDefault();
                handlers.adicionaContato();
            },
            false);

        elementosHtml.buscaInput.addEventListener('input',
            function (event) {
                const filtro = event.target.nextElementSibling.value;
                view.displayContatos(listaDeContatos.filter((contato) => contato[filtro].includes(event.target.value)));
            },
            false);
    }
};

listaDeContatos.push(new Contato('luis', '11111111', 'luis@gmail.com'));
listaDeContatos.push(new Contato('fabio', '22222222', 'fabiofsdf@gmail.com'));
listaDeContatos.push(new Contato('rafael', '3333333', 'rafael@gmail.com'));
listaDeContatos.push(new Contato('carlos', '444444444', 'carlos@gmail.com'));

view.setUpEventListeners();
view.displayContatos(listaDeContatos);
