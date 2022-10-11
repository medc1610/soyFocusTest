export interface Metas {
    metas: Meta[];
}

export interface Meta {
    metaId:             number;
    metaNombre:         string;
    serie:              string;
    saldoDisponible:    number;
    apv:                boolean;
    regimenJubilatorio: null;
    retirarMontototal:  boolean;
    retirarOtroMonto:   number;
    retirarTodo:        boolean;
}