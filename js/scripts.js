//----------------------------------Declarations------------------------------------//

const accounts = {};
var accountType = null;
var clientName = "Type in the account handler's name.";
var agencyNumber = 0001;
var accountNumber = 250001;
var confirmationBox = null;
var confirmationBox2 = null;

//----------------------------------Account Classes------------------------------------//

class ContaBancaria {
    constructor(nome, agencia, numero, tipo) {
        this.nome = nome;
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return "Denied, no funds."
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(nome, agencia, numero, cartaoCredito) {
        super(nome, agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(nome, agencia, numero) {
        super(nome, agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(nome, agencia, numero) {
        super(nome, agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Denied, higher than the $500 student's limit."
        }
        this._saldo = this._saldo - valor;
    }

}

//----------------------------------Account Type----------------------------------//
function inputClearAccount() {
    let inputBoxActive = document.getElementById('inputBoxAccount');
    inputBoxActive.value = null;
}

function resetAccountInput() {
    if (accountType != '1' && accountType != '2' && accountType != '3') {
        document.getElementById('inputBoxAccount').value = '(1) Checking Account (2) Savings Account (3) Students Account';
    }
}

function resetAccountInput2() {
    document.getElementById('inputBoxAccount').value = '(1) Checking Account (2) Savings Account (3) Students Account';
}

var inputBoxAccount = document.getElementById('inputBoxAccount');
inputBoxAccount.addEventListener('click', inputClearAccount);
inputBoxAccount.addEventListener('focusout', resetAccountInput);

inputBoxAccount.addEventListener('keyup', function(event) {
    accountType = document.getElementById('inputBoxAccount').value;
    if (event.key === 'Enter') {
        if (accountType == '1' || accountType == '2' || accountType == '3') {
            accountType = document.getElementById('inputBoxAccount').value;
            document.getElementById('inputBoxName').focus();
            inputClearName();
        } else if (document.getElementById('inputBoxAccount').value == 'INVALID PROMPT!') {
            inputClearAccount();
        } else document.getElementById('inputBoxAccount').value = 'INVALID PROMPT!';
    }
});

//----------------------------------Client Name----------------------------------//
function inputClearName() {
    let inputBoxActive = document.getElementById('inputBoxName');
    inputBoxActive.value = null;
}

function resetNameInput() {
    if (clientName == "Type in the account handler's name." || clientName == "") {
        document.getElementById('inputBoxName').value = "Type in the account handler's name.";
    }
}

function resetNameInput2() {
    document.getElementById('inputBoxName').value = "Type in the account handler's name.";
}

var inputBoxName = document.getElementById('inputBoxName');
inputBoxName.addEventListener('click', inputClearName);
inputBoxName.addEventListener('focusout', resetNameInput);

inputBoxName.addEventListener('keyup', function(event) {
    clientName = document.getElementById('inputBoxName').value;
    if (event.key === 'Enter') {
        if (clientName != "Type in the account handler's name." && clientName != "" && clientName != 'INVALID PROMPT!') {
            clientName = document.getElementById('inputBoxName').value;
            document.getElementById('inputBoxAgency').focus();
            inputClearAgency();
        } else if (document.getElementById('inputBoxName').value == 'INVALID PROMPT!') {
            inputClearName();
        } else document.getElementById('inputBoxName').value = 'INVALID PROMPT!';
    }
});

//----------------------------------Agency Number----------------------------------//
function inputClearAgency() {
    document.getElementById('inputBoxAgency').type = 'number';
    let inputBoxActive = document.getElementById('inputBoxAgency');
    inputBoxActive.value = null;
}

function resetAgencyInput() {
    if (agencyNumber == 0001 || agencyNumber == 'INVALID PROMPT!') {
        document.getElementById('inputBoxAgency').type = 'number';
        document.getElementById('inputBoxAgency').value = 0001;
    }
}

function resetAgencyInput2() {
    document.getElementById('inputBoxAgency').type = 'number';
    document.getElementById('inputBoxAgency').value = 0001;
}

var inputBoxAgency = document.getElementById('inputBoxAgency');
inputBoxAgency.addEventListener('click', inputClearAgency);
inputBoxAgency.addEventListener('focusout', resetAgencyInput);

inputBoxAgency.addEventListener('keyup', function(event) {
    agencyNumber = document.getElementById('inputBoxAgency').value;
    parseInt(agencyNumber);
    if (event.key === 'Enter') {
        if (agencyNumber <= 9999 && agencyNumber >= 1) {
            document.getElementById('inputBoxAccountNumber').type = 'text';
            if (agencyNumber < 10) {
                agencyNumber = agencyNumber.toString();
                agencyNumber = '000' + document.getElementById('inputBoxAgency').value;
                document.getElementById('inputBoxAccountNumber').focus();
                inputClearAccountNumber();
            } else if (agencyNumber >= 10 && agencyNumber < 100) {
                agencyNumber = agencyNumber.toString();
                agencyNumber = '00' + document.getElementById('inputBoxAgency').value;
                document.getElementById('inputBoxAccountNumber').focus();
                inputClearAccountNumber();
            } else if (agencyNumber >= 100 && agencyNumber < 1000) {
                agencyNumber = agencyNumber.toString();
                agencyNumber = '0' + document.getElementById('inputBoxAgency').value;
                document.getElementById('inputBoxAccountNumber').focus();
                inputClearAccountNumber();
            } else {
                agencyNumber = document.getElementById('inputBoxAgency').value;
                document.getElementById('inputBoxAccountNumber').focus();
                inputClearAccountNumber();
            }
        } else if (document.getElementById('inputBoxAgency').value == 'INVALID PROMPT!') {
            inputClearAgency();
        } else {
            document.getElementById('inputBoxAgency').type = 'text'
            document.getElementById('inputBoxAgency').value = 'INVALID PROMPT!';
        }
    }
});


//----------------------------------Account Number----------------------------------//

function inputClearAccountNumber() {
    document.getElementById('inputBoxAccountNumber').type = 'number';
    let inputBoxActive = document.getElementById('inputBoxAccountNumber');
    inputBoxActive.value = null;
}

function resetAccountNumberInput() {
    if (accountNumber == 250001 || accountNumber == 'INVALID PROMPT!') {
        document.getElementById('inputBoxAccountNumber').type = 'number';
        document.getElementById('inputBoxAccountNumber').value = '250001';
    }
}

function resetAccountNumberInput2() {
    document.getElementById('inputBoxAccountNumber').type = 'number';
    document.getElementById('inputBoxAccountNumber').value = '250001';
}

var inputBoxAccountNumber = document.getElementById('inputBoxAccountNumber');
inputBoxAccountNumber.addEventListener('click', inputClearAccountNumber);
inputBoxAccountNumber.addEventListener('focusout', resetAccountNumberInput);

inputBoxAccountNumber.addEventListener('keyup', function(event) {
    accountNumber = document.getElementById('inputBoxAccountNumber').value;
    parseInt(accountNumber);
    if (event.key === 'Enter') {
        if (accountNumber <= 999999 && accountNumber >= 1) {
            accountNumber = document.getElementById('inputBoxAccountNumber').value;
            document.getElementById('inputBoxConfirmation').focus();
            inputClearConfirmation();
        } else if (document.getElementById('inputBoxAccountNumber').value == 'INVALID PROMPT!') {
            inputClearAgency();
        } else {
            document.getElementById('inputBoxAccountNumber').type = 'text';
            document.getElementById('inputBoxAccountNumber').value = 'INVALID PROMPT!';
        }
    }
});

//----------------------------------Confirmation----------------------------------//

function inputClearConfirmation() {
    let inputBoxActive = document.getElementById('inputBoxConfirmation');
    inputBoxActive.value = null;
}

function resetConfirmationInput() {
    document.getElementById('inputBoxConfirmation').value = 'Y/N?';
}

var inputBoxConfirmation = document.getElementById('inputBoxConfirmation');
inputBoxConfirmation.addEventListener('click', inputClearConfirmation);
inputBoxConfirmation.addEventListener('focusout', resetConfirmationInput);

inputBoxConfirmation.addEventListener('keyup', function(event) {
    confirmationBox = document.getElementById('inputBoxConfirmation').value;
    if (event.key === 'Enter') {
        if (confirmationBox == 'Y' || confirmationBox == 'y') {
            confirmationBox = document.getElementById('inputBoxConfirmation').value
            createAccount();
            goToMainPage();
            addAccountToMain();
        } else if (confirmationBox == 'N' || confirmationBox == 'n') {
            confirmationBox = document.getElementById('inputBoxConfirmation').value
        } else if (document.getElementById('inputBoxConfirmation').value == 'INVALID PROMPT!') {
            inputClearConfirmation();
        } else document.getElementById('inputBoxConfirmation').value = 'INVALID PROMPT!';
    }
});

//---------------------------------Account Creation---------------------------------//

function createAccount() {
    if (accountNumber != 'INVALID PROMPT!' && accountNumber != '' && agencyNumber != 'INVALID PROMPT!' && agencyNumber != '' && clientName != 'INVALID PROMPT!' && clientName != '' && accountType != 'INVALID PROMPT!' && accountType != '') {
        if (accountType == 1) {
            accounts[accountNumber] = new ContaCorrente(clientName, agencyNumber, accountNumber, true);
        } else if (accountType == 2) {
            accounts[accountNumber] = new ContaPoupanca(clientName, agencyNumber, accountNumber);
        } else accounts[accountNumber] = new ContaUniversitaria(clientName, agencyNumber, accountNumber);
    }
}

//---------------------------Create Account Confirmation-----------------------------//

function inputClearConfirmation2() {
    let inputBoxActive = document.getElementById('inputBoxConfirmation2');
    inputBoxActive.value = null;
}

function resetConfirmationInput2() {
    document.getElementById('inputBoxConfirmation2').value = 'Y/N?';
}

var inputBoxConfirmation2 = document.getElementById('inputBoxConfirmation2');
inputBoxConfirmation2.addEventListener('click', inputClearConfirmation2);
inputBoxConfirmation2.addEventListener('focusout', resetConfirmationInput2);

inputBoxConfirmation2.addEventListener('keyup', function(event) {
    confirmationBox2 = document.getElementById('inputBoxConfirmation2').value;
    if (event.key === 'Enter') {
        if (confirmationBox2 == 'Y' || confirmationBox2 == 'y') {
            confirmationBox2 = document.getElementById('inputBoxConfirmation2').value
            goToCreateAccount();
        } else if (confirmationBox2 == 'N' || confirmationBox2 == 'n') {
            confirmationBox2 = document.getElementById('inputBoxConfirmation2').value
        } else if (document.getElementById('inputBoxConfirmation2').value == 'INVALID PROMPT!') {
            inputClearConfirmation();
        } else document.getElementById('inputBoxConfirmation2').value = 'INVALID PROMPT!';
    }
});

//------------------------------------Change Screens--------------------------------------//

function goToCreateAccount() {
    document.getElementById('terminal2').style.display = "none";
    document.getElementById('terminal').style.display = "flex";
    resetConfirmationInput();
    resetAccountNumberInput2();
    resetAgencyInput2();
    resetNameInput2();
    resetAccountInput2();
}

function goToMainPage() {
    document.getElementById('terminal').style.display = "none";
    document.getElementById('terminal2').style.display = "flex";
}

//----------------------------------Add Account to List------------------------------------//

function addAccountToMain() {
    var newDiv = document.createElement("div");
    let terminalWrapper2 = document.getElementById('terminalDadosContaWrapper');
    terminalWrapper2.appendChild(newDiv);
    newDiv.setAttribute("class", "terminalDadosConta");
    var newP = document.createElement("p");
    newP.setAttribute("class", "textField7");
    newP.innerHTML = accountNumber;
    newDiv.appendChild(newP);
    var newP2 = document.createElement("p");
    newP2.setAttribute("class", "textField7");
    newP2.innerHTML = agencyNumber;
    newDiv.appendChild(newP2);
    var newP3 = document.createElement("p");
    newP3.setAttribute("class", "textField6");
    newP3.innerHTML = clientName;
    newDiv.appendChild(newP3);
    var newP4 = document.createElement("p");
    newP4.setAttribute("class", "textField8");
    if (accountType == 1) {
        newP4.innerHTML = 'Checking Account';
    } else if (accountType == 2) {
        newP4.innerHTML = 'Savings Account';
    } else newP4.innerHTML = 'Students Account';
    newDiv.appendChild(newP4);
}