export {};


class CompteBancaire {
    private solde: number;
    readonly numero: string;
    static nbComptes = 0;

    constructor(numero: string, soldeInitial = 0) {
        // à compléter (incrémentez nbComptes)
        this.solde=soldeInitial
        this.numero = numero;
        CompteBancaire.nbComptes++;
    }

    deposer(montant: number): void {
        // à compléter : erreur si montant <= 0
        if (montant <= 0) {
            throw new Error('le montant doit etre > 0');
        }
// ici, on sait que tout est valide
        this.solde=this.solde+montant;
    }

    retirer(montant: number): void {
        // à compléter : erreur si solde insuffisant
        if (montant > this.solde) {
            throw new Error('solde insuffisant');
        }
        this.solde=this.solde-montant;
    }

    get soldeActuel(): number {
        // à compléter

        return this.solde;
    }
}

// ── Tests (ne pas modifier) ──
const c1 = new CompteBancaire('A-100', 500);
const c2 = new CompteBancaire('B-200');
c1.deposer(200);
console.assert(c1.soldeActuel === 700, '700 après dépôt');
c1.retirer(150);
console.assert(c1.soldeActuel === 550, '550 après retrait');
console.assert(c2.soldeActuel === 0, 'solde initial = 0');
console.assert(CompteBancaire.nbComptes === 2, '2 comptes créés');
try {
    c1.retirer(9999);
    console.assert(false, 'devrait lever une erreur');
} catch { /* erreur attendue */ }
try {
    c1.deposer(0);
    console.assert(false, 'devrait lever une erreur');
} catch { /* erreur attendue */ }
console.log('Exercice 2.4.1 terminé   ');