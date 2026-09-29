export {};


interface Produit {
    id: number;
    nom: string;
    prix: number;
    stock: number;
    categorie: string;
    descriptionInterne?: string;
}

// À compléter : définissez les 3 types utilitaires
//type NouveauProduit =  Omit<Produit, 'id'>;
type NouveauProduit = Omit<Produit, 'id'>;
type MiseAJourProduit = Partial<NouveauProduit>;
type ProduitPublic = Omit<Produit, 'descriptionInterne'>;

function genererCatalogue(
    produits: Produit[],
): Readonly<Record<number, Produit>> {
    // à compléter : retourne un objet clé id → produit
    const catalogue: Record<number, Produit> = {};
    for (const p of produits) {
        // à compléter : associer la clé p.id au produit p
        produits[p.id] = p;
    }
    return catalogue;

  //  return {};
}

// ── Tests (ne pas modifier) ──
const entrepot: Produit[] = [
    { id: 1, nom: 'Laptop', prix: 1200, stock: 5, categorie: 'Informatique' },
    { id: 2, nom: 'Souris', prix: 25, stock: 50, categorie: 'Accessoires' },
];

const nouveauOk: NouveauProduit = {
    nom: 'Clavier', prix: 75, stock: 30, categorie: 'Accessoires',
};
const patchOk: MiseAJourProduit = { prix: 80 };
const pubOk: ProduitPublic = {
    id: 1, nom: 'Laptop', prix: 1200, stock: 5, categorie: 'Informatique',
};


const erreurGrp = {
    // @ts-expect-error : id est interdit dans NouveauProduit
    id: 9, nom: 'X', prix: 1, stock: 1, categorie: 'Y',
} satisfies NouveauProduit;

const catalogue = genererCatalogue(entrepot);
console.assert(catalogue[1]?.nom === 'Laptop', 'clé 1 → Laptop');
console.assert(Object.keys(catalogue).length === 2, '2 clés');
console.log('Exercice 2.4.3 terminé   ');

