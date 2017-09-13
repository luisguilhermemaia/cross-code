const Contato = function (nome, telefone, email) {
    this.id = null;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
};

const listaDeContatos = [];

listaDeContatos.push(new Contato('Eu', '39482394823', 'asfasf@gds.com'));
listaDeContatos.push(new Contato('tretu', '394823823', 'fsdf@gds.com'));
listaDeContatos.push(new Contato('tcvbcvbu', '39482394823', '23532@gds.com'));
listaDeContatos.push(new Contato('twetu', '394824823', 'fgadfg@gds.com'));

const elementosHtml = {
    addNomeInput: document.getElementById('nome'),
    addTelefoneInput: document.getElementById('telefone'),
    addEmailInput: document.getElementById('email'),
    botaoSalvar: document.getElementById('salvar')
};

const handlers = {
    adicionaContato: function () {
        const contato = new Contato(
            elementosHtml.addNomeInput.value,
            elementosHtml.addTelefoneInput.value,
            elementosHtml.addEmailInput.value
        );

        if (elementosHtml.botaoSalvar.innerHTML == 'Salvar') {
            listaDeContatos.push(contato);

        } else if (elementosHtml.botaoSalvar.innerHTML == 'Editar') {
            var id = elementosHtml.addNomeInput.getAttribute("idContato");
            listaDeContatos[id] = contato;
            elementosHtml.botaoSalvar.innerHTML = 'Salvar';
        }

        elementosHtml.addNomeInput.value = '';
        elementosHtml.addTelefoneInput.value = '';
        elementosHtml.addEmailInput.value = '';

        view.displayContatos();
    },
    deleteContato: function (id) {
        listaDeContatos.splice(id, 1);
        view.displayContatos();
    },
    updateContato: function (id) {
        const contato = listaDeContatos[id];

        elementosHtml.addNomeInput.value = contato.nome;
        elementosHtml.addTelefoneInput.value = contato.telefone;
        elementosHtml.addEmailInput.value = contato.email;
        elementosHtml.botaoSalvar.innerHTML = 'Editar';

        const idContato = document.createAttribute("idContato");        
        idContato.value = '' + id;
        elementosHtml.addNomeInput.setAttributeNode(idContato);
    }
};

const view = {
    displayContatos: function () {
        const contatosUl = document.getElementById('listaDeContatos');
        contatosUl.className = 'list-group';
        contatosUl.innerHTML = '';

        listaDeContatos.forEach(function (contato, index) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex w-100 justify-content-between';
            li.textContent = contato.nome + ' / ' + contato.email + ' / ' + contato.telefone;
            li.id = index;
            li.appendChild(this.createEditButton());
            li.appendChild(this.createDeleteButton());

            contatosUl.appendChild(li);
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
        const contatosUl = document.getElementById('listaDeContatos');

        contatosUl.addEventListener('click', function (event) {
            const clickedElement = event.target;
            if (clickedElement.className == 'btn btn-warning') {
                handlers.updateContato(clickedElement.parentNode.id);
            }
        });

        contatosUl.addEventListener('click', function (event) {
            const clickedElement = event.target;
            if (clickedElement.className == 'btn btn-danger') {
                handlers.deleteContato(clickedElement.parentNode.id);
            }
        });

        document.getElementById("formContato").addEventListener("submit",
            function (event) {
                event.preventDefault();
                handlers.adicionaContato();
            },
            false);
    }
};

view.setUpEventListeners();
view.displayContatos();








