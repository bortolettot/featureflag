CREATE TABLE Feature (
    id int NOT NULL AUTO_INCREMENT,
    chave varchar(255) NOT NULL,
    valor varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

/*DATA*/
INSERT Feature (chave, valor) VALUE ('chave1', 'true');
INSERT Feature (chave, valor) VALUE ('chave2', 'false');
INSERT Feature (chave, valor) VALUE ('chave3', 'Valor referente a chave 3');
INSERT Feature (chave, valor) VALUE ('chave4', '1000');